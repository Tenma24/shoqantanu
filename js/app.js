const fallbackImages = [
  'assets/img/old-map.svg',
  'assets/img/issyk-kul.svg',
  'assets/img/kyrgyz-culture.svg',
  'assets/img/shoqan-walikhanov-real.png'
];

const routePoints = [
  { date: '18 сәуір', title: 'Семей → Аягөз', place: 'Семей', lat: 50.4111, lng: 80.2275, x: 90, y: 160, image: 'assets/route/01-semey-ayagoz.svg', desc: 'Сапар Семейден Аягөзге қарай басталды.' },
  { date: '15 мамыр', title: 'Шелек өзені', place: 'Шелек', lat: 43.5981, lng: 78.2558, x: 380, y: 330, image: 'assets/route/02-shelek.svg', desc: 'Шелек өзеніндегі түнемелік. Экспедиция Жетісу табиғатын бақылауды жалғастырды.' },
  { date: '16 мамыр', title: 'Сөгеті тауы', place: 'Сөгеті', lat: 43.5450, lng: 78.6200, x: 440, y: 305, image: 'assets/route/03-sogety.svg', desc: 'Сөгеті тауы мен Қарабұлақ бастауындағы түнемелік.' },
  { date: '17 мамыр', title: 'Торайғырдың теріскей жағы', place: 'Торайғыр', lat: 43.3118, lng: 79.1295, x: 500, y: 275, image: 'assets/route/04-toraigyr.svg', desc: 'Торайғыр тауының теріскей жағы, Айыр асуы және сол аттас бұлақ.' },
  { date: '18 мамыр', title: 'Сұлу Қарашоқы шатқалы', place: 'Қарашоқы', lat: 43.2255, lng: 79.4682, x: 545, y: 286, image: 'assets/route/05-karashoky.svg', desc: 'Торайғыр тауының күнгей жағы және Сұлу Қарашоқы шатқалындағы бұлақ.' },
  { date: '19 мамыр', title: 'Бірінші Меркі өзені', place: 'Меркі', lat: 43.1510, lng: 79.8840, x: 590, y: 312, image: 'assets/route/06-merki.svg', desc: 'Бірінші Меркі өзені маңындағы жол бөлігі.' },
  { date: '20 мамыр', title: 'Шырғанақ өзені', place: 'Шырғанақ', lat: 43.1030, lng: 80.2250, x: 630, y: 295, image: 'assets/route/07-shyrganak.svg', desc: 'Шырғанақ өзеніндегі түнемелік.' },
  { date: '21 мамыр', title: 'Қарқара өзені', place: 'Қарқара', lat: 42.9190, lng: 79.7350, x: 675, y: 270, image: 'assets/route/08-karkara.svg', desc: 'Қарқара өзені аймағына жеткен кезең.' },
  { date: '22 мамыр', title: 'Қарқарадағы екінші түнемелік', place: 'Қарқара', lat: 42.8985, lng: 79.7865, x: 700, y: 252, image: 'assets/route/09-karkara-second.svg', desc: 'Қарқара өзеніндегі екінші түнемелік.' },
  { date: '23 мамыр', title: 'Жиделі – Бұғу', place: 'Жиделі', lat: 42.8360, lng: 79.9950, x: 725, y: 238, image: 'assets/route/10-zhideli-bugu.svg', desc: 'Сол түнемелік. Жиделі – Бұғу аймағы.' },
  { date: '25 мамыр', title: 'Санташ асуы', place: 'Санташ', lat: 42.7310, lng: 79.9540, x: 760, y: 220, image: 'assets/route/11-santash.svg', desc: 'Санташ асуындағы Түп өзеніндегі түнемелік.' },
  { date: '28 мамыр', title: 'Түп өзені, Кеңсай', place: 'Кеңсай', lat: 42.7330, lng: 78.3680, x: 805, y: 230, image: 'assets/route/12-tyup-kensai.svg', desc: 'Түп өзені, Санташ асуының оңтүстік шеті және Кеңсай шатқалындағы түнемелік.' },
  { date: '29 мамыр', title: 'Қарабатпақ өзені', place: 'Қарабатпақ', lat: 42.6460, lng: 78.1900, x: 842, y: 257, image: 'assets/route/13-karabatpak.svg', desc: 'Қарабатпақ өзені мен шатқалындағы түнемелік.' },
  { date: '2 маусым', title: 'Тұлпартас шатқалы', place: 'Тұлпартас', lat: 42.6210, lng: 78.0150, x: 830, y: 305, image: 'assets/route/14-tulpartas.svg', desc: 'Буғу руының манабы Боранбай Бекмұратовтың Тұлпартас шатқалындағы ауылы.' },
  { date: '3 маусым', title: 'Емен етегі', place: 'Емен', lat: 42.6930, lng: 77.8020, x: 785, y: 335, image: 'assets/route/15-emen.svg', desc: 'Еменнің етегіндегі желден руынан шыққан қырғыздардың ауылында түнеген.' },
  { date: '4 маусым', title: 'Өрікті бұлақтары', place: 'Өрікті', lat: 42.7920, lng: 77.6020, x: 735, y: 350, image: 'assets/route/16-orikti.svg', desc: 'Жасақ Өрікті деп аталатын үш бұлақтан өтіп, үшіншісіне тоқтады.' },
  { date: '13 маусым', title: 'Жалаңаш үстірті', place: 'Жалаңаш', lat: 43.0330, lng: 78.5230, x: 610, y: 365, image: 'assets/route/17-zhalanash.svg', desc: 'Шелектің жоғары тұсынан өтіп, өте қолайлы жайлау саналатын Жалаңаш үстіртіне көтерілді.' },
  { date: '15 маусым', title: 'Верный бекінісі', place: 'Верный', lat: 43.2389, lng: 76.8897, x: 460, y: 410, image: 'assets/route/18-verny.svg', desc: 'Кешке Верный бекінісіне келіп жетті.' },
  { date: '16 маусым', title: 'Кері шығу', place: 'Верный', lat: 43.2600, lng: 76.9300, x: 430, y: 390, image: 'assets/route/19-return.svg', desc: 'Келесі күні кері бағытқа шықты.' },
  { date: '18 маусым', title: 'Шеңгелді', place: 'Шеңгелді', lat: 43.5250, lng: 77.9800, x: 340, y: 358, image: 'assets/route/20-shengeldi.svg', desc: 'Кешке қарай Шеңгелдіден өтіп, су құбырын қарап, бір құбыр алған.' },
  { date: '23 маусым', title: 'Тезек ауылы', place: 'Тезек', lat: 44.2210, lng: 79.5240, x: 265, y: 315, image: 'assets/route/21-tezek.svg', desc: 'Сағат 9-да Тезек ауылынан аттанды.' }
];

