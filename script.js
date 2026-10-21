/* Asma-ul-Husna — vanilla JS. Each entry: Arabic | transliteration | English meaning | Urdu meaning */
const RAW = [
"الرحمن|Ar-Raḥmān|The Most Gracious|بہت مہربان",
"الرحيم|Ar-Raḥīm|The Most Merciful|نہایت رحم کرنے والا",
"الملك|Al-Malik|The King, the Sovereign|بادشاہ",
"القدوس|Al-Quddūs|The Most Holy|نہایت پاک",
"السلام|As-Salām|The Source of Peace|سلامتی دینے والا",
"المؤمن|Al-Muʾmin|The Granter of Security|امن عطا کرنے والا",
"المهيمن|Al-Muhaymin|The Guardian, the Watcher|نگہبان",
"العزيز|Al-ʿAzīz|The Almighty, the Mighty|زبردست، غالب",
"الجبار|Al-Jabbār|The Compeller, the Restorer|بڑی قوت والا، سب کو سنوارنے والا",
"المتكبر|Al-Mutakabbir|The Supreme in Greatness|بڑائی والا",
"الخالق|Al-Khāliq|The Creator|پیدا کرنے والا",
"البارئ|Al-Bāriʾ|The Maker, the Evolver|وجود عطا کرنے والا",
"المصور|Al-Muṣawwir|The Fashioner of Forms|صورتیں بنانے والا",
"الغفار|Al-Ghaffār|The Ever-Forgiving|بار بار بخشنے والا",
"القهار|Al-Qahhār|The Subduer, the Overpowering|سب پر غالب",
"الوهاب|Al-Wahhāb|The Bestower of Gifts|بہت عطا کرنے والا",
"الرزاق|Ar-Razzāq|The Provider|رزق دینے والا",
"الفتاح|Al-Fattāḥ|The Opener, the Judge|کھولنے والا، فیصلہ کرنے والا",
"العليم|Al-ʿAlīm|The All-Knowing|سب کچھ جاننے والا",
"القابض|Al-Qābiḍ|The Withholder, the Constrictor|تنگی دینے والا",
"الباسط|Al-Bāsiṭ|The Extender, the Expander|کشادگی دینے والا",
"الخافض|Al-Khāfiḍ|The Abaser|پست کرنے والا",
"الرافع|Ar-Rāfiʿ|The Exalter|بلند کرنے والا",
"المعز|Al-Muʿizz|The Giver of Honor|عزت دینے والا",
"المذل|Al-Mudhill|The Giver of Dishonor|ذلت دینے والا",
"السميع|As-Samīʿ|The All-Hearing|سب کچھ سننے والا",
"البصير|Al-Baṣīr|The All-Seeing|سب کچھ دیکھنے والا",
"الحكم|Al-Ḥakam|The Judge|فیصلہ کرنے والا",
"العدل|Al-ʿAdl|The Utterly Just|کامل انصاف کرنے والا",
"اللطيف|Al-Laṭīf|The Subtle, the Most Gentle|نہایت مہربان، باریک بین",
"الخبير|Al-Khabīr|The All-Aware|ہر بات کی خبر رکھنے والا",
"الحليم|Al-Ḥalīm|The Forbearing|بردبار",
"العظيم|Al-ʿAẓīm|The Magnificent|بڑی عظمت والا",
"الغفور|Al-Ghafūr|The Much-Forgiving|بہت بخشنے والا",
"الشكور|Ash-Shakūr|The Most Appreciative|قدر دان",
"العلي|Al-ʿAlī|The Most High|بہت بلند",
"الكبير|Al-Kabīr|The Most Great|سب سے بڑا",
"الحفيظ|Al-Ḥafīẓ|The Preserver, the Guardian|حفاظت کرنے والا",
"المقيت|Al-Muqīt|The Sustainer, the Nourisher|روزی پہنچانے والا",
"الحسيب|Al-Ḥasīb|The Reckoner, the Sufficient|حساب لینے والا، کافی",
"الجليل|Al-Jalīl|The Majestic|بزرگی و جلال والا",
"الكريم|Al-Karīm|The Most Generous|نہایت کرم کرنے والا",
"الرقيب|Ar-Raqīb|The Watchful|نگران",
"المجيب|Al-Mujīb|The Responsive One|دعا قبول کرنے والا",
"الواسع|Al-Wāsiʿ|The All-Encompassing|وسعت والا",
"الحكيم|Al-Ḥakīm|The All-Wise|حکمت والا",
"الودود|Al-Wadūd|The Most Loving|بہت محبت کرنے والا",
"المجيد|Al-Majīd|The Glorious|بڑی شان والا",
"الباعث|Al-Bāʿith|The Resurrector|زندہ کر کے اٹھانے والا",
"الشهيد|Ash-Shahīd|The Witness|ہر چیز پر گواہ",
"الحق|Al-Ḥaqq|The Absolute Truth|سچا، حقیقی",
"الوكيل|Al-Wakīl|The Trustee, the Disposer of Affairs|کارساز",
"القوي|Al-Qawī|The All-Strong|بڑی طاقت والا",
"المتين|Al-Matīn|The Firm, the Steadfast|بہت مضبوط",
"الولي|Al-Walī|The Protecting Friend|مددگار، دوست",
"الحميد|Al-Ḥamīd|The Praiseworthy|تعریف کے لائق",
"المحصي|Al-Muḥṣī|The Accounter, the Counter|ہر چیز کا شمار رکھنے والا",
"المبدئ|Al-Mubdiʾ|The Originator|پہلی بار پیدا کرنے والا",
"المعيد|Al-Muʿīd|The Restorer|دوبارہ پیدا کرنے والا",
"المحيي|Al-Muḥyī|The Giver of Life|زندگی دینے والا",
"المميت|Al-Mumīt|The Bringer of Death|موت دینے والا",
"الحي|Al-Ḥayy|The Ever-Living|ہمیشہ زندہ",
"القيوم|Al-Qayyūm|The Self-Subsisting, the Sustainer of All|خود قائم، سب کو قائم رکھنے والا",
"الواجد|Al-Wājid|The Finder, the Perceiver|سب کچھ پانے والا",
"الماجد|Al-Mājid|The Noble, the Glorious|بزرگ، شان والا",
"الواحد|Al-Wāḥid|The One|ایک",
"الأحد|Al-Aḥad|The Unique, the Only One|یکتا",
"الصمد|Aṣ-Ṣamad|The Eternal Refuge|بے نیاز، سب کا سہارا",
"القادر|Al-Qādir|The All-Capable|قدرت والا",
"المقتدر|Al-Muqtadir|The All-Powerful|کامل قدرت رکھنے والا",
"المقدم|Al-Muqaddim|The Expediter, the Bringer Forward|آگے کرنے والا",
"المؤخر|Al-Muʾakhkhir|The Delayer, the Put-Backer|پیچھے کرنے والا",
"الأول|Al-Awwal|The First|سب سے پہلے",
"الآخر|Al-Ākhir|The Last|سب کے بعد",
"الظاهر|Aẓ-Ẓāhir|The Manifest|ظاہر",
"الباطن|Al-Bāṭin|The Hidden|پوشیدہ",
"الوالي|Al-Wālī|The Governor, the Patron|کارساز، مالک و مختار",
"المتعالي|Al-Mutaʿālī|The Most Exalted|بہت بلند و برتر",
"البر|Al-Barr|The Source of Goodness|احسان کرنے والا",
"التواب|At-Tawwāb|The Acceptor of Repentance|توبہ قبول کرنے والا",
"المنتقم|Al-Muntaqim|The Avenger, the Retributor|بدلہ لینے والا",
"العفو|Al-ʿAfuww|The Pardoner|معاف کرنے والا",
"الرؤوف|Ar-Raʾūf|The Most Compassionate|نہایت شفیق",
"مالك الملك|Mālik al-Mulk|Owner of All Sovereignty|بادشاہی کا مالک",
"ذو الجلال والإكرام|Dhū al-Jalāli wa al-Ikrām|Lord of Majesty and Generosity|جلال اور اکرام والا",
"المقسط|Al-Muqsiṭ|The Equitable|انصاف قائم کرنے والا",
"الجامع|Al-Jāmiʿ|The Gatherer|سب کو جمع کرنے والا",
"الغني|Al-Ghanī|The Self-Sufficient, the Rich|بے نیاز، غنی",
"المغني|Al-Mughnī|The Enricher|غنی کرنے والا",
"المانع|Al-Māniʿ|The Preventer, the Withholder|روکنے والا",
"الضار|Aḍ-Ḍārr|The Distresser|نقصان پہنچانے پر قدرت رکھنے والا",
"النافع|An-Nāfiʿ|The Benefactor|نفع دینے والا",
"النور|An-Nūr|The Light|نور",
"الهادي|Al-Hādī|The Guide|ہدایت دینے والا",
"البديع|Al-Badīʿ|The Incomparable Originator|بے مثال پیدا کرنے والا",
"الباقي|Al-Bāqī|The Everlasting|ہمیشہ باقی رہنے والا",
"الوارث|Al-Wārith|The Inheritor of All|سب کا وارث",
"الرشيد|Ar-Rashīd|The Guide to the Right Path|راہ راست دکھانے والا",
"الصبور|Aṣ-Ṣabūr|The Most Patient|بہت صبر کرنے والا"
];

