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


// --- Multilingual content --------------------------------------------------
// Language names are shown in their own writing systems in the selector.
// Personal names (Han Wu / 吴含) and brand names are intentionally not translated.
const translations = {
  zh: {
    locale: 'zh-CN', dir: 'ltr',
    title: 'Han Wu — 吴含',
    description: 'Han Wu — 个人主页与 AI 作品集',
    language: '语言',
    intro: { tagline: '以人为本，<br>向善而行。', portfolio: 'AI作品集' },
    skills: { aria: '技能', blank: '空白' },
    social: { aria: '社交链接', email: '邮箱' },
    wheel: { aria: '作品集导航' },
    coord: { north: '12.345° 北', west: '67.890° 西' },
    portraitAlt: 'Han Wu 肖像',
    modules: {
      '01': { title: '我是谁', summary: '让我想想', open: '打开：我是谁' },
      '02': { title: '我从哪里来', summary: '是个好问题', open: '打开：我从哪里来' },
      '03': { title: '我的经历', summary: '还是得想想', open: '打开：我的经历' },
      '04': { title: '我在干什么', summary: '啊，难到我了', open: '打开：我在干什么' },
      '05': { title: '我要去哪', summary: '值得深思', open: '打开：我要去哪' },
      '06': { title: '想找我', summary: '来者不拒', open: '打开：想找我' },
    },
    meta: 'AI梦想家<br>常驻云端<br>上午 10:15 / 2025 年 3 月 5 日',
    quote: '自信心<br>想象力<br>学习能力',
    detail: { close: '关闭', closePanel: '关闭内容面板' },
  },
  de: {
    locale: 'de-DE', dir: 'ltr',
    title: 'Han Wu — 吴含',
    description: 'Han Wu — persönliche Website und KI-Portfolio',
    language: 'Sprache',
    intro: { tagline: 'Menschen im Mittelpunkt,<br>Gutes im Sinn.', portfolio: 'KI-Portfolio' },
    skills: { aria: 'Bereiche', blank: 'Leer' },
    social: { aria: 'Soziale Links', email: 'E-Mail' },
    wheel: { aria: 'Portfolio-Navigation' },
    coord: { north: '12.345° N', west: '67.890° W' },
    portraitAlt: 'Porträt von Han Wu',
    modules: {
      '01': { title: 'Wer bin ich?', summary: 'Lass mich überlegen.', open: 'Öffnen: Wer bin ich?' },
      '02': { title: 'Woher komme ich?', summary: 'Gute Frage.', open: 'Öffnen: Woher komme ich?' },
      '03': { title: 'Mein Weg', summary: 'Muss ich noch überlegen.', open: 'Öffnen: Mein Weg' },
      '04': { title: 'Was mache ich?', summary: 'Da erwischst du mich.', open: 'Öffnen: Was mache ich?' },
      '05': { title: 'Wohin gehe ich?', summary: 'Nachdenkenswert.', open: 'Öffnen: Wohin gehe ich?' },
      '06': { title: 'Suchst du mich?', summary: 'Immer willkommen.', open: 'Öffnen: Suchst du mich?' },
    },
    meta: 'KI-Träumer<br>Zu Hause in der Cloud<br>10:15 Uhr / 5. März 2025',
    quote: 'Selbstvertrauen<br>Vorstellungskraft<br>Lernfähigkeit',
    detail: { close: 'Schließen', closePanel: 'Inhaltsfenster schließen' },
  },
  en: {
    locale: 'en', dir: 'ltr',
    title: 'Han Wu — 吴含',
    description: 'Han Wu — personal site and AI portfolio',
    language: 'Language',
    intro: { tagline: 'People first,<br>good in mind.', portfolio: 'AI Portfolio' },
    skills: { aria: 'Areas', blank: 'Blank' },
    social: { aria: 'Social links', email: 'Email' },
    wheel: { aria: 'Portfolio navigation' },
    coord: { north: '12.345° N', west: '67.890° W' },
    portraitAlt: 'Portrait of Han Wu',
    modules: {
      '01': { title: 'Who am I?', summary: 'Let me think.', open: 'Open: Who am I?' },
      '02': { title: 'Where am I from?', summary: 'Good question.', open: 'Open: Where am I from?' },
      '03': { title: 'My journey', summary: 'Still thinking.', open: 'Open: My journey' },
      '04': { title: 'What am I doing?', summary: 'You got me there.', open: 'Open: What am I doing?' },
      '05': { title: 'Where am I going?', summary: 'Worth thinking about.', open: 'Open: Where am I going?' },
      '06': { title: 'Looking for me?', summary: 'Everyone is welcome.', open: 'Open: Looking for me?' },
    },
    meta: 'AI dreamer<br>Based in the cloud<br>10:15 AM / March 5, 2025',
    quote: 'Confidence<br>Imagination<br>Ability to learn',
    detail: { close: 'Close', closePanel: 'Close content panel' },
  },
  es: {
    locale: 'es', dir: 'ltr',
    title: 'Han Wu — 吴含',
    description: 'Han Wu — sitio personal y portafolio de IA',
    language: 'Idioma',
    intro: { tagline: 'Las personas primero,<br>actuar para el bien.', portfolio: 'Portafolio de IA' },
    skills: { aria: 'Áreas', blank: 'En blanco' },
    social: { aria: 'Enlaces sociales', email: 'Correo' },
    wheel: { aria: 'Navegación del portafolio' },
    coord: { north: '12.345° N', west: '67.890° O' },
    portraitAlt: 'Retrato de Han Wu',
    modules: {
      '01': { title: '¿Quién soy?', summary: 'Déjame pensarlo.', open: 'Abrir: ¿Quién soy?' },
      '02': { title: '¿De dónde vengo?', summary: 'Buena pregunta.', open: 'Abrir: ¿De dónde vengo?' },
      '03': { title: 'Mi recorrido', summary: 'Aún tengo que pensarlo.', open: 'Abrir: Mi recorrido' },
      '04': { title: '¿Qué hago?', summary: 'Me has pillado.', open: 'Abrir: ¿Qué hago?' },
      '05': { title: '¿Adónde voy?', summary: 'Da para pensar.', open: 'Abrir: ¿Adónde voy?' },
      '06': { title: '¿Me buscas?', summary: 'Todo el mundo es bienvenido.', open: 'Abrir: ¿Me buscas?' },
    },
    meta: 'Soñador de IA<br>Residente en la nube<br>10:15 / 5 de marzo de 2025',
    quote: 'Confianza<br>Imaginación<br>Capacidad de aprender',
    detail: { close: 'Cerrar', closePanel: 'Cerrar panel de contenido' },
  },
  fr: {
    locale: 'fr', dir: 'ltr',
    title: 'Han Wu — 吴含',
    description: 'Han Wu — site personnel et portfolio IA',
    language: 'Langue',
    intro: { tagline: 'L’humain d’abord,<br>agir pour le bien.', portfolio: 'Portfolio IA' },
    skills: { aria: 'Domaines', blank: 'Vide' },
    social: { aria: 'Liens sociaux', email: 'E-mail' },
    wheel: { aria: 'Navigation du portfolio' },
    coord: { north: '12.345° N', west: '67.890° O' },
    portraitAlt: 'Portrait de Han Wu',
    modules: {
      '01': { title: 'Qui suis-je ?', summary: 'Laisse-moi réfléchir.', open: 'Ouvrir : Qui suis-je ?' },
      '02': { title: 'D’où viens-je ?', summary: 'Bonne question.', open: 'Ouvrir : D’où viens-je ?' },
      '03': { title: 'Mon parcours', summary: 'Il faut encore y penser.', open: 'Ouvrir : Mon parcours' },
      '04': { title: 'Que fais-je ?', summary: 'Là, tu me poses une colle.', open: 'Ouvrir : Que fais-je ?' },
      '05': { title: 'Où vais-je ?', summary: 'Ça mérite réflexion.', open: 'Ouvrir : Où vais-je ?' },
      '06': { title: 'Tu me cherches ?', summary: 'Tout le monde est bienvenu.', open: 'Ouvrir : Tu me cherches ?' },
    },
    meta: 'Rêveur d’IA<br>Installé dans le cloud<br>10:15 / 5 mars 2025',
    quote: 'Confiance en soi<br>Imagination<br>Capacité d’apprentissage',
    detail: { close: 'Fermer', closePanel: 'Fermer le panneau de contenu' },
  },
  it: {
    locale: 'it', dir: 'ltr',
    title: 'Han Wu — 吴含',
    description: 'Han Wu — sito personale e portfolio IA',
    language: 'Lingua',
    intro: { tagline: 'Le persone al centro,<br>agire per il bene.', portfolio: 'Portfolio IA' },
    skills: { aria: 'Aree', blank: 'Vuoto' },
    social: { aria: 'Link social', email: 'Email' },
    wheel: { aria: 'Navigazione del portfolio' },
    coord: { north: '12.345° N', west: '67.890° O' },
    portraitAlt: 'Ritratto di Han Wu',
    modules: {
      '01': { title: 'Chi sono?', summary: 'Fammi pensare.', open: 'Apri: Chi sono?' },
      '02': { title: 'Da dove vengo?', summary: 'Bella domanda.', open: 'Apri: Da dove vengo?' },
      '03': { title: 'Il mio percorso', summary: 'Devo ancora pensarci.', open: 'Apri: Il mio percorso' },
      '04': { title: 'Cosa sto facendo?', summary: 'Questa è difficile.', open: 'Apri: Cosa sto facendo?' },
      '05': { title: 'Dove sto andando?', summary: 'Vale la pena pensarci.', open: 'Apri: Dove sto andando?' },
      '06': { title: 'Mi cerchi?', summary: 'Tutti sono benvenuti.', open: 'Apri: Mi cerchi?' },
    },
    meta: 'Sognatore di IA<br>Di casa nel cloud<br>10:15 / 5 marzo 2025',
    quote: 'Fiducia in sé<br>Immaginazione<br>Capacità di imparare',
    detail: { close: 'Chiudi', closePanel: 'Chiudi pannello dei contenuti' },
  },
  pt: {
    locale: 'pt', dir: 'ltr',
    title: 'Han Wu — 吴含',
    description: 'Han Wu — site pessoal e portfólio de IA',
    language: 'Idioma',
    intro: { tagline: 'Pessoas em primeiro lugar,<br>agir para o bem.', portfolio: 'Portfólio de IA' },
    skills: { aria: 'Áreas', blank: 'Em branco' },
    social: { aria: 'Links sociais', email: 'E-mail' },
    wheel: { aria: 'Navegação do portfólio' },
    coord: { north: '12.345° N', west: '67.890° O' },
    portraitAlt: 'Retrato de Han Wu',
    modules: {
      '01': { title: 'Quem sou eu?', summary: 'Deixa eu pensar.', open: 'Abrir: Quem sou eu?' },
      '02': { title: 'De onde venho?', summary: 'Boa pergunta.', open: 'Abrir: De onde venho?' },
      '03': { title: 'Minha trajetória', summary: 'Ainda preciso pensar.', open: 'Abrir: Minha trajetória' },
      '04': { title: 'O que estou fazendo?', summary: 'Essa me pegou.', open: 'Abrir: O que estou fazendo?' },
      '05': { title: 'Para onde vou?', summary: 'Vale refletir.', open: 'Abrir: Para onde vou?' },
      '06': { title: 'Quer falar comigo?', summary: 'Todos são bem-vindos.', open: 'Abrir: Quer falar comigo?' },
    },
    meta: 'Sonhador de IA<br>Morando na nuvem<br>10:15 / 5 de março de 2025',
    quote: 'Autoconfiança<br>Imaginação<br>Capacidade de aprender',
    detail: { close: 'Fechar', closePanel: 'Fechar painel de conteúdo' },
  },
  ar: {
    locale: 'ar', dir: 'rtl',
    title: 'Han Wu — 吴含',
    description: 'Han Wu — موقع شخصي ومعرض أعمال للذكاء الاصطناعي',
    language: 'اللغة',
    intro: { tagline: 'الإنسان أولاً،<br>والعمل لما هو أفضل.', portfolio: 'معرض أعمال الذكاء الاصطناعي' },
    skills: { aria: 'المجالات', blank: 'فارغ' },
    social: { aria: 'روابط التواصل', email: 'البريد الإلكتروني' },
    wheel: { aria: 'التنقل في معرض الأعمال' },
    coord: { north: '12.345° شمال', west: '67.890° غرب' },
    portraitAlt: 'صورة Han Wu',
    modules: {
      '01': { title: 'من أنا؟', summary: 'دعني أفكر.', open: 'فتح: من أنا؟' },
      '02': { title: 'من أين أتيت؟', summary: 'سؤال وجيه.', open: 'فتح: من أين أتيت؟' },
      '03': { title: 'رحلتي', summary: 'ما زلت أفكر.', open: 'فتح: رحلتي' },
      '04': { title: 'ماذا أفعل؟', summary: 'هذا سؤال صعب.', open: 'فتح: ماذا أفعل؟' },
      '05': { title: 'إلى أين أتجه؟', summary: 'يستحق التفكير.', open: 'فتح: إلى أين أتجه؟' },
      '06': { title: 'تبحث عني؟', summary: 'أهلاً بالجميع.', open: 'فتح: تبحث عني؟' },
    },
    meta: 'حالم بالذكاء الاصطناعي<br>مقيم في السحابة<br>10:15 ص / 5 مارس 2025',
    quote: 'الثقة بالنفس<br>الخيال<br>القدرة على التعلم',
    detail: { close: 'إغلاق', closePanel: 'إغلاق لوحة المحتوى' },
  },
  ja: {
    locale: 'ja', dir: 'ltr',
    title: 'Han Wu — 吴含',
    description: 'Han Wu — 個人サイトとAIポートフォリオ',
    language: '言語',
    intro: { tagline: '人を中心に、<br>善い方向へ。', portfolio: 'AIポートフォリオ' },
    skills: { aria: '領域', blank: '空白' },
    social: { aria: 'ソーシャルリンク', email: 'メール' },
    wheel: { aria: 'ポートフォリオナビゲーション' },
    coord: { north: '12.345° 北', west: '67.890° 西' },
    portraitAlt: 'Han Wu のポートレート',
    modules: {
      '01': { title: '私は誰？', summary: 'ちょっと考えさせて。', open: '開く：私は誰？' },
      '02': { title: 'どこから来た？', summary: 'いい質問です。', open: '開く：どこから来た？' },
      '03': { title: 'これまでの歩み', summary: 'まだ考え中。', open: '開く：これまでの歩み' },
      '04': { title: '今何をしている？', summary: 'それは難問です。', open: '開く：今何をしている？' },
      '05': { title: 'どこへ向かう？', summary: '考える価値あり。', open: '開く：どこへ向かう？' },
      '06': { title: '連絡したい？', summary: 'いつでもどうぞ。', open: '開く：連絡したい？' },
    },
    meta: 'AIドリーマー<br>クラウド在住<br>2025年3月5日 午前10:15',
    quote: '自信<br>想像力<br>学ぶ力',
    detail: { close: '閉じる', closePanel: 'コンテンツパネルを閉じる' },
  },
  ko: {
    locale: 'ko', dir: 'ltr',
    title: 'Han Wu — 吴含',
    description: 'Han Wu — 개인 사이트와 AI 포트폴리오',
    language: '언어',
    intro: { tagline: '사람을 중심에,<br>더 나은 방향으로.', portfolio: 'AI 포트폴리오' },
    skills: { aria: '영역', blank: '공백' },
    social: { aria: '소셜 링크', email: '이메일' },
    wheel: { aria: '포트폴리오 탐색' },
    coord: { north: '12.345° 북', west: '67.890° 서' },
    portraitAlt: 'Han Wu의 초상',
    modules: {
      '01': { title: '나는 누구인가', summary: '잠깐 생각해 볼게요.', open: '열기: 나는 누구인가' },
      '02': { title: '어디서 왔나', summary: '좋은 질문이네요.', open: '열기: 어디서 왔나' },
      '03': { title: '나의 여정', summary: '아직 생각 중.', open: '열기: 나의 여정' },
      '04': { title: '무엇을 하고 있나', summary: '이건 어렵네요.', open: '열기: 무엇을 하고 있나' },
      '05': { title: '어디로 가나', summary: '생각해 볼 만해요.', open: '열기: 어디로 가나' },
      '06': { title: '나를 찾나요?', summary: '언제든 환영해요.', open: '열기: 나를 찾나요?' },
    },
    meta: 'AI 드리머<br>클라우드 거주<br>2025년 3월 5일 오전 10:15',
    quote: '자신감<br>상상력<br>학습 능력',
    detail: { close: '닫기', closePanel: '콘텐츠 패널 닫기' },
  },
};

