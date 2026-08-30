const roundInfo = {
  round1: {
    number: "01",
    kicker: "BASELINE STUDIES / 10 PROMPTS",
    title: "先固定上海，再寻找语言",
    description: "同一机位、同一地标、同一片黄浦江。第一轮把“City Pop”拆成空气喷绘、专色印刷、几何平涂、夜间漆彩等十种形式假设。",
    axis: ["固定机位", "16:9", "形式试错"],
  },
  round2: {
    number: "02",
    kicker: "ROUGH MARKS / 7 OUTPUTS",
    title: "把精细度往回拧",
    description: "吸收观察到的规律：椰子树、敞篷车、白云与海岸想象进入上海；远处灯火不再是窗格，而是可以被手工画出来的点点。",
    axis: ["椰树借景", "点状灯火", "粗糙印刷"],
  },
  round3: {
    number: "03",
    kicker: "REFERENCE ABSORPTION / 3 PROMPTS",
    title: "让上海成为一张度假唱片",
    description: "把热带度假构图、横向压缩的城市带、硬边色块和纸面颗粒放进竖幅画面，继续保留上海地标作为锚点。",
    axis: ["4:5", "大面积天空", "规律吸收"],
  },
  round4: {
    number: "04",
    kicker: "LOCAL FRAGMENTS / 6 OUTPUTS",
    title: "换一个角度，还是上海",
    description: "不再寻找一张完整城市明信片，而是把上海拆成屋顶、桥拱、街角、渡轮栏杆和公园长椅，让地标退到光和形的后面。",
    axis: ["局部取景", "4:5", "前景变化"],
  },
  round5: {
    number: "05",
    kicker: "BEIJING DETOUR / 10 OUTPUTS",
    title: "换一座城，保留这套语法",
    description: "把同一套粗颗粒 City Pop 规则带到北京：红墙、灰瓦、柳影、皇家园林、屋顶泳池和北方山势，都只取一处局部。",
    axis: ["北京局部", "4:5", "城市变奏"],
  },
  round6: {
    number: "06",
    kicker: "REFERENCE GRAMMAR / 10 OUTPUTS",
    title: "把参考规律变成一套模板",
    description: "不复制参考图的具体场景，只吸收它们的粗刷、点描、有限色与边缘框景，再把这套语法放回上海的十个局部机位。",
    axis: ["上海局部", "4:5", "粗颗粒"],
  },
};

