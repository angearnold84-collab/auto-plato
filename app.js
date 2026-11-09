const waNumber = '2250504552364';
const arrowIcon = (direction, extraClass = '') => {
  const paths = {
    northeast: '<path d="M7 17 17 7M8 7h9v9"/>',
    down: '<path d="M12 5v14m-7-7 7 7 7-7"/>',
  };
  return `<svg class="icon-arrow ${extraClass}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths[direction]}</svg>`;
};
const vehicles = [
  {
    id:'dzire', name:'Suzuki Dzire', category:'Berlines', categoryLabel:'Berline', image:'assets/vehicles/dzire.jpg',
    price:null, priceLabel:'Prix sur demande', fuel:'Essence', transmission:'Manuelle / automatique', filterTransmission:'Manuelle / automatique', seats:'5 places',
    version:'1.2L 16V GL · BVM ou BVA', engine:'1.2L essence · détails moteur selon version', power:'Non publié sur la page consultée', consumption:'4,9 L / 100 km', dimensions:'3 995 × 1 735 × 1 515 mm', ground:'145 mm', trunk:'378 L',
    safety:'2 airbags, ABS, aide au freinage d’urgence (BAS).', comfort:'Écran HD jusqu’à 9 pouces, Apple CarPlay et Android Auto selon version; climatisation et ports USB.', warranty:'Non indiquée dans la source consultée.',
    source:'https://www.suzuki-ci.com/modeles/suzuki-dzire-cote-divoire-berline-compacte-socida/10', sourceName:'SOCIDA / Suzuki Côte d’Ivoire', sourcePdf:'https://www.suzuki-ci.com/modeles/suzuki-dzire-cote-divoire-berline-compacte-socida/10',
    summary:'Une berline compacte; deux transmissions sont mentionnées sur la page locale.'
  },
  {
    id:'vitz', name:'Toyota Vitz', category:'Citadines', categoryLabel:'Citadine', image:'assets/vehicles/vitz.png',
    price:7900000, priceLabel:'À partir de 7 900 000 FCFA', fuel:'Essence', transmission:'Manuelle', filterTransmission:'Manuelle', seats:'5 places',
    version:'1.0 Petrol LIFE · 5 vitesses', engine:'998 cm³ · 3 cylindres', power:'67 ch à 5 500 tr/min', consumption:'Non publiée dans la fiche consultée', dimensions:'3 695 × 1 655 × 1 555 mm', ground:'170 mm', trunk:'295 L',
    safety:'ABS, contrôle de trajectoire VSC, airbags conducteur, passager, latéraux et rideaux.', comfort:'Climatisation manuelle; la version indiquée est la LIFE à boîte manuelle.', warranty:'Non indiquée dans la fiche consultée.',
    source:'https://toyotacfao.com/ci/fr/model/toyota-vitz', sourceName:'Toyota by CFAO Côte d’Ivoire',
    sourcePdf:'https://toyotacfao.com/media/attachments/FP_1593_Vitz_2024%5B1.0LPetrolLIFE5-Manual_GA%5D_CFAO_fr_BD-1.pdf',
    summary:'La citadine Toyota Vitz, version essence 1.0 LIFE à boîte manuelle.'
  },
  {
    id:'rav4', name:'Toyota RAV4', category:'SUV', categoryLabel:'SUV', image:'assets/vehicles/rav4.png',
    price:27300000, priceLabel:'À partir de 27 300 000 FCFA', fuel:'Essence', transmission:'CVT', filterTransmission:'CVT', seats:'5 places',
    version:'2.0L Active CVT · 4×2', engine:'1 987 cm³ · 4 cylindres', power:'172 ch à 6 600 tr/min', consumption:'Non publiée dans la fiche consultée', dimensions:'4 600 × 1 855 × 1 675 mm', ground:'201 mm', trunk:'481 L',
    safety:'ABS, VSC, répartition électronique du freinage, aide au démarrage en côte, airbags conducteur, passager, latéraux et genoux.', comfort:'Climatisation bi-zone, écran tactile 10,5 pouces, Apple CarPlay, Android Auto, caméra arrière.', warranty:'Non indiquée dans la fiche consultée.',
    source:'https://toyotacfao.com/ci/fr/model/rav4', sourceName:'Toyota by CFAO Côte d’Ivoire',
    sourcePdf:'https://toyotacfao.com/media/attachments/FP_2255_RAV4_MXAA62L-ANXXB_C0_CFAO_fr_BD-1.pdf',
    summary:'Le SUV RAV4, version essence 2.0 Active à transmission CVT et traction 4×2.'
  },
  {
    id:'fortuner', name:'Toyota Fortuner', category:'4x4', categoryLabel:'4×4', image:'assets/vehicles/fortuner.png',
    price:41900000, priceLabel:'À partir de 41 900 000 FCFA', fuel:'Diesel', transmission:'Automatique', filterTransmission:'Automatique', seats:'7 places',
    version:'2.4L Comfort · 6 vitesses · 4×4', engine:'2 393 cm³ · diesel', power:'Non publiée sur la version consultée', consumption:'Non publiée sur la version consultée', dimensions:'4 795 × 1 855 × 1 835 mm', ground:'279 mm', trunk:'253 L',
    safety:'VSC, ABS, répartition électronique du freinage, aide au démarrage en côte et contrôle anti-louvoiement.', comfort:'Écran tactile 8 pouces, climatisation automatique bi-zone, Apple CarPlay et Android Auto.', warranty:'Non indiquée dans la fiche consultée.',
    source:'https://toyotacfao.com/ci/fr/model/fortuner', sourceName:'Toyota by CFAO Côte d’Ivoire',
    sourcePdf:'https://toyotacfao.com/media/attachments/FP_2065_Fortuner-GUN155L-SNTSXN4W_CFAO_fr_BD-1.pdf',
    summary:'Le Fortuner 2.4 diesel, version automatique à transmission intégrale 4×4.'
  },
  {
    id:'hiace', name:'Toyota Hiace Van', category:'Utilitaires', categoryLabel:'Utilitaire', image:'assets/vehicles/hiace.png',
    price:26600000, priceLabel:'À partir de 26 600 000 FCFA', fuel:'Diesel', transmission:'Manuelle', filterTransmission:'Manuelle', seats:'3 places',
    version:'2.5L VAN · 3 places · climatisation', engine:'2 494 cm³ · injection directe', power:'102 ch à 3 600 tr/min (fiche de version)', consumption:'Non publiée dans les fiches consultées', dimensions:'4 695 × 1 695 × 1 980 mm', ground:'195 mm', trunk:'Volume utile indiqué dans la fiche de version: 6 m³',
    safety:'ABS; airbags conducteur et passager indiqués selon la version.', comfort:'Climatisation manuelle; connectique USB et Bluetooth selon version.', warranty:'Non indiquée dans la fiche consultée.',
    source:'https://toyotacfao.com/ci/fr/model/hiace-van', sourceName:'Toyota by CFAO Côte d’Ivoire',
    sourcePdf:'https://www.toyota.ci/media/gamme/modeles/files/FP_1048_Hiace_CFAO_fr_BD-1.pdf',
    summary:'Le van utilitaire Hiace en version 2.5L diesel à boîte manuelle.'
  },
  {
    id:'corolla-cross-hybrid', name:'Toyota Corolla Cross Hybrid Electric', category:'Hybrides / électriques', categoryLabel:'Hybride', image:'assets/vehicles/corolla-cross-hybrid.png',
    price:31700000, priceLabel:'À partir de 31 700 000 FCFA', fuel:'Hybride essence-électrique', transmission:'CVT', filterTransmission:'CVT', seats:'5 places',
    version:'1.8L Hybrid Electric · CVT Executive', engine:'1 798 cm³ essence avec moteur électrique', power:'Non publiée dans la fiche consultée', consumption:'Non publiée dans la fiche consultée', dimensions:'4 460 × 1 825 × 1 620 mm', ground:'161 mm', trunk:'Non publié dans la fiche consultée',
    safety:'VSC, ABS, répartition électronique du freinage, aide au démarrage en côte, airbags conducteur et passager; équipements selon version.', comfort:'Écran tactile 10 pouces, Apple CarPlay, Android Auto, Bluetooth, climatisation et vitres électriques.', warranty:'Non indiquée dans la fiche consultée.',
    source:'https://toyotacfao.com/ci/fr/model/corolla-cross-HEV', sourceName:'Toyota by CFAO Côte d’Ivoire',
    sourcePdf:'https://toyotacfao.com/media/attachments/FP_2233_CorollaCrossHybridElectric-ZVG10L-EHXEBV_HH_CFAO_fr_BD-1.pdf',
    summary:'Le crossover hybride associe une motorisation essence 1.8L et un moteur électrique.'
  }
];