let currentLanguage = 'zh';
const languageSelect = document.getElementById('language-select');
const metaDescription = document.getElementById('meta-description');

function getTranslation(dict, path) {
  return path.split('.').reduce((value, key) => value?.[key], dict);
}

function applyLanguage(lang, { persist = true } = {}) {
  if (!translations[lang]) lang = 'zh';
  const dict = translations[lang];
  currentLanguage = lang;

  document.documentElement.lang = dict.locale;
  document.documentElement.dataset.lang = lang;
  document.documentElement.classList.toggle('lang-rtl', dict.dir === 'rtl');
  document.title = dict.title;
  if (metaDescription) metaDescription.setAttribute('content', dict.description);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = getTranslation(dict, el.dataset.i18n);
    if (typeof value === 'string') el.textContent = value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const value = getTranslation(dict, el.dataset.i18nHtml);
    if (typeof value === 'string') el.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const value = getTranslation(dict, el.dataset.i18nAriaLabel);
    if (typeof value === 'string') el.setAttribute('aria-label', value);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const value = getTranslation(dict, el.dataset.i18nAlt);
    if (typeof value === 'string') el.setAttribute('alt', value);
  });

  if (languageSelect) languageSelect.value = lang;
  if (persist) {
    try { localStorage.setItem('wu-language', lang); } catch (_) {}
  }

  if (activeModuleCard && detailOverlay?.classList.contains('is-open')) {
    renderModuleDetail(activeModuleCard);
  }
}