const visualMeta = {
  "01": { tags: ["空气喷绘", "蓝调黄昏", "硬边"], summary: "干净的空气喷绘渐变，先让上海保持通透。", palette: ["#3e64b2", "#ed8c86", "#f2d484"] },
  "02": { tags: ["高饱和", "Pantone", "商业海报"], summary: "电光青、珊瑚红和明黄，把城市推向鲜艳油墨。", palette: ["#1d9cb5", "#ef6e68", "#f3d26e"] },
  "03": { tags: ["粉彩", "丙烯", "低对比"], summary: "粉蓝、薰衣草紫和蜜桃橙的轻盈黄昏。", palette: ["#9dbbd1", "#aa86b4", "#eea18c"] },
  "04": { tags: ["硬边", "几何", "极简"], summary: "把建筑、江面和灯光压成几何色带。", palette: ["#263e93", "#2c9aa0", "#ef8d6f"] },
  "05": { tags: ["丝网印刷", "专色", "错版"], summary: "三到五种专色，保留油墨堆积和旧纸压痕。", palette: ["#1d235d", "#b95c65", "#f0c96e"] },
  "06": { tags: ["彩色漫画", "墨线", "叙事"], summary: "纤细墨线和透明叠色，让城市变成情绪背景。", palette: ["#2f4e9d", "#e27e86", "#eacb8a"] },
  "07": { tags: ["夜景", "霓虹", "漆彩"], summary: "深海军蓝承接品红、青绿和江面的湿润反光。", palette: ["#11164e", "#db567b", "#40b0aa"] },
  "08": { tags: ["蜡笔", "胶片", "粗颗粒"], summary: "让蜡笔断线和胶片颗粒把精细度放松下来。", palette: ["#3955a5", "#e58b80", "#e8d391"] },
  "09": { tags: ["水粉", "叠染", "透明"], summary: "水粉透明叠染让蓝调天空和城市边缘慢慢融开。", palette: ["#587bb9", "#8e7cad", "#e6a283"] },
  "10": { tags: ["当代复古", "数字丙烯", "东方都市"], summary: "把复古唱片语法重新翻译成今天的上海。", palette: ["#24377e", "#3ba09e", "#e88377"] },
  "r2-01": { tags: ["椰子树", "粗空气喷绘", "黄昏"], summary: "一棵高椰树把外滩拉向海岸度假海报。", palette: ["#35649e", "#cb7fac", "#e88771"] },
  "r2-02": { tags: ["敞篷车", "低机位", "白云"], summary: "从复古车后方看上海，让公路想象停在前景边缘。", palette: ["#e9d5ad", "#de706b", "#3b5f9d"] },
  "r2-03": { tags: ["点光", "椰树剪影", "夜景"], summary: "让成百上千个大小不一的点，替城市说出灯火。", palette: ["#171a52", "#d75986", "#f0b064"] },
  "r2-04": { tags: ["白云", "粗笔触", "复古车"], summary: "云、树、水面都留下明显的涂抹、刮擦和断笔。", palette: ["#3a83b7", "#ecb19a", "#df7a69"] },
  "r2-05": { tags: ["粗丝印", "点状灯火", "留白"], summary: "五种专色以内，把城市夜色压成手工版画。", palette: ["#1d245f", "#417aa1", "#edc674"] },
  "r2-06": { tags: ["最小化", "宽笔触", "白云"], summary: "只留下几条粗色带、少量点光和一棵树的局部。", palette: ["#2f57a4", "#e88b81", "#f1d395"] },
  "r3-01": { tags: ["三棵椰树", "点点灯火", "竖幅"], summary: "高天空、三棵黑色椰树和被压缩成光点的城市带。", palette: ["#5a4b9d", "#c17eb2", "#f4d77f"] },
  "r3-02": { tags: ["泳池", "硬边色块", "度假构图"], summary: "用泳池的几何透视，把上海天际线放到热带花园之后。", palette: ["#2498b3", "#197e54", "#eee5cc"] },
  "r3-03": { tags: ["点光", "夜海岸", "粗颗粒"], summary: "椰树剪影压住夜空，点状灯火在远处聚成一条海岸线。", palette: ["#25205f", "#a35b9b", "#ef9a78"] },
  "r4-01": { tags: ["石库门屋顶", "椰影", "晾衣杆"], summary: "从屋顶女儿墙望出去，东方明珠只留下远处的一颗光点。", palette: ["#2d4e91", "#b574a7", "#f1a074"] },
  "r4-02": { tags: ["苏州河", "桥拱", "车尾"], summary: "桥拱把苏州河切成一枚紫橙色取景框，复古车停在画面边缘。", palette: ["#25255f", "#d77e8f", "#eab981"] },
  "r4-03": { tags: ["屋顶泳池", "植物", "硬边"], summary: "泳池占据前景，上海中心和金茂退成植物后的蓝色形体。", palette: ["#3e7fc0", "#2d806b", "#f0d5a4"] },
  "r4-04": { tags: ["梧桐", "老公寓", "珊瑚车头"], summary: "梧桐树冠、老公寓立面和车头构成一张上海街角剪影。", palette: ["#25265f", "#9a72a9", "#ef9278"] },
  "r4-05": { tags: ["渡轮甲板", "救生圈", "点光"], summary: "只看见渡轮栏杆和一只救生圈，明珠与高楼退到夜色深处。", palette: ["#17204f", "#c55f88", "#f1c37d"] },
  "r4-06": { tags: ["前滩公园", "长椅", "白云"], summary: "长椅和几何地面把前滩公园变成一块明亮的度假画布。", palette: ["#2994ae", "#e89084", "#f0d9ad"] },
  "bj-01": { tags: ["故宫红墙", "古松", "粗丝印"], summary: "朱红墙体和古松剪影把故宫压缩成一枚安静的城市印记。", palette: ["#c8513f", "#283f84", "#ef9a73"] },
  "bj-02": { tags: ["什刹海", "柳影", "自行车"], summary: "柳枝、湖光和自行车后视镜，把什刹海变成晚风里的点状光面。", palette: ["#3c8ea5", "#ad85b7", "#ef9b7a"] },
  "bj-03": { tags: ["鼓楼胡同", "珊瑚车", "国槐"], summary: "鼓楼灰瓦、国槐树干和珊瑚色车头组成一张胡同街角剪影。", palette: ["#20244f", "#c75d4c", "#efac75"] },
  "bj-04": { tags: ["颐和园", "长廊", "湖光"], summary: "长廊朱柱和昆明湖水面形成一枚清凉、开阔的园林取景框。", palette: ["#2b95ad", "#ef9e83", "#1e5e53"] },
  "bj-05": { tags: ["天坛", "祈年殿", "蓝调"], summary: "祈年殿三重檐只露出一角，深蓝屋顶托住一整片珊瑚天空。", palette: ["#1c2a6f", "#b54f45", "#ef8c71"] },
  "bj-06": { tags: ["中国尊", "屋顶泳池", "躺椅"], summary: "北京高楼被放到泳池与折叠躺椅之后，成为热带度假远景记号。", palette: ["#388fc1", "#ee8f7f", "#4bc0c6"] },
  "bj-07": { tags: ["鸟巢", "水面", "曲线"], summary: "鸟巢的银灰曲线从画面边缘切入，与水面点光形成现代北京的柔软版本。", palette: ["#416bb3", "#e96c78", "#f2b06e"] },
  "bj-08": { tags: ["景山", "松枝", "风筝"], summary: "古松、风筝线和远处金色屋顶，把景山的风压缩成几块色带。", palette: ["#3d98ac", "#ac7fbe", "#ec866d"] },
  "bj-09": { tags: ["银杏", "胡同月色", "点光"], summary: "银杏树与朱红门框沉入午夜蓝，窗灯只留下疏密变化的点点。", palette: ["#151936", "#63234d", "#e3ae5e"] },
  "bj-10": { tags: ["居庸关", "长城斜线", "北方山风"], summary: "长城斜线、油松和山谷灯火，把北京的北方山势变成一张旅行唱片。", palette: ["#254da3", "#e9806b", "#edb957"] },
  "r6-01": { tags: ["梧桐", "武康路", "粗刷"], summary: "巨大树冠把上海老公寓切成一块开阔的蓝色天空。", palette: ["#2c78d4", "#19375e", "#c9e640"] },
  "r6-02": { tags: ["苏州河", "桥拱", "点光"], summary: "桥拱切出紫橙色水面，复古车只停在画面边缘。", palette: ["#1b335d", "#e86782", "#f0a45e"] },
  "r6-03": { tags: ["石库门", "棕榈叶", "红砖"], summary: "红砖天井与一片棕榈叶，让上海里弄借来热带空气。", palette: ["#b84f3c", "#2f9eb8", "#23325b"] },
  "r6-04": { tags: ["渡轮", "救生圈", "江面点光"], summary: "救生圈放大成前景符号，远岸只剩点状灯火。", palette: ["#315ac3", "#e65a4d", "#f2c174"] },
  "r6-05": { tags: ["屋顶泳池", "上海中心", "几何"], summary: "泳池的几何透视把陆家嘴高楼压成度假远景。", palette: ["#21a4c4", "#e96572", "#f1d39a"] },
  "r6-06": { tags: ["朱家角", "白墙", "荷叶"], summary: "石桥、荷叶和窄水巷保留江南上海的潮湿晚风。", palette: ["#4854b0", "#d85b8c", "#dfb16d"] },
  "r6-07": { tags: ["杨浦大桥", "斜线", "航迹"], summary: "一根粗桥缆承担动势，城市和灯火退成横向色带。", palette: ["#302a81", "#ed6b55", "#f0b15f"] },
  "r6-08": { tags: ["复兴公园", "珊瑚车", "花枝"], summary: "绿荫门框和珊瑚车头组成上海公园街角的夏日唱片。", palette: ["#277fbd", "#ef6b43", "#d5d65b"] },
  "r6-09": { tags: ["阳台", "月色", "夜景点光"], summary: "盆栽、栏杆和月亮把城市夜景收成安静的局部。", palette: ["#121c4d", "#6d3d79", "#eecf9c"] },
  "r6-10": { tags: ["外白渡桥", "铸铁栏杆", "余晖"], summary: "桥栏的强烈对角线把熟悉地标压成形状和光。", palette: ["#3970b4", "#ef896d", "#f5d39a"] },
};

