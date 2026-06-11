const sounds = [
  { group: "元音", symbol: "/i/", name: "紧衣音", map: "对应：ee / ea 常见音", hard: true, contrast: "/ɪ/", tip: "不要把 /i/ 和 /ɪ/ 都读成中文“衣”。", mouth: "嘴角展开，舌头高、靠前，下巴较高。", audio: { type: "vowel", f: [270, 2290, 3010], lip: "spread", open: 26, tongue: [178, 118, 132, 34] } },
  { group: "元音", symbol: "/ɪ/", name: "松衣音", map: "对应：短 i 常见音", hard: true, contrast: "/i/", tip: "它比 /i/ 更短、更松，不能拉长。", mouth: "嘴唇放松，舌头高但略低于 /i/。", audio: { type: "vowel", f: [390, 1990, 2550], lip: "relaxed", open: 34, tongue: [170, 126, 130, 38] } },
  { group: "元音", symbol: "/ɛ/", name: "短诶音", map: "对应：短 e 常见音", hard: true, contrast: "/æ/", tip: "不要把 /ɛ/ 和 /æ/ 混掉；/ɛ/ 嘴小一点。", mouth: "嘴半开，舌头在前中位置。", audio: { type: "vowel", f: [530, 1840, 2480], lip: "spread", open: 48, tongue: [166, 142, 136, 44] } },
  { group: "元音", symbol: "/æ/", name: "梅花音", map: "对应：a 的常见短音", hard: true, contrast: "/ɛ/", tip: "中国学习者容易嘴不够大；这个音下巴要打开。", mouth: "嘴巴张开，舌头低、靠前。", audio: { type: "vowel", f: [660, 1720, 2410], lip: "wide", open: 68, tongue: [158, 158, 144, 48] } },
  { group: "元音", symbol: "/ɑ/", name: "低后啊音", map: "对应：美式低 ah 音", hard: false, contrast: "/ɔ/", tip: "嘴打开，声音靠后，不要读成普通话“啊”的前位。", mouth: "嘴巴打开，舌头低、靠后。", audio: { type: "vowel", f: [730, 1090, 2440], lip: "open", open: 76, tongue: [214, 164, 148, 48] } },
  { group: "元音", symbol: "/ɔ/", name: "圆口奥音", map: "对应：aw / au 常见音", hard: false, contrast: "/ɑ/", tip: "很多美式口音中它和 /ɑ/ 很接近；先会听差别即可。", mouth: "嘴唇略圆，舌头中低、靠后。", audio: { type: "vowel", f: [570, 840, 2410], lip: "round", open: 58, tongue: [220, 150, 136, 44] } },
  { group: "元音", symbol: "/ʌ/", name: "短啊音", map: "对应：u / o 的常见短音", hard: true, contrast: "/ɑ/", tip: "嘴唇放松，不要圆唇。", mouth: "嘴巴自然打开，舌头在中央。", audio: { type: "vowel", f: [640, 1190, 2390], lip: "relaxed", open: 52, tongue: [192, 150, 132, 44] } },
  { group: "元音", symbol: "/ə/", name: "弱读音", map: "对应：非重读元音弱化", hard: true, contrast: "/ʌ/", tip: "它很轻很短，是美式语流自然的关键。", mouth: "全脸放松，舌头中央，几乎不出力。", audio: { type: "vowel", f: [500, 1500, 2500], lip: "relaxed", open: 38, tongue: [194, 140, 122, 38] } },
  { group: "元音", symbol: "/ʊ/", name: "松乌音", map: "对应：短 oo / u 常见音", hard: true, contrast: "/u/", tip: "不要把 /ʊ/ 读成很长的 oo。", mouth: "嘴唇略圆但放松，舌头高、靠后。", audio: { type: "vowel", f: [440, 1020, 2240], lip: "round", open: 34, tongue: [220, 128, 126, 38] } },
  { group: "元音", symbol: "/u/", name: "紧乌音", map: "对应：oo / ue / u_e 常见音", hard: true, contrast: "/ʊ/", tip: "/u/ 是更紧、更稳定的 oo 音。", mouth: "嘴唇收圆，舌头高、靠后。", audio: { type: "vowel", f: [300, 870, 2240], lip: "round", open: 24, tongue: [226, 118, 130, 34] } },
  { group: "双元音", symbol: "/eɪ/", name: "诶滑衣", map: "对应：a_e / ai / ay", hard: false, contrast: "/ɛ/", tip: "这是滑动音，不是一个静止的“诶”。", mouth: "口型从半开滑到较窄。", audio: { type: "diphthong", from: "/ɛ/", to: "/i/" } },
  { group: "双元音", symbol: "/oʊ/", name: "欧滑乌", map: "对应：o / oa / ow", hard: false, contrast: "/ɔ/", tip: "尾部嘴唇要收圆。", mouth: "从较开口滑向圆唇。", audio: { type: "diphthong", from: "/ɔ/", to: "/u/" } },
  { group: "双元音", symbol: "/aɪ/", name: "啊滑衣", map: "对应：i_e / y / igh", hard: false, contrast: "/ɪ/", tip: "先打开，再滑到短衣音。", mouth: "嘴巴从打开滑向展开。", audio: { type: "diphthong", from: "/ɑ/", to: "/ɪ/" } },
  { group: "双元音", symbol: "/aʊ/", name: "啊滑乌", map: "对应：ow / ou", hard: false, contrast: "/oʊ/", tip: "嘴巴从打开到收圆。", mouth: "从低位开口滑向圆唇。", audio: { type: "diphthong", from: "/ɑ/", to: "/u/" } },
  { group: "双元音", symbol: "/ɔɪ/", name: "奥滑衣", map: "对应：oy / oi", hard: false, contrast: "/ɔ/", tip: "先圆唇，再滑向衣音。", mouth: "从圆口滑到前位。", audio: { type: "diphthong", from: "/ɔ/", to: "/ɪ/" } },
  { group: "r 化元音", symbol: "/ɚ/", name: "弱 r 色彩", map: "对应：非重读 er / or", hard: true, contrast: "/ə/", tip: "美式词尾 er 不是纯 /ə/，要带轻 r。", mouth: "嘴唇微圆，舌头后收，音很轻。", audio: { type: "vowel", f: [500, 1300, 1700], lip: "round", open: 36, tongue: [218, 135, 112, 42], curl: true } },
  { group: "r 化元音", symbol: "/ɝ/", name: "重 r 色彩", map: "对应：重读 er / ir / ur", hard: true, contrast: "/ɚ/", tip: "舌头后收更明显，声音更强。", mouth: "嘴唇微圆，舌头后收。", audio: { type: "vowel", f: [520, 1250, 1680], lip: "round", open: 42, tongue: [216, 132, 120, 46], curl: true } },
  { group: "辅音", symbol: "/p/", name: "清 p", map: "对应：p", hard: false, contrast: "/b/", tip: "词首要有气流爆破。", mouth: "双唇闭合后弹开，声带不振动。", audio: { type: "stop", contact: "lips", voiced: false } },
  { group: "辅音", symbol: "/b/", name: "浊 b", map: "对应：b", hard: false, contrast: "/p/", tip: "和 /p/ 口型一样，但声带振动。", mouth: "双唇闭合后发声弹开。", audio: { type: "stop", contact: "lips", voiced: true } },
  { group: "辅音", symbol: "/t/", name: "清 t", map: "对应：t", hard: false, contrast: "/d/", tip: "舌尖轻触上齿龈，词首常送气。", mouth: "舌尖上顶后弹开。", audio: { type: "stop", contact: "alveolar", voiced: false } },
  { group: "辅音", symbol: "/d/", name: "浊 d", map: "对应：d", hard: false, contrast: "/t/", tip: "和 /t/ 口型一样，但声带振动。", mouth: "舌尖上顶后发声弹开。", audio: { type: "stop", contact: "alveolar", voiced: true } },
  { group: "辅音", symbol: "/k/", name: "清 k", map: "对应：c / k / ck", hard: false, contrast: "/g/", tip: "舌后部抬起后弹开。", mouth: "舌后部接触软腭，声带不振动。", audio: { type: "stop", contact: "back", voiced: false } },
  { group: "辅音", symbol: "/g/", name: "浊 g", map: "对应：g", hard: false, contrast: "/k/", tip: "和 /k/ 口型一样，但声带振动。", mouth: "舌后部发声弹开。", audio: { type: "stop", contact: "back", voiced: true } },
  { group: "辅音", symbol: "/f/", name: "清 f", map: "对应：f / ph", hard: false, contrast: "/v/", tip: "上牙轻触下唇，只吹气。", mouth: "上齿碰下唇，声带不振动。", audio: { type: "fricative", contact: "lipTeeth", voiced: false, band: 2500 } },
  { group: "辅音", symbol: "/v/", name: "浊 v", map: "对应：v", hard: true, contrast: "/f/", tip: "中国学习者容易读成 /w/；上牙必须碰下唇。", mouth: "上齿碰下唇，声带振动。", audio: { type: "fricative", contact: "lipTeeth", voiced: true, band: 2500 } },
  { group: "辅音", symbol: "/θ/", name: "清 th", map: "对应：th", hard: true, contrast: "/ð/", tip: "舌尖轻轻伸到牙齿之间，只吹气。", mouth: "舌尖在上下牙之间，声带不振动。", audio: { type: "fricative", contact: "th", voiced: false, band: 4800 } },
  { group: "辅音", symbol: "/ð/", name: "浊 th", map: "对应：th", hard: true, contrast: "/θ/", tip: "舌尖位置同 /θ/，但要发声。", mouth: "舌尖在牙齿之间，声带振动。", audio: { type: "fricative", contact: "th", voiced: true, band: 4200 } },
  { group: "辅音", symbol: "/s/", name: "清 s", map: "对应：s / c", hard: false, contrast: "/z/", tip: "气流细而长，不振动。", mouth: "舌尖靠近齿龈，气流从中间过。", audio: { type: "fricative", contact: "nearAlveolar", voiced: false, band: 6500 } },
  { group: "辅音", symbol: "/z/", name: "浊 z", map: "对应：z / s", hard: false, contrast: "/s/", tip: "像 /s/，但声带振动。", mouth: "舌尖靠近齿龈，声带振动。", audio: { type: "fricative", contact: "nearAlveolar", voiced: true, band: 6200 } },
  { group: "辅音", symbol: "/ʃ/", name: "sh 音", map: "对应：sh / ti / ci", hard: false, contrast: "/s/", tip: "嘴唇略圆，像轻轻说“嘘”。", mouth: "舌头略后，嘴唇略圆。", audio: { type: "fricative", contact: "sh", voiced: false, band: 3200 } },
  { group: "辅音", symbol: "/ʒ/", name: "浊 zh 音", map: "对应：s / si", hard: false, contrast: "/ʃ/", tip: "像 /ʃ/，但声带振动。", mouth: "sh 嘴型加发声。", audio: { type: "fricative", contact: "sh", voiced: true, band: 3000 } },
  { group: "辅音", symbol: "/h/", name: "h 音", map: "对应：h", hard: false, contrast: "/ə/", tip: "轻轻呼气，不要用嗓子挤。", mouth: "口腔打开，气流轻轻出来。", audio: { type: "fricative", contact: "open", voiced: false, band: 1600 } },
  { group: "辅音", symbol: "/tʃ/", name: "ch 音", map: "对应：ch / tch", hard: false, contrast: "/ʃ/", tip: "先挡住再放气，像 t + sh。", mouth: "舌尖先顶住，再释放摩擦。", audio: { type: "affricate", contact: "ch", voiced: false } },
  { group: "辅音", symbol: "/dʒ/", name: "j 音", map: "对应：j / g / dg", hard: false, contrast: "/tʃ/", tip: "像 d + zh，要有声带振动。", mouth: "舌尖先顶住，再发声摩擦。", audio: { type: "affricate", contact: "ch", voiced: true } },
  { group: "辅音", symbol: "/m/", name: "m 音", map: "对应：m", hard: false, contrast: "/n/", tip: "闭嘴，声音从鼻腔出。", mouth: "双唇闭合，鼻腔振动。", audio: { type: "nasal", contact: "lips", f: 220 } },
  { group: "辅音", symbol: "/n/", name: "n 音", map: "对应：n", hard: false, contrast: "/ŋ/", tip: "舌尖顶上齿龈，声音从鼻腔出。", mouth: "舌尖上顶，鼻腔振动。", audio: { type: "nasal", contact: "alveolar", f: 260 } },
  { group: "辅音", symbol: "/ŋ/", name: "ng 音", map: "对应：ng", hard: true, contrast: "/n/", tip: "舌后部抬起；不要在后面再加 /g/。", mouth: "舌后部接触软腭，鼻腔振动。", audio: { type: "nasal", contact: "back", f: 210 } },
  { group: "辅音", symbol: "/l/", name: "l 音", map: "对应：l", hard: true, contrast: "/ɹ/", tip: "舌尖要碰上齿龈，不要和 /ɹ/ 混。", mouth: "舌尖上顶，气流从舌侧出。", audio: { type: "liquid", contact: "alveolar", f: [360, 1300, 2600] } },
  { group: "辅音", symbol: "/ɹ/", name: "美式 r", map: "对应：r", hard: true, contrast: "/l/", tip: "舌头后收但不碰上颚；不要读成中文 r。", mouth: "嘴唇微圆，舌头后收。", audio: { type: "liquid", contact: "r", f: [420, 1150, 1700], curl: true } },
  { group: "辅音", symbol: "/j/", name: "y 音", map: "对应：y", hard: false, contrast: "/i/", tip: "像极短的 /i/，快速滑到后面元音。", mouth: "舌头高、靠前，快速滑动。", audio: { type: "glide", base: "/i/" } },
  { group: "辅音", symbol: "/w/", name: "w 音", map: "对应：w / wh", hard: true, contrast: "/v/", tip: "嘴唇收圆，不要用上牙碰下唇。", mouth: "嘴唇先圆再打开。", audio: { type: "glide", base: "/u/" } },
];

