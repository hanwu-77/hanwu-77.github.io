# Han Wu Portfolio / GitHub Pages

这是当前准备上传 GitHub Pages 的版本。页面保持 1672 × 941 的原始视觉基准并按窗口等比缩放。

## 文件结构

```text
/
├── index.html
├── style.css
├── script.js
├── .nojekyll
└── assets/
    └── avatar.jpg
```

## 六个模块

六个圆环模块已经做成可点击结构。默认访问网页时，点击任一模块会打开右侧内容面板；按 `Esc`、点击关闭按钮或点击背景均可关闭。

当前弹出的标题和简介自动读取模块本身的文字，因此你修改卡片文字后，弹窗会同步变化。

以后需要加入更完整的内容时，直接在 `index.html` 底部找到对应 template：

```html
<template id="module-01-content">
  <!-- 在这里加入“我是谁”的详细内容 -->
</template>
```

`module-01-content` 到 `module-06-content` 分别对应 01–06。里面可以放段落、图片、链接、列表等普通 HTML，不需要重新改弹窗逻辑。

## 编辑模式

网页正常公开访问时会关闭 `contenteditable`，避免访客误以为可以修改网站。需要在浏览器里临时调整文字时，在地址后加：

```text
?edit=1
```

例如本地服务器：`http://localhost:8000/?edit=1`。注意：浏览器直接编辑仍然不会写回 HTML 文件；正式内容建议在 `index.html` 中修改并保存。

## 发布到 GitHub Pages

如果你的 GitHub 用户名是 `yourname`：

1. 建立仓库 `yourname.github.io`。
2. 把本目录中的全部文件（包括 `assets` 文件夹）上传到仓库根目录。
3. 在仓库 `Settings → Pages` 中选择从 `main` 分支、`/(root)` 发布。
4. 发布后访问 `https://yourname.github.io`。

## 发布前建议替换

- `index.html` 里的 GitHub / LinkedIn / X 链接目前仍是占位链接。
- 邮箱目前是 `hello@example.com`。
- 如果需要更换头像，直接替换 `assets/avatar.jpg`。


## 六个模块的定位

01–06 的图标、编号、标题和说明现在作为一个整体居中在各自扇区中。位置由 `script.js` 根据 `segments` 的扇区角度自动计算；以后如果调整扇区角度，模块内容会一起跟着重新居中，不需要手动改六组坐标。