const NAMES = RAW.map((line, i) => {
  const [ar, tr, en, ur] = line.split("|");
  return { id: i + 1, ar, tr, en, ur };
});
const TOTAL = NAMES.length; // 99

const $ = (id) => document.getElementById(id);
const el = {
  badge: $("badge"), nameAr: $("nameAr"), translit: $("translit"),
  en: $("meaningEn"), ur: $("meaningUr"), swap: $("swap"),
  pos: $("posText"), bar: $("bar"), fill: $("barFill"),
  prev: $("prev"), next: $("next"),
  favBtn: $("favBtn"), favToggle: $("favToggle"), favCount: $("favCount"),
  search: $("search"), results: $("results"), head: $("resultsHead"), list: $("resultsList"),
  jumpForm: $("jumpForm"), jumpInput: $("jumpInput"), jumpMsg: $("jumpMsg")
};

/* ---------- state ---------- */
const STORE_KEY = "asma-ul-husna:favorites";
let current = 0;
let showFavs = false;
let favs = loadFavs();

function loadFavs() {
  try {
    const v = JSON.parse(localStorage.getItem(STORE_KEY));
    return Array.isArray(v) ? v.filter((n) => Number.isInteger(n) && n >= 1 && n <= TOTAL) : [];
  } catch (e) { return []; }
}
function saveFavs() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(favs)); } catch (e) { /* storage unavailable */ }
}