const instagramSlides = [
  { src: 'assets/img/shok.png', fallback: 'assets/img/shok.png', title: 'Шоқан Уәлиханов', meta: 'Портрет', caption: 'Ыстықкөлден бір фото.' },
  { src: 'assets/img/kiz.png', fallback: 'assets/img/kiz.png', title: 'Шаш өру', meta: 'Портрет', caption: 'Үйленіп жатқан қыздың шаш өру дәстүрі' },
  { src: 'assets/img/kyrgyz.png', fallback: 'assets/img/kyrgyz.png', title: 'Қырғыздар жайлы мәліметтер', meta: 'Этнография', caption: 'Шоқанның қырғыз халқы туралы этнографиялық жазбалары визуалды пост ретінде берілді.' },
  { src: 'assets/img/aiphoto.png', fallback: 'assets/img/aiphoto.png', title: 'Бірге сурет', meta: 'Портрет', caption: 'Қырғыздармен бір сурет.' },
  { src: 'assets/img/oba.png', fallback: 'assets/img/oba.png', title: 'Обалар', meta: 'Көне', caption: 'Тарихтың үнсіз куәгерлері.' },
  { src: 'assets/maps/shoqan-route-map.svg', fallback: 'assets/img/old-map.svg', title: 'Кәсіби карта-сурет', meta: 'Route map', caption: 'Жүріп өткен жолдарым.' }
];