const state = {
  filter: "all",
  query: "",
  activeItem: null,
  lastFocusedElement: null,
};

const elements = {
  rounds: document.querySelector("#rounds-container"),
  resultCount: document.querySelector("#result-count"),
  search: document.querySelector("#search-input"),
  toast: document.querySelector("#toast"),
  promptModal: document.querySelector("#prompt-modal"),
  modalImage: document.querySelector("#modal-image"),
  modalKicker: document.querySelector("#modal-kicker"),
  modalTitle: document.querySelector("#modal-title"),
  modalMeta: document.querySelector("#modal-meta"),
  modalPrompt: document.querySelector("#modal-prompt"),
  modalPromptLength: document.querySelector("#modal-prompt-length"),
  modalCopy: document.querySelector("#modal-copy-button"),
  promptTemplate: document.querySelector("#prompt-template"),
  lightbox: document.querySelector("#lightbox"),
  lightboxImage: document.querySelector("#lightbox-image"),
  lightboxCaption: document.querySelector("#lightbox-caption"),
};

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getMeta(item) {
  return visualMeta[item.sourceId] || visualMeta[item.id] || {
    tags: ["City Pop", cityLabel(item)],
    summary: item.prompt.slice(0, 70),
    palette: ["#26368f", "#ef846e", "#f4d687"],
  };
}