const categories = [
  {label:'SUV', title:'SUV', description:'Position de conduite haute et polyvalence.', image:'assets/vehicles/rav4.png', query:'SUV'},
  {label:'Berlines', title:'Berlines', description:'Confort et lignes pensées pour la route.', image:'assets/vehicles/dzire.jpg', query:'Berlines'},
  {label:'4x4', title:'4×4', description:'Une transmission intégrale pour sortir des axes.', image:'assets/vehicles/fortuner.png', query:'4x4'},
  {label:'Citadines', title:'Citadines', description:'Des formats adaptés aux trajets quotidiens.', image:'assets/vehicles/vitz.png', query:'Citadines'},
  {label:'Utilitaires', title:'Utilitaires', description:'Des véhicules dédiés aux usages professionnels.', image:'assets/vehicles/hiace.png', query:'Utilitaires'},
  {label:'Hybrides / électriques', title:'Hybrides & électriques', description:'Une motorisation associant essence et électricité.', image:'assets/vehicles/corolla-cross-hybrid.png', query:'Hybrides / électriques'}
];

const $ = (selector, root=document) => root.querySelector(selector);
const money = value => value == null ? 'Prix sur demande' : new Intl.NumberFormat('fr-FR').format(value) + ' FCFA';
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('fr');
const categoryGrid = $('#categoryGrid');
const vehicleGrid = $('#vehicleGrid');
const categoryFilter = $('#categoryFilter');
const fuelFilter = $('#fuelFilter');