const quizData = [
  {
    question: 'Шоқан Уәлиханов Ыстықкөл аймағына қай жылы экспедициямен барды?',
    options: ['1835 жылы', '1856 жылы', '1865 жылы', '1905 жылы'],
    answer: 1
  },
  {
    question: '«Ыстықкөл күнделігінде» қандай мәліметтер кездеседі?',
    options: ['Тек әскери бұйрықтар', 'Табиғат, халық тұрмысы, салт-дәстүр, тарихи ескерткіштер', 'Тек сауда бағалары', 'Тек қала жоспары'],
    answer: 1
  },
  {
    question: 'Шоқанның шын есімі қандай?',
    options: ['Мұхаммед Қанафия', 'Әбілмансұр', 'Ибраһим', 'Қанапиябек'],
    answer: 0
  }
];

let activePoint = 0;
let mapInstance = null;
let mainRouteMarker = null;
let leafletMarkers = [];
let isPlaying = false;
let playTimer = null;
let instaIndex = 0;
let instaTimer = null;

function qs(selector) { return document.querySelector(selector); }
function qsa(selector) { return [...document.querySelectorAll(selector)]; }
function fallbackFor(index) { return fallbackImages[index % fallbackImages.length]; }

function updateReadingProgress() {
  const doc = document.documentElement;
  const scrollTop = doc.scrollTop || document.body.scrollTop;
  const height = doc.scrollHeight - doc.clientHeight;
  const width = height > 0 ? (scrollTop / height) * 100 : 0;
  qs('#readingProgress').style.width = `${width}%`;
  qs('#scrollTop').classList.toggle('show', scrollTop > 500);
}

function setupNavigation() {
  const menuToggle = qs('#menuToggle');
  const navLinks = qs('#navLinks');
  menuToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  qsa('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  qs('#themeToggle').addEventListener('click', () => {
    const nextTheme = document.body.dataset.theme === 'night' ? '' : 'night';
    document.body.dataset.theme = nextTheme;
    localStorage.setItem('shoqantanu-theme', nextTheme);
    qs('#themeToggle').textContent = nextTheme === 'night' ? '☀' : '☾';
    if (mapInstance) setTimeout(() => mapInstance.invalidateSize(), 250);
  });

  const savedTheme = localStorage.getItem('shoqantanu-theme') || '';
  document.body.dataset.theme = savedTheme;
  qs('#themeToggle').textContent = savedTheme === 'night' ? '☀' : '☾';
  qs('#scrollTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function revealOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  qsa('.reveal').forEach((el) => observer.observe(el));
}

function drawFallbackMap() {
  const svg = qs('#routeMap');
  if (!svg) return;

  const route = routePoints.map((p) => `${p.x},${p.y}`).join(' ');
  const labelsToShow = new Set([0, 1, 3, 10, 13, 17, 20]);

  svg.innerHTML = `
    <defs>
      <linearGradient id="lakeGradient" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#7dd8ee" />
        <stop offset="100%" stop-color="#0f8aa5" />
      </linearGradient>
      <linearGradient id="landGradient" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#fff3d2" />
        <stop offset="100%" stop-color="#d9bf82" />
      </linearGradient>
      <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="10" stdDeviation="9" flood-color="#1f2a2b" flood-opacity="0.22" />
      </filter>
    </defs>
    <rect x="0" y="0" width="1000" height="560" fill="url(#landGradient)" opacity=".45" />
    <path d="M0 390 C130 335 195 440 315 385 C440 325 525 370 640 314 C780 245 890 300 1000 230 L1000 560 L0 560 Z" fill="#b1c28b" opacity=".38" />
    <path d="M0 120 C170 210 260 80 410 160 C555 240 650 70 820 150 C910 190 948 170 1000 145 L1000 0 L0 0 Z" fill="#789373" opacity=".35" />
    <path d="M628 180 C687 122 811 118 890 168 C932 196 923 257 865 283 C775 324 651 294 610 246 C588 220 597 200 628 180 Z" fill="url(#lakeGradient)" filter="url(#softShadow)" />
    <text x="720" y="226" class="map-label">Ыстықкөл</text>
    <path d="M112 248 L162 128 L225 250 Z M205 258 L275 110 L348 263 Z M402 283 L470 135 L545 285 Z" fill="#5f6f5d" opacity=".54" />
    <path d="M132 208 L162 128 L192 208 Z M244 216 L275 110 L307 217 Z M438 229 L470 135 L502 229 Z" fill="#fffaf0" opacity=".72" />
    <polyline class="route-shadow" points="${route}" />
    <polyline class="route-line" points="${route}" />
  `;

  routePoints.forEach((point, index) => {
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.classList.add('marker');
    if (index === activePoint) group.classList.add('active');
    group.setAttribute('tabindex', '0');
    group.setAttribute('role', 'button');
    group.setAttribute('aria-label', `${point.date}: ${point.title}`);
    group.dataset.index = index;
    group.innerHTML = `
      <circle cx="${point.x}" cy="${point.y}" r="9"></circle>
      ${labelsToShow.has(index) ? `<text x="${point.x + 14}" y="${point.y - 8}" class="map-label">${point.place}</text><text x="${point.x + 14}" y="${point.y + 9}" class="map-date">${point.date}</text>` : ''}
    `;
    group.addEventListener('click', () => setActivePoint(index));
    group.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setActivePoint(index);
      }
    });
    svg.appendChild(group);
  });
}