function cityLabel(item) {
  return item.city || (item.round === "round5" ? "北京" : "上海");
}

function roundCardClass(item, index) {
  if (item.round === "round3" || item.round === "round4" || item.round === "round5" || item.round === "round6") {
    return ["is-portrait-feature", "is-portrait", "is-portrait-small"][index % 3];
  }

  const pattern = ["is-featured", "is-tall", "is-standard", "is-standard", "is-standard", "is-wide", "is-standard", "is-standard", "is-standard", "is-wide"];
  return pattern[index % pattern.length];
}

function getVisibleItems() {
  const query = state.query.trim().toLowerCase();
  return experiments.filter((item) => {
    const matchesFilter = state.filter === "all" || item.round === state.filter;
    if (!matchesFilter) return false;
    if (!query) return true;
    const meta = getMeta(item);
    const haystack = [item.title, item.prompt, item.roundLabel, ...meta.tags].join(" ").toLowerCase();
    return haystack.includes(query);
  });
}

function outputLabel(item) {
  if (item.round === "round1") return item.sourceId;
  if (item.round === "round2") return `${item.sourceId.toUpperCase()}${item.variant === 2 ? " / B" : item.variant === 1 ? " / A" : ""}`;
  return item.sourceId.toUpperCase();
}

function promptSnippet(item) {
  const meta = getMeta(item);
  return meta.summary || `${item.prompt.slice(0, 80)}…`;
}

function paletteMarkup(meta) {
  return meta.palette.map((color) => `<i class="palette-dot" style="--swatch: ${color}" aria-hidden="true"></i>`).join("");
}

function renderWorkCard(item, index) {
  const meta = getMeta(item);
  const alt = `${item.title}：${cityLabel(item)} City Pop 绘画实验`;
  return `
    <article class="work-card ${roundCardClass(item, index)}" data-item-id="${escapeHTML(item.id)}">
      <button class="work-image-button" type="button" data-action="image" data-item-id="${escapeHTML(item.id)}" aria-label="打开《${escapeHTML(item.title)}》大图">
        <img src="${escapeHTML(item.image)}" alt="${escapeHTML(alt)}" loading="lazy" />
        <span class="work-index">${escapeHTML(outputLabel(item))}</span>
        <span class="work-zoom">OPEN ↗</span>
      </button>
      <div class="work-info">
        <div class="work-topline">
          <span class="work-kind">${escapeHTML(item.roundLabel)}</span>
          <span class="palette-dots" aria-label="主色">${paletteMarkup(meta)}</span>
        </div>
        <h4>${escapeHTML(item.title)}</h4>
        <p class="work-snippet">${escapeHTML(promptSnippet(item))}</p>
        <div class="work-bottomline">
          <div class="tag-list">${meta.tags.slice(0, 2).map((tag) => `<span>#${escapeHTML(tag)}</span>`).join("")}</div>
          <div class="work-actions">
            <button class="mini-button" type="button" data-action="prompt" data-item-id="${escapeHTML(item.id)}" data-umami-event="view-prompt">提示词</button>
            <button class="mini-button" type="button" data-action="copy" data-item-id="${escapeHTML(item.id)}" data-umami-event="copy-prompt">复制</button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderRound(round, items) {
  const info = roundInfo[round];
  const hidden = items.length === 0 ? " hidden" : "";
  const cards = items.length
    ? items.map((item, index) => renderWorkCard(item, index)).join("")
    : `<div class="empty-state"><strong>这一轮没有匹配项。</strong><span>换一个关键词，或者回到“全部”继续浏览。</span></div>`;

  return `
    <section class="round-section" data-round-section="${round}"${hidden} aria-labelledby="${round}-title">
      <div class="round-heading">
        <div class="round-number" aria-hidden="true">${info.number}</div>
        <div>
          <p class="round-kicker">${info.kicker}</p>
          <h3 id="${round}-title">${info.title}</h3>
          <p class="round-description">${info.description}</p>
        </div>
        <div class="round-axis" aria-label="本轮变量">${info.axis.map((axis) => `<span>${axis}</span>`).join("")}</div>
      </div>
      <div class="experiment-grid">${cards}</div>
    </section>
  `;
}

function renderGallery() {
  const visible = getVisibleItems();
  const groups = Object.keys(roundInfo).map((round) => [round, visible.filter((item) => item.round === round)]);
  elements.rounds.innerHTML = groups.map(([round, items]) => renderRound(round, items)).join("");
  elements.resultCount.textContent = `${visible.length} 个输出 / ${new Set(visible.map((item) => item.sourceId)).size} 条提示词正在显示`;
}

function findItem(id) {
  return experiments.find((item) => item.id === id);
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => elements.toast.classList.remove("is-visible"), 2200);
}