/* ---------- rendering ---------- */
function render(animate = true) {
  const n = NAMES[current];
  el.badge.textContent = n.id;
  el.nameAr.textContent = n.ar;
  el.nameAr.classList.toggle("long", n.ar.length > 9);
  el.translit.textContent = n.tr;
  el.en.textContent = n.en;
  el.ur.textContent = n.ur;
  el.pos.textContent = n.id + " / " + TOTAL;
  el.fill.style.width = (n.id / TOTAL) * 100 + "%";
  el.bar.setAttribute("aria-valuenow", n.id);
  el.bar.setAttribute("aria-valuetext", "Name " + n.id + " of " + TOTAL);
  renderFavState();
  if (animate) {
    el.swap.classList.remove("fade");
    void el.swap.offsetWidth; // restart animation
    el.swap.classList.add("fade");
  }
}

function renderFavState() {
  const on = favs.includes(NAMES[current].id);
  el.favBtn.setAttribute("aria-pressed", on);
  el.favBtn.setAttribute("aria-label", on ? "Remove " + NAMES[current].tr + " from favorites" : "Add " + NAMES[current].tr + " to favorites");
  el.favCount.textContent = favs.length;
}

function go(index) {
  current = (index + TOTAL) % TOTAL; // wraps around
  render();
}

