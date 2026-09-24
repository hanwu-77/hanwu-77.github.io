/*
  Everything visible is regular HTML/CSS/SVG and can be edited directly.
  Segment geometry/colors are centralized here for easy tuning.
*/

const stage = document.getElementById('stage');
const baseWidth = 1672;
const baseHeight = 941;

function fitStage() {
  const scale = Math.min(window.innerWidth / baseWidth, window.innerHeight / baseHeight);
  const x = (window.innerWidth - baseWidth * scale) / 2;
  const y = (window.innerHeight - baseHeight * scale) / 2;
  stage.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
}
window.addEventListener('resize', fitStage);
fitStage();

const NS = 'http://www.w3.org/2000/svg';
const segmentGroup = document.getElementById('segments');

// Angles are degrees clockwise from 12 o'clock.
const segments = [
  { start: 0,   end: 61,  color: '#dbd1c6' },
  { start: 61,  end: 111, color: '#8ca4bf' },
  { start: 111, end: 153, color: '#23272c' },
  { start: 153, end: 183, color: '#8ca4bf' },
  { start: 183, end: 211, color: '#d2c8bb' },
  { start: 208, end: 257, color: '#23272c', radius: 459 },
];

function polar(cx, cy, r, deg) {
  const rad = (deg - 90) * Math.PI / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function ringSector(cx, cy, outerR, innerR, startDeg, endDeg) {
  const a = polar(cx, cy, outerR, startDeg);
  const b = polar(cx, cy, outerR, endDeg);
  const c = polar(cx, cy, innerR, endDeg);
  const d = polar(cx, cy, innerR, startDeg);
  const large = endDeg - startDeg > 180 ? 1 : 0;
  return [
    `M ${a.x} ${a.y}`,
    `A ${outerR} ${outerR} 0 ${large} 1 ${b.x} ${b.y}`,
    `L ${c.x} ${c.y}`,
    `A ${innerR} ${innerR} 0 ${large} 0 ${d.x} ${d.y}`,
    'Z'
  ].join(' ');
}

const innerRadius = 270;

function annularSectorCentroidRadius(innerR, outerR, sweepDeg) {
  const theta = sweepDeg * Math.PI / 180;
  // Geometric centroid of an annular sector, measured along its angle bisector.
  return (4 * Math.sin(theta / 2) * (outerR ** 3 - innerR ** 3)) /
    (3 * theta * (outerR ** 2 - innerR ** 2));
}

segments.forEach((seg, index) => {
  const outerRadius = seg.radius || 433;
  const path = document.createElementNS(NS, 'path');
  path.setAttribute('d', ringSector(450, 450, outerRadius, innerRadius, seg.start, seg.end));
  path.setAttribute('fill', seg.color);
  segmentGroup.appendChild(path);

  // Keep the icon + number + title + summary as one centered visual group.
  // Position is derived from the same geometry that draws each colored sector,
  // so later changes to sector angles stay aligned automatically.
  const card = document.querySelector(`.card-${String(index + 1).padStart(2, '0')}`);
  if (card) {
    const midAngle = (seg.start + seg.end) / 2;
    const centroidRadius = annularSectorCentroidRadius(innerRadius, outerRadius, seg.end - seg.start);
    const visualOffset = [18, 16, 14, 12, 12, 14][index] || 14;
    const point = polar(450, 450, centroidRadius + visualOffset, midAngle);
    card.style.left = `${point.x}px`;
    card.style.top = `${point.y}px`;
  }
});

// Prevent Enter from creating block elements when editing one-line labels/links.
document.querySelectorAll('a[contenteditable="true"], h1[contenteditable="true"], h2[contenteditable="true"], h3[contenteditable="true"], .num[contenteditable="true"], footer[contenteditable="true"]').forEach((el) => {
  el.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') event.preventDefault();
  });
});


// GitHub/visitor mode: cards behave as navigation modules.
// Append ?edit=1 to the URL when you want browser-side text editing for visual tweaks.
const params = new URLSearchParams(window.location.search);
const editMode = params.get('edit') === '1';
document.documentElement.classList.toggle('edit-mode', editMode);
document.querySelectorAll('[contenteditable]').forEach((el) => {
  el.setAttribute('contenteditable', editMode ? 'true' : 'false');
});

const detailOverlay = document.getElementById('detail-overlay');
const detailPanel = detailOverlay?.querySelector('.detail-panel');
const detailClose = detailOverlay?.querySelector('.detail-close');
const detailBackdrop = detailOverlay?.querySelector('.detail-backdrop');
const detailNumber = document.getElementById('detail-number');
const detailTitle = document.getElementById('detail-title');
const detailSummary = document.getElementById('detail-summary');
const detailContent = document.getElementById('detail-content');
let lastModuleTrigger = null;

function cleanEditableText(el) {
  return (el?.innerText || '').replace(/\s+/g, ' ').trim();
}

function openModule(card) {
  if (!detailOverlay || !detailPanel || editMode) return;
  const moduleId = card.dataset.module;
  const title = cleanEditableText(card.querySelector('h3'));
  const summary = cleanEditableText(card.querySelector('p'));
  const template = document.getElementById(`module-${moduleId}-content`);

  detailNumber.textContent = moduleId;
  detailTitle.textContent = title;
  detailSummary.textContent = summary;
  detailPanel.style.setProperty('--panel-accent', card.dataset.accent || '#8ca4bf');
  detailContent.replaceChildren();
  if (template) detailContent.appendChild(template.content.cloneNode(true));

  lastModuleTrigger = card.querySelector('.module-trigger');
  detailOverlay.classList.add('is-open');
  detailOverlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('detail-open');
  requestAnimationFrame(() => detailClose?.focus({ preventScroll: true }));
}

function closeModule() {
  if (!detailOverlay?.classList.contains('is-open')) return;
  detailOverlay.classList.remove('is-open');
  detailOverlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('detail-open');
  lastModuleTrigger?.focus({ preventScroll: true });
}

document.querySelectorAll('.nav-card[data-module]').forEach((card) => {
  const trigger = card.querySelector('.module-trigger');
  trigger?.addEventListener('click', () => openModule(card));
  card.addEventListener('keydown', (event) => {
    if (editMode) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openModule(card);
    }
  });
});

detailClose?.addEventListener('click', closeModule);
detailBackdrop?.addEventListener('click', closeModule);
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModule();
});