async function copyPrompt(item) {
  try {
    await navigator.clipboard.writeText(item.prompt);
    showToast(`已复制：《${item.title}》的完整提示词`);
  } catch (error) {
    const helper = document.createElement("textarea");
    helper.value = item.prompt;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
    showToast(`已复制：《${item.title}》的完整提示词`);
  }
}

async function copyTemplate() {
  const template = elements.promptTemplate.textContent.trim();
  try {
    await navigator.clipboard.writeText(template);
  } catch (error) {
    const helper = document.createElement("textarea");
    helper.value = template;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
  }
  showToast("已复制通用提示词模板");
}

function openPrompt(item) {
  state.activeItem = item;
  state.lastFocusedElement = document.activeElement;
  const meta = getMeta(item);
  elements.modalImage.src = item.image;
  elements.modalImage.alt = `${item.title}：${cityLabel(item)} City Pop 绘画实验`;
  elements.modalKicker.textContent = `${item.roundLabel} · ${outputLabel(item)}`;
  elements.modalTitle.textContent = item.title;
  elements.modalMeta.innerHTML = meta.tags.map((tag) => `<span>${escapeHTML(tag)}</span>`).join("");
  elements.modalPrompt.textContent = item.prompt;
  elements.modalPromptLength.textContent = `${item.prompt.length} 字`;
  elements.promptModal.classList.add("is-open");
  elements.promptModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  elements.promptModal.querySelector(".modal-close").focus();
}

function closePrompt() {
  elements.promptModal.classList.remove("is-open");
  elements.promptModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (state.lastFocusedElement && typeof state.lastFocusedElement.focus === "function") {
    state.lastFocusedElement.focus();
  }
  state.activeItem = null;
}

function openLightbox(item) {
  state.lastFocusedElement = document.activeElement;
  elements.lightboxImage.src = item.image;
  elements.lightboxImage.alt = `${item.title}：${cityLabel(item)} City Pop 绘画实验`;
  elements.lightboxCaption.textContent = `${item.roundLabel} / ${item.title}`;
  elements.lightbox.classList.add("is-open");
  elements.lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  elements.lightbox.querySelector(".lightbox-close").focus();
}

function closeLightbox() {
  elements.lightbox.classList.remove("is-open");
  elements.lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (state.lastFocusedElement && typeof state.lastFocusedElement.focus === "function") {
    state.lastFocusedElement.focus();
  }
}

function setFilter(filter) {
  state.filter = filter;
  document.querySelectorAll("[data-filter]").forEach((button) => {
    const active = button.dataset.filter === filter;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderGallery();
}

function handleAction(action, item) {
  if (action === "copy-template") {
    copyTemplate();
    return;
  }
  if (!item && action !== "close-modal" && action !== "close-lightbox") return;
  if (action === "prompt") openPrompt(item);
  if (action === "copy") copyPrompt(item);
  if (action === "image") openLightbox(item);
  if (action === "close-modal") closePrompt();
  if (action === "close-lightbox") closeLightbox();
}

document.addEventListener("click", (event) => {
  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    setFilter(filterButton.dataset.filter);
    return;
  }

  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) return;
  const action = actionTarget.dataset.action;
  const item = findItem(actionTarget.dataset.itemId);
  handleAction(action, item);
});

elements.search.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderGallery();
});

elements.promptModal.addEventListener("click", (event) => {
  if (event.target === elements.promptModal) closePrompt();
});

elements.lightbox.addEventListener("click", (event) => {
  if (event.target === elements.lightbox) closeLightbox();
});

elements.modalCopy.addEventListener("click", () => {
  if (state.activeItem) copyPrompt(state.activeItem);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== elements.search && !elements.promptModal.classList.contains("is-open") && !elements.lightbox.classList.contains("is-open")) {
    event.preventDefault();
    elements.search.focus();
  }

  if (event.key === "Escape") {
    if (elements.promptModal.classList.contains("is-open")) closePrompt();
    if (elements.lightbox.classList.contains("is-open")) closeLightbox();
  }
});

renderGallery();