const state = {
  index: Number(localStorage.getItem("ipa-only-index") || 0),
  hardOnly: false,
};

const els = {
  list: document.querySelector("#soundList"),
  category: document.querySelector("#category"),
  symbol: document.querySelector("#symbol"),
  name: document.querySelector("#name"),
  map: document.querySelector("#soundMap"),
  mouthStage: document.querySelector("#mouthStage"),
  mouthText: document.querySelector("#mouthText"),
  chinaTip: document.querySelector("#chinaTip"),
  contrastText: document.querySelector("#contrastText"),
  playBtn: document.querySelector("#playBtn"),
  slowBtn: document.querySelector("#slowBtn"),
  repeatBtn: document.querySelector("#repeatBtn"),
  contrastBtn: document.querySelector("#contrastBtn"),
  reviewHardBtn: document.querySelector("#reviewHardBtn"),
};

let audioCtx;

function getAudioContext() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function getVisibleSounds() {
  return state.hardOnly ? sounds.filter((sound) => sound.hard) : sounds;
}

function getSound() {
  return getVisibleSounds()[state.index] || getVisibleSounds()[0];
}

function findSound(symbol) {
  return sounds.find((sound) => sound.symbol === symbol) || sounds[0];
}

function renderList() {
  const visible = getVisibleSounds();
  let group = "";
  els.list.innerHTML = visible
    .map((sound, index) => {
      const heading = sound.group !== group ? `<div class="group-title">${sound.group}</div>` : "";
      group = sound.group;
      return `
        ${heading}
        <button class="sound-tab ${index === state.index ? "is-active" : ""} ${sound.hard ? "is-hard" : ""}" data-index="${index}" type="button">
          ${sound.symbol}
        </button>
      `;
    })
    .join("");
}