/* ---------- navigation ---------- */
el.prev.addEventListener("click", () => go(current - 1));
el.next.addEventListener("click", () => go(current + 1));

el.jumpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const v = Number(el.jumpInput.value);
  if (!Number.isInteger(v) || v < 1 || v > TOTAL) {
    el.jumpMsg.textContent = "Enter a whole number from 1 to " + TOTAL + ".";
    return;
  }
  el.jumpMsg.textContent = "";
  go(v - 1);
  el.jumpInput.value = "";
});
el.jumpInput.addEventListener("input", () => { el.jumpMsg.textContent = ""; });

document.addEventListener("keydown", (e) => {
  const tag = (e.target.tagName || "").toLowerCase();
  if (tag === "input") {
    if (e.key === "Escape" && e.target === el.search) { el.search.value = ""; refreshPanel(); }
    return;
  }
  if (e.key === "ArrowLeft") go(current - 1);
  if (e.key === "ArrowRight") go(current + 1);
});

/* ---------- favorites ---------- */
el.favBtn.addEventListener("click", () => {
  const id = NAMES[current].id;
  favs = favs.includes(id) ? favs.filter((f) => f !== id) : [...favs, id].sort((a, b) => a - b);
  saveFavs();
  renderFavState();
  if (showFavs) refreshPanel();
});

el.favToggle.addEventListener("click", () => {
  showFavs = !showFavs;
  if (showFavs) el.search.value = "";
  refreshPanel();
});

/* ---------- search ---------- */
function norm(s) {
  return String(s).toLowerCase().normalize("NFD")
    .replace(/[\u0300-\u036f\u064B-\u065F\u0670\u0654\u0655]/g, "") // diacritics & harakat
    .replace(/[ʿʾʼ'’`\-\s]/g, "")
    .replace(/[أإآٱ]/g, "ا").replace(/ؤ/g, "و").replace(/ئ/g, "ي")
    .replace(/[ىی]/g, "ي").replace(/ک/g, "ك").replace(/[ةہھ]/g, "ه");
}
const INDEX = NAMES.map((n) => norm(n.ar + n.tr + n.en + n.ur) + "#" + n.id);

function matches(q) {
  const nq = norm(q);
  if (!nq) return [];
  return NAMES.filter((n, i) => {
    if (/^\d+$/.test(nq)) return String(n.id) === nq;
    return INDEX[i].slice(0, INDEX[i].lastIndexOf("#")).includes(nq);
  });
}

function refreshPanel() {
  const q = el.search.value.trim();
  el.favToggle.setAttribute("aria-expanded", showFavs);
  let items, head;
  if (showFavs) {
    items = favs.map((id) => NAMES[id - 1]);
    head = items.length ? "Your favorites (" + items.length + ")" : "No favorites yet. Tap the heart on a name to save it.";
  } else if (q) {
    items = matches(q);
    head = items.length ? items.length + (items.length === 1 ? " name found" : " names found") : "No name matches “" + q + "”. Try Arabic, English, Urdu, or a number.";
  } else {
    el.results.hidden = true;
    return;
  }
  el.head.textContent = head;
  el.list.textContent = "";
  items.forEach((n) => {
    const li = document.createElement("li");
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("aria-label", "Open name " + n.id + ", " + n.tr);
    b.innerHTML = '<span class="r-num"></span><span class="r-tr"></span><span class="r-ar" lang="ar" dir="rtl"></span>';
    b.children[0].textContent = n.id;
    b.children[1].textContent = n.tr;
    b.children[2].textContent = n.ar;
    b.addEventListener("click", () => {
      go(n.id - 1);
      el.search.value = "";
      showFavs = false;
      refreshPanel();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    li.appendChild(b);
    el.list.appendChild(li);
  });
  el.results.hidden = false;
}

el.search.addEventListener("input", () => {
  if (el.search.value) showFavs = false;
  refreshPanel();
});

/* ---------- start ---------- */
current = 13; // opens on name 14 / 99
render(false);