categories.forEach((category, index) => {
  const card = document.createElement('a');
  card.className = 'category-card reveal';
  card.href = '#vehicules';
  card.dataset.filterCategory = category.query;
  card.innerHTML = `<img src="${category.image}" alt="${category.title}" loading="lazy"><span class="cat-number">0${index+1} / CATÉGORIE</span><div><h3>${category.title}</h3><div class="cat-caption">${category.description}</div></div>${arrowIcon('northeast', 'arrow')}`;
  card.addEventListener('click', () => { categoryFilter.value = category.query; renderVehicles(); });
  categoryGrid.append(card);
});

categories.forEach(category => categoryFilter.add(new Option(category.label, category.query)));
[...new Set(vehicles.map(car => car.fuel))].forEach(fuel => fuelFilter.add(new Option(fuel, fuel)));
vehicles.forEach(car => $('#contactVehicle').add(new Option(car.name, car.name)));

function vehicleCard(car) {
  const card = document.createElement('article');
  card.className = 'vehicle-card reveal';
  card.innerHTML = `<div class="vehicle-photo"><img src="${car.image}" alt="${car.name}" loading="lazy"><span class="vehicle-badge">${car.categoryLabel}</span></div>
    <div class="vehicle-body"><div class="vehicle-heading"><div><h3>${car.name}</h3><div class="vehicle-subtitle">${car.version}</div></div></div>
    <div class="vehicle-price"><small>Prix indicatif constructeur</small>${car.priceLabel}</div>
    <div class="vehicle-specs"><div><span>Énergie</span>${car.fuel}</div><div><span>Transmission</span>${car.transmission}</div><div><span>Places</span>${car.seats}</div></div>
    <div class="vehicle-actions"><button class="button button-outline" type="button" data-details="${car.id}">Voir la fiche technique</button>${pdfAction(car)}<a class="button button-wa" href="${whatsappUrl(car)}" target="_blank" rel="noopener">Plus d’informations ${arrowIcon('northeast')}</a></div></div>`;
  return card;
}

function renderVehicles() {
  const query = normalize($('#searchInput').value.trim());
  const category = categoryFilter.value;
  const maxPrice = Number($('#priceFilter').value) || Infinity;
  const fuel = fuelFilter.value;
  const gear = $('#gearFilter').value;
  const matches = vehicles.filter(car => {
    const text = normalize(`${car.name} ${car.category} ${car.version}`);
    return (!query || text.includes(query)) && (!category || car.category === category) &&
      (maxPrice === Infinity || (car.price != null && car.price <= maxPrice)) &&
      (!fuel || car.fuel === fuel) && (!gear || car.filterTransmission === gear);
  });
  vehicleGrid.replaceChildren(...matches.map(vehicleCard));
  $('#resultCount').textContent = `${matches.length} véhicule${matches.length > 1 ? 's' : ''} affiché${matches.length > 1 ? 's' : ''}`;
  matches.forEach((_, i) => observeReveal(vehicleGrid.children[i]));
  vehicleGrid.querySelectorAll('[data-details]').forEach(button => button.addEventListener('click', () => showVehicle(button.dataset.details)));
  vehicleGrid.querySelectorAll('[data-print]').forEach(button => button.addEventListener('click', createDzirePdf));
  scheduleFloatingWhatsAppCheck();
}