function initialLanguage() {
  const langParam = new URLSearchParams(window.location.search).get('lang');
  if (langParam && translations[langParam]) return langParam;
  try {
    const saved = localStorage.getItem('wu-language');
    if (saved && translations[saved]) return saved;
  } catch (_) {}
  return 'zh';
}

languageSelect?.addEventListener('change', (event) => applyLanguage(event.target.value));

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
let activeModuleCard = null;

function cleanEditableText(el) {
  return (el?.innerText || '').replace(/\s+/g, ' ').trim();
}

function renderModuleDetail(card) {
  if (!card || !detailOverlay || !detailPanel) return;
  const moduleId = card.dataset.module;
  const title = cleanEditableText(card.querySelector('h3'));
  const summary = cleanEditableText(card.querySelector('p'));
  // Future detailed content can be localized by adding templates such as
  // #module-01-content-de or #module-01-content-ja. The base template remains
  // the fallback, so adding translations later does not require JS changes.
  const template = document.getElementById(`module-${moduleId}-content-${currentLanguage}`) ||
    document.getElementById(`module-${moduleId}-content`);

  detailNumber.textContent = moduleId;
  detailTitle.textContent = title;
  detailSummary.textContent = summary;
  detailPanel.style.setProperty('--panel-accent', card.dataset.accent || '#8ca4bf');
  detailContent.replaceChildren();
  if (template) detailContent.appendChild(template.content.cloneNode(true));
}

function openModule(card) {
  if (!detailOverlay || !detailPanel || editMode) return;
  activeModuleCard = card;
  renderModuleDetail(card);

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
  activeModuleCard = null;
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


applyLanguage(initialLanguage(), { persist: false });