function createLeafletNumberIcon(index, active = false) {
  return L.divIcon({
    className: `route-leaflet-marker ${active ? 'active' : ''}`,
    html: `<span>${index + 1}</span>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17]
  });
}

function setupLeafletMap() {
  const mapEl = qs('#leafletMap');
  const fallback = qs('#routeMap');
  if (!mapEl || typeof L === 'undefined') {
    mapEl?.classList.add('hidden');
    fallback?.classList.add('show');
    return false;
  }

  fallback?.classList.remove('show');
  mapEl.classList.add('online-ready');
  qs('.map-layer-online')?.classList.add('show');
  mapInstance = L.map(mapEl, {
    zoomControl: true,
    scrollWheelZoom: false,
    preferCanvas: true
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(mapInstance);

  const latlngs = routePoints.map((p) => [p.lat, p.lng]);
  L.polyline(latlngs, {
    color: '#0d6b67',
    weight: 5,
    opacity: 0.72,
    lineJoin: 'round'
  }).addTo(mapInstance);

  L.polyline(latlngs, {
    color: '#c68a2b',
    weight: 2,
    opacity: 0.9,
    dashArray: '12, 9'
  }).addTo(mapInstance);

  leafletMarkers = routePoints.map((point, index) => {
    const marker = L.marker([point.lat, point.lng], { icon: createLeafletNumberIcon(index, index === activePoint) })
      .addTo(mapInstance)
      .bindTooltip(`${point.date} · ${point.place}`, { direction: 'top', offset: [0, -12] });
    marker.on('click', () => setActivePoint(index));
    return marker;
  });

  mainRouteMarker = L.marker([routePoints[0].lat, routePoints[0].lng], {
    icon: L.divIcon({ className: 'moving-marker', html: '<span>Ш</span>', iconSize: [42, 42], iconAnchor: [21, 21] })
  }).addTo(mapInstance);

  mapInstance.fitBounds(L.latLngBounds(latlngs), { padding: [38, 38] });
  setTimeout(() => mapInstance.invalidateSize(), 350);
  return true;
}

function moveMarkerSmoothly(targetIndex) {
  if (!mainRouteMarker) return;
  const target = routePoints[targetIndex];
  const current = mainRouteMarker.getLatLng();
  const startLat = current.lat;
  const startLng = current.lng;
  const duration = 850;
  const start = performance.now();

  function animate(now) {
    const raw = Math.min(1, (now - start) / duration);
    const eased = raw < 0.5 ? 2 * raw * raw : 1 - Math.pow(-2 * raw + 2, 2) / 2;
    const lat = startLat + (target.lat - startLat) * eased;
    const lng = startLng + (target.lng - startLng) * eased;
    mainRouteMarker.setLatLng([lat, lng]);
    if (raw < 1) requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);

  if (mapInstance) {
    mapInstance.panTo([target.lat, target.lng], { animate: true, duration: 0.8 });
  }
}

function renderRouteTimeline() {
  const wrapper = qs('#routeTimeline');
  wrapper.innerHTML = '';
  routePoints.forEach((point, index) => {
    const button = document.createElement('button');
    button.className = 'route-card';
    button.dataset.index = index;
    button.innerHTML = `
      <span>${point.date}</span>
      <strong>${point.title}</strong>
      <p>${point.desc}</p>
    `;
    button.addEventListener('click', () => setActivePoint(index));
    wrapper.appendChild(button);
  });
}

function setActivePoint(index) {
  activePoint = Math.max(0, Math.min(index, routePoints.length - 1));
  const point = routePoints[activePoint];
  qs('#routeTitle').textContent = point.title;
  qs('#routeDate').textContent = point.date;
  qs('#routeDescription').textContent = point.desc;
  qs('#routeCounter').textContent = `${activePoint + 1} / ${routePoints.length}`;
  qs('#routeBar').style.width = `${((activePoint + 1) / routePoints.length) * 100}%`;

  const routePhoto = qs('#routePhoto');
  const fallback = fallbackFor(activePoint);
  routePhoto.onerror = () => {
    routePhoto.onerror = null;
    routePhoto.src = fallback;
  };
  routePhoto.src = point.image;
  routePhoto.alt = `${point.date} — ${point.title} фотосы`;
  qs('#routePhotoCaption').textContent = `${point.date} · ${point.place}. Бұл датаға бөлек маршрут фотосы автоматты түрде ауысады.`;

  const slider = qs('#routeSlider');
  if (slider) slider.value = String(activePoint);

  qsa('.route-card').forEach((card) => card.classList.toggle('active', Number(card.dataset.index) === activePoint));
  qsa('.marker').forEach((marker) => marker.classList.toggle('active', Number(marker.dataset.index) === activePoint));

  if (leafletMarkers.length && typeof L !== 'undefined') {
    leafletMarkers.forEach((marker, markerIndex) => marker.setIcon(createLeafletNumberIcon(markerIndex, markerIndex === activePoint)));
  }
  moveMarkerSmoothly(activePoint);
}

function setupMap() {
  drawFallbackMap();
  renderRouteTimeline();
  const hasLeaflet = setupLeafletMap();
  if (!hasLeaflet) qs('#routeMap')?.classList.add('show');
  setActivePoint(0);

  qs('#nextPoint').addEventListener('click', () => setActivePoint((activePoint + 1) % routePoints.length));
  qs('#prevPoint').addEventListener('click', () => setActivePoint((activePoint - 1 + routePoints.length) % routePoints.length));
  qs('#routeSlider').addEventListener('input', (event) => setActivePoint(Number(event.target.value)));
  qs('#playRoute').addEventListener('click', toggleRoutePlay);
}

function toggleRoutePlay() {
  const button = qs('#playRoute');
  isPlaying = !isPlaying;
  button.textContent = isPlaying ? '⏸ Тоқтату' : '▶ Ойнату';
  clearInterval(playTimer);
  if (isPlaying) {
    playTimer = setInterval(() => {
      const next = (activePoint + 1) % routePoints.length;
      setActivePoint(next);
      if (next === routePoints.length - 1) {
        clearInterval(playTimer);
        isPlaying = false;
        button.textContent = '▶ Ойнату';
      }
    }, 1700);
  }
}

function setupInstagramCarousel() {
  const track = qs('#instaTrack');
  const dots = qs('#instaDots');
  const storyRow = qs('#storyRow');
  const caption = qs('#instaCaptionText');
  if (!track || !dots || !storyRow || !caption) return;

  track.innerHTML = instagramSlides.map((slide, index) => `
    <article class="insta-slide" data-index="${index}">
      <img src="${slide.src}" alt="${slide.title}" loading="lazy" onerror="this.onerror=null; this.src='${slide.fallback}'" />
      <div class="slide-overlay">
        <span>${slide.meta}</span>
        <strong>${slide.title}</strong>
      </div>
    </article>
  `).join('');

  dots.innerHTML = instagramSlides.map((_, index) => `<button aria-label="${index + 1}-фото" data-index="${index}"></button>`).join('');
  storyRow.innerHTML = instagramSlides.map((slide, index) => `
    <button class="story-bubble" data-index="${index}" aria-label="${slide.title}">
      <img src="${slide.src}" alt="" onerror="this.onerror=null; this.src='${slide.fallback}'" />
      <span>${index + 1}</span>
    </button>
  `).join('');

  function showSlide(index) {
    instaIndex = (index + instagramSlides.length) % instagramSlides.length;
    track.style.transform = `translateX(-${instaIndex * 100}%)`;
    qsa('#instaDots button').forEach((dot) => dot.classList.toggle('active', Number(dot.dataset.index) === instaIndex));
    qsa('.story-bubble').forEach((item) => item.classList.toggle('active', Number(item.dataset.index) === instaIndex));
    caption.innerHTML = `<strong>@shoqantanu</strong> ${instagramSlides[instaIndex].caption}`;
  }

  qs('#instaPrev').addEventListener('click', () => showSlide(instaIndex - 1));
  qs('#instaNext').addEventListener('click', () => showSlide(instaIndex + 1));
  qsa('#instaDots button, .story-bubble').forEach((button) => button.addEventListener('click', () => showSlide(Number(button.dataset.index))));

  const phone = qs('.insta-phone');
  phone.addEventListener('mouseenter', () => clearInterval(instaTimer));
  phone.addEventListener('mouseleave', startInstaAutoPlay);

  showSlide(0);
  startInstaAutoPlay();
}

function startInstaAutoPlay() {
  clearInterval(instaTimer);
  instaTimer = setInterval(() => {
    const phone = qs('.insta-phone');
    if (!phone || phone.matches(':hover')) return;
    const next = (instaIndex + 1) % instagramSlides.length;
    const track = qs('#instaTrack');
    if (!track) return;
    track.style.transform = `translateX(-${next * 100}%)`;
    instaIndex = next;
    qsa('#instaDots button').forEach((dot) => dot.classList.toggle('active', Number(dot.dataset.index) === instaIndex));
    qsa('.story-bubble').forEach((item) => item.classList.toggle('active', Number(item.dataset.index) === instaIndex));
    qs('#instaCaptionText').innerHTML = `<strong>@shoqantanu</strong> ${instagramSlides[instaIndex].caption}`;
  }, 4200);
}

function setupBackpack() {
  const modal = qs('#itemModal');
  const title = qs('#modalTitle');
  const text = qs('#modalText');
  const close = qs('#modalClose');

  function closeModal() {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  }

  qsa('.backpack-item').forEach((item) => {
    item.addEventListener('click', () => {
      title.textContent = item.dataset.title;
      text.textContent = item.dataset.text;
      modal.classList.add('show');
      modal.setAttribute('aria-hidden', 'false');
      close.focus();
    });
  });

  close.addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModal(); });
}

function setupAudioDiary() {
  const button = qs('#listenDiary');
  const text = '1856 жылы Шоқан Ресейдің әскери-ғылыми экспедициясына қатысып, Жетісу мен Қырғыз өлкесін зерттеуге аттанды. Сол сапар кезінде ол Ыстықкөлге барып, табиғатты, халық тұрмысын және салт-дәстүрді күнделік ретінде жазып отырды.';
  button.addEventListener('click', () => {
    if (!('speechSynthesis' in window)) {
      button.textContent = 'Бұл браузерде дыбыс қолдау таппады';
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'kk-KZ';
    utterance.rate = 0.92;
    window.speechSynthesis.speak(utterance);
  });
}

function renderQuiz() {
  const quizBox = qs('#quizBox');
  quizBox.innerHTML = quizData.map((item, index) => `
    <div class="question">
      <h3>${index + 1}. ${item.question}</h3>
      ${item.options.map((option, optionIndex) => `
        <label class="option">
          <input type="radio" name="q${index}" value="${optionIndex}" />
          <span>${option}</span>
        </label>
      `).join('')}
    </div>
  `).join('');

  qs('#checkQuiz').addEventListener('click', () => {
    let score = 0;
    quizData.forEach((item, index) => {
      const checked = document.querySelector(`input[name="q${index}"]:checked`);
      if (checked && Number(checked.value) === item.answer) score += 1;
    });
    const result = qs('#quizResult');
    result.textContent = `Нәтиже: ${score} / ${quizData.length}. ${score === quizData.length ? 'Керемет! Сіз Шоқан туралы жақсы білесіз.' : 'Жақсы, бірақ күнделік бөлімін тағы бір оқып шыққан пайдалы.'}`;
  });
}

window.addEventListener('scroll', updateReadingProgress, { passive: true });
window.addEventListener('resize', () => {
  drawFallbackMap();
  if (mapInstance) setTimeout(() => mapInstance.invalidateSize(), 200);
});
window.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  revealOnScroll();
  setupMap();
  setupInstagramCarousel();
  setupBackpack();
  setupAudioDiary();
  renderQuiz();
  updateReadingProgress();
});