function renderCurrent() {
  const sound = getSound();
  els.category.textContent = sound.group;
  els.symbol.textContent = sound.symbol;
  els.name.textContent = sound.name;
  els.map.textContent = sound.map;
  els.mouthText.textContent = sound.mouth;
  els.chinaTip.textContent = sound.tip;
  els.contrastText.textContent = `${sound.symbol} vs ${sound.contrast}：先听差别，再模仿口型。`;
  els.mouthStage.innerHTML = renderMouth(sound);
  localStorage.setItem("ipa-only-index", String(state.index));
}

function renderAll() {
  renderList();
  renderCurrent();
}

function formantVoice(sound, startTime, duration, slow = false) {
  const ctx = getAudioContext();
  const output = ctx.createGain();
  output.gain.setValueAtTime(0.0001, startTime);
  output.gain.exponentialRampToValueAtTime(0.18, startTime + 0.025);
  output.gain.setValueAtTime(0.18, startTime + duration - 0.06);
  output.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
  output.connect(ctx.destination);

  const source = ctx.createOscillator();
  source.type = "sawtooth";
  source.frequency.setValueAtTime(slow ? 125 : 145, startTime);
  source.connect(output);

  sound.audio.f.forEach((freq, index) => {
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq, startTime);
    filter.Q.setValueAtTime(index === 0 ? 8 : 11, startTime);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(index === 0 ? 0.75 : index === 1 ? 0.45 : 0.25, startTime);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(output);
  });

  source.start(startTime);
  source.stop(startTime + duration);
}