function whatsappUrl(car) {
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(`Bonjour Auto-Plato, je souhaite des informations sur le/la ${car.name}.`)}`;
}

function pdfAction(car) {
  if (car.id === 'dzire') return `<button class="button button-outline" type="button" data-print="${car.id}">Créer la fiche PDF ${arrowIcon('down')}</button>`;
  return `<a class="button button-outline" href="${car.sourcePdf}" target="_blank" rel="noopener">Télécharger le PDF ${arrowIcon('northeast')}</a>`;
}

function createDzirePdf() {
  const car = vehicles.find(item => item.id === 'dzire');
  const printWindow = window.open('', '_blank');
  if (!printWindow) return;
  const imageUrl = new URL(car.image, new URL('.', window.location.href)).href;
  printWindow.document.write(`<!doctype html><html lang="fr"><head><meta charset="utf-8"><base href="${new URL('.', window.location.href).href}"><title>Fiche modèle — Suzuki Dzire — Auto-Plato</title><style>
    @page{size:A4;margin:16mm}*{box-sizing:border-box}body{font-family:Arial,sans-serif;color:#171717;margin:0;font-size:11px}header{display:flex;align-items:center;justify-content:space-between;border-bottom:2px solid #c5a45f;padding-bottom:10px}header strong{font-size:17px;letter-spacing:.06em}header small{color:#777}.photo{height:210px;display:flex;align-items:center;justify-content:center;background:#101112;margin:16px 0}.photo img{max-height:200px;max-width:100%;object-fit:contain}.intro h1{font-size:24px;margin:0 0 3px}.intro p{color:#666;margin:0 0 14px}.grid{display:grid;grid-template-columns:1fr 1fr;gap:7px}.row{border:1px solid #ddd;padding:8px}.row span{display:block;color:#9a7732;font-size:8px;text-transform:uppercase;margin-bottom:3px}.row strong{font-weight:600}.note{font-size:9px;line-height:1.5;color:#666;margin:14px 0}a{color:#5e4b25;word-break:break-all}button{background:#c5a45f;border:0;padding:10px 15px;font-weight:bold;cursor:pointer}@media print{button{display:none}}
    </style></head><body><header><strong>AUTO-PLATO</strong><small>FICHE MODÈLE · BERLINE</small></header><div class="photo"><img src="${imageUrl}" alt="Suzuki Dzire"></div><div class="intro"><h1>Suzuki Dzire</h1><p>${car.version} · ${car.priceLabel}</p></div><div class="grid">${[['Motorisation',car.engine],['Carburant',car.fuel],['Transmission',car.transmission],['Puissance',car.power],['Consommation',car.consumption],['Dimensions',car.dimensions],['Garde au sol',car.ground],['Coffre',car.trunk],['Places',car.seats],['Sécurité',car.safety],['Confort',car.comfort],['Garantie',car.warranty]].map(([label,value])=>`<div class="row"><span>${label}</span><strong>${value}</strong></div>`).join('')}</div><p class="note">Synthèse établie à partir des informations publiques de <a href="${car.source}">${car.sourceName}</a>. Les équipements peuvent varier selon version. Prix, disponibilité et caractéristiques sont à confirmer auprès du vendeur. Cette fiche n’est pas une brochure officielle Suzuki.</p><button onclick="window.print()">Imprimer / enregistrer en PDF</button><script>window.addEventListener('load',()=>setTimeout(()=>window.print(),350));<\/script></body></html>`);
  printWindow.document.close();
}

function showVehicle(id) {
  const car = vehicles.find(item => item.id === id);
  if (!car) return;
  const dialog = $('#vehicleDialog');
  const detailRows = [
    ['Catégorie', car.categoryLabel], ['Prix', car.priceLabel], ['Version consultée', car.version],
    ['Motorisation', car.engine], ['Puissance', car.power], ['Carburant', car.fuel], ['Transmission', car.transmission],
    ['Consommation', car.consumption], ['Dimensions', car.dimensions], ['Garde au sol', car.ground],
    ['Coffre / volume utile', car.trunk], ['Places', car.seats], ['Sécurité', car.safety],
    ['Confort', car.comfort], ['Garantie', car.warranty]
  ];
  $('#dialogContent').innerHTML = `<div class="dialog-content"><div class="dialog-photo"><img src="${car.image}" alt="${car.name}"></div><div class="dialog-copy"><p class="eyebrow"><span></span> Fiche modèle · ${car.categoryLabel}</p><h2 id="dialogTitle">${car.name}</h2><p>${car.summary}</p><div class="detail-grid">${detailRows.map(([label,value]) => `<div class="detail-cell"><span>${label}</span><strong>${value}</strong></div>`).join('')}</div><p class="dialog-source">Prix et caractéristiques repris de la fiche publique de <a href="${car.source}" target="_blank" rel="noopener">${car.sourceName} ${arrowIcon('northeast')}</a>. Disponibilité, version et tarif à confirmer. Auto-Plato n’est pas présenté comme distributeur officiel de ces marques.</p><div class="dialog-actions">${car.id === 'dzire' ? `<button class="button button-gold" type="button" data-print="${car.id}">Créer la fiche PDF ${arrowIcon('down')}</button>` : `<a class="button button-gold" href="${car.sourcePdf}" target="_blank" rel="noopener">Télécharger la fiche PDF ${arrowIcon('northeast')}</a>`}<a class="button button-wa" href="${whatsappUrl(car)}" target="_blank" rel="noopener">Plus d’informations ${arrowIcon('northeast')}</a></div></div></div>`;
  dialog.showModal();
  dialog.querySelectorAll('[data-print]').forEach(button => button.addEventListener('click', createDzirePdf));
}

$('#dialogClose').addEventListener('click', () => $('#vehicleDialog').close());
$('#vehicleDialog').addEventListener('click', event => { if (event.target === $('#vehicleDialog')) $('#vehicleDialog').close(); });
$('#searchInput').addEventListener('input', renderVehicles);
['categoryFilter','priceFilter','fuelFilter','gearFilter'].forEach(id => $(`#${id}`).addEventListener('change', renderVehicles));
$('#resetFilters').addEventListener('click', () => { $('#searchInput').value=''; categoryFilter.value=''; $('#priceFilter').value=''; fuelFilter.value=''; $('#gearFilter').value=''; renderVehicles(); });

$('#contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = `Bonjour Auto-Plato, je m'appelle ${data.get('name')} (${data.get('phone')}). Véhicule souhaité : ${data.get('vehicle') || 'à définir'}. Message : ${data.get('message')}`;
  window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

const menuToggle = $('#menuToggle');
const mainNav = $('#mainNav');
const siteHeader = $('.header');
const updateHeaderAppearance = () => siteHeader.classList.toggle('is-scrolled', window.scrollY > 24);
updateHeaderAppearance();
window.addEventListener('scroll', updateHeaderAppearance, { passive: true });
const floatingWhatsApp = $('.whatsapp-float');
let floatCheckScheduled = false;
let floatCheckTimer;
function scheduleFloatingWhatsAppCheck() {
  if (floatCheckScheduled) return;
  floatCheckScheduled = true;
  requestAnimationFrame(() => {
    floatCheckScheduled = false;
    if (!window.matchMedia('(max-width: 700px)').matches) {
      floatingWhatsApp.classList.remove('is-obscured');
      return;
    }
    const floatRect = floatingWhatsApp.getBoundingClientRect();
    const collides = [...document.querySelectorAll('main a:not(.whatsapp-float), main button, main input, main select, main textarea, main h1, main h2, main h3, main p, main img, main .vehicle-price, main .vehicle-specs')]
      .some(element => {
        const style = getComputedStyle(element);
        if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) === 0) return false;
        const rect = element.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0 && rect.right > floatRect.left && rect.left < floatRect.right && rect.bottom > floatRect.top && rect.top < floatRect.bottom;
      });
    floatingWhatsApp.classList.toggle('is-obscured', collides);
  });
}
function queueFloatingWhatsAppCheck() {
  if (window.matchMedia('(max-width: 700px)').matches) floatingWhatsApp.classList.add('is-obscured');
  window.clearTimeout(floatCheckTimer);
  floatCheckTimer = window.setTimeout(scheduleFloatingWhatsAppCheck, 140);
}
window.addEventListener('scroll', queueFloatingWhatsAppCheck, { passive: true });
window.addEventListener('resize', scheduleFloatingWhatsAppCheck, { passive: true });
scheduleFloatingWhatsAppCheck();
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  mainNav.classList.toggle('open', !expanded);
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open'); menuToggle.setAttribute('aria-expanded','false');
}));

let revealObserver;
function observeReveal(element) {
  if (!element || element.dataset.observed) return;
  element.dataset.observed = 'true';
  if (revealObserver) revealObserver.observe(element); else element.classList.add('is-visible');
}
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
  }), {threshold:.12});
  document.querySelectorAll('.reveal').forEach(observeReveal);
} else document.querySelectorAll('.reveal').forEach(element => element.classList.add('is-visible'));

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('reduce-motion');
  const backgroundVideo = $('#siteVideo');
  if (backgroundVideo) backgroundVideo.pause();
}

renderVehicles();