function noiseBurst(startTime, duration, band = 4500, gainValue = 0.16) {
  const ctx = getAudioContext();
  const buffer = ctx.createBuffer(1, ctx.sampleRate * duration, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) data[i] = Math.random() * 2 - 1;
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.setValueAtTime(band, startTime);
  filter.Q.setValueAtTime(3, startTime);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(gainValue, startTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
  source.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  source.start(startTime);
}

function voiceHum(startTime, duration, freq = 140, gainValue = 0.08) {
  const ctx = getAudioContext();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sawtooth";
  osc.frequency.setValueAtTime(freq, startTime);
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(gainValue, startTime + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(startTime);
  osc.stop(startTime + duration);
}

function playSound(sound = getSound(), options = {}) {
  const ctx = getAudioContext();
  const now = ctx.currentTime + 0.04;
  const duration = options.slow ? 0.95 : 0.58;
  const audio = sound.audio;

  if (audio.type === "vowel") {
    formantVoice(sound, now, duration, options.slow);
  } else if (audio.type === "diphthong") {
    formantVoice(findSound(audio.from), now, duration * 0.55, options.slow);
    formantVoice(findSound(audio.to), now + duration * 0.45, duration * 0.55, options.slow);
  } else if (audio.type === "stop") {
    if (audio.voiced) voiceHum(now, 0.16, 135, 0.07);
    noiseBurst(now + 0.08, 0.09, audio.contact === "back" ? 1800 : 4200, 0.2);
  } else if (audio.type === "fricative") {
    if (audio.voiced) voiceHum(now, duration, 135, 0.05);
    noiseBurst(now, duration, audio.band, 0.14);
  } else if (audio.type === "affricate") {
    if (audio.voiced) voiceHum(now, duration, 135, 0.05);
    noiseBurst(now + 0.08, duration * 0.65, audio.voiced ? 3000 : 3600, 0.17);
  } else if (audio.type === "nasal") {
    voiceHum(now, duration, audio.f, 0.13);
  } else if (audio.type === "liquid") {
    const temp = { audio: { type: "vowel", f: audio.f } };
    formantVoice(temp, now, duration, options.slow);
  } else if (audio.type === "glide") {
    formantVoice(findSound(audio.base), now, duration * 0.38, options.slow);
  }
}

function repeatSound(times = 5) {
  const sound = getSound();
  for (let i = 0; i < times; i += 1) {
    setTimeout(() => playSound(sound), i * 720);
  }
}

function playContrast() {
  const sound = getSound();
  const other = findSound(sound.contrast);
  playSound(sound, { slow: true });
  setTimeout(() => playSound(other, { slow: true }), 900);
  setTimeout(() => playSound(sound, { slow: true }), 1800);
  setTimeout(() => playSound(other, { slow: true }), 2700);
}

function lipPath(open, lip) {
  const top = 150 - open / 2;
  const bottom = 150 + open / 2;
  const width = lip === "round" ? 118 : lip === "wide" ? 220 : lip === "spread" ? 200 : 166;
  const left = 300 - width / 2;
  const right = 300 + width / 2;
  return `M ${left} ${top} C ${left + 50} ${top - 24}, ${right - 50} ${top - 24}, ${right} ${top}
          C ${right - 32} ${bottom + 30}, ${left + 32} ${bottom + 30}, ${left} ${top}`;
}

function contactPosition(contact) {
  const map = {
    lips: [300, 164, 126, 26],
    lipTeeth: [300, 174, 128, 30],
    th: [300, 148, 166, 28],
    alveolar: [250, 125, 120, 28],
    nearAlveolar: [250, 144, 118, 28],
    sh: [272, 146, 130, 32],
    ch: [260, 136, 132, 32],
    back: [344, 126, 136, 30],
    r: [304, 150, 120, 36],
  };
  return map[contact] || [300, 160, 124, 34];
}

function renderMouth(sound) {
  const audio = sound.audio.type === "diphthong" ? findSound(sound.audio.from).audio : sound.audio;
  const open = audio.open || (audio.type === "stop" ? 18 : 50);
  const lip = audio.lip || (audio.contact === "sh" || audio.contact === "ch" || audio.contact === "r" ? "round" : "relaxed");
  const t = audio.tongue || contactPosition(audio.contact);
  const curl = audio.curl || audio.contact === "r" ? `<path d="M ${t[0] + 48} ${t[1]} q 30 -25 54 4" fill="none" stroke="#c95477" stroke-width="9" stroke-linecap="round"/>` : "";
  const air = ["fricative", "affricate", "stop"].includes(sound.audio.type)
    ? `<path d="M390 144 C432 132, 462 128, 500 128" fill="none" stroke="#146c63" stroke-width="8" stroke-linecap="round"/><path d="M500 128 l-17 -12 m17 12 l-17 13" fill="none" stroke="#146c63" stroke-width="8" stroke-linecap="round"/>`
    : sound.audio.type === "nasal"
    ? `<path d="M300 104 C280 58, 210 56, 170 78" fill="none" stroke="#146c63" stroke-width="8" stroke-linecap="round"/><text x="142" y="82" font-size="18" fill="#146c63" font-weight="900">鼻腔</text>`
    : "";
  const voice = sound.audio.voiced || ["vowel", "diphthong", "nasal", "liquid", "glide"].includes(sound.audio.type)
    ? `<circle cx="92" cy="214" r="22" fill="#fff4de" stroke="#f1b94d" stroke-width="4"/><path d="M80 214 q12 -15 24 0 q-12 15 -24 0" fill="none" stroke="#e2644c" stroke-width="4"/><text x="92" y="254" text-anchor="middle" font-size="16" fill="#203650" font-weight="900">振动</text>`
    : `<text x="92" y="222" text-anchor="middle" font-size="17" fill="#66737a" font-weight="900">不振动</text>`;

  return `
    <svg viewBox="0 0 600 300" role="img" aria-label="${sound.symbol} 口型图">
      <rect width="600" height="300" fill="#f8fffd"/>
      <text x="28" y="38" font-size="20" font-weight="900" fill="#203650">只发这个音：${sound.symbol}</text>
      <path d="${lipPath(open, lip)}" fill="#9b1f3d" stroke="#75203a" stroke-width="5"/>
      <path d="M205 ${150 - open / 2 + 13} Q300 ${150 - open / 2 - 4} 395 ${150 - open / 2 + 13}" fill="none" stroke="#fff" stroke-width="13" stroke-linecap="round" opacity="${open > 30 ? 1 : 0.4}"/>
      <ellipse cx="${t[0]}" cy="${t[1]}" rx="${t[2] / 2}" ry="${t[3] / 2}" fill="#ff8fb0" stroke="#dc5f87" stroke-width="4"/>
      ${curl}
      ${air}
      ${voice}
      <text x="300" y="278" text-anchor="middle" font-size="20" font-weight="900" fill="#203650">${sound.name}</text>
    </svg>
  `;
}

els.list.addEventListener("click", (event) => {
  const button = event.target.closest("[data-index]");
  if (!button) return;
  state.index = Number(button.dataset.index);
  renderAll();
  playSound();
});

els.playBtn.addEventListener("click", () => playSound());
els.slowBtn.addEventListener("click", () => playSound(getSound(), { slow: true }));
els.repeatBtn.addEventListener("click", () => repeatSound(5));
els.contrastBtn.addEventListener("click", playContrast);
els.reviewHardBtn.addEventListener("click", () => {
  state.hardOnly = !state.hardOnly;
  state.index = 0;
  els.reviewHardBtn.textContent = state.hardOnly ? "显示全部" : "中国人重点";
  renderAll();
});

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

renderAll();
