/* ===== IRONFORGE — script.js ===== */

// ===== DATA =====
const gymProducts = [
  {
    id: 'g1', name: 'Commercial Treadmill Pro', emoji: '🏃', category: 'cardio',
    desc: 'Heavy-duty commercial treadmill with 4.0 HP motor, 22" belt, and 20 incline levels.',
    price: '₹1,45,000', oldPrice: '₹1,80,000',
    tag: 'Best Seller',
    specs: [
      { label: 'Motor', value: '4.0 HP DC' },
      { label: 'Max Speed', value: '20 km/h' },
      { label: 'Belt Size', value: '22" × 60"' },
      { label: 'Max Weight', value: '180 kg' },
      { label: 'Incline', value: '0–20 levels' },
      { label: 'Warranty', value: '5 years' },
    ],
    fullDesc: 'Engineered for commercial fitness centers, this professional-grade treadmill features an ultra-quiet 4.0 HP DC motor, a wide cushioned belt, heart rate monitoring, Bluetooth audio, and an intuitive console with 30+ pre-set programs.'
  },
  {
    id: 'g2', name: 'Olympic Power Rack', emoji: '🏋️', category: 'strength',
    desc: '900kg load capacity power rack with pull-up bar, J-hooks, and safety spotter arms.',
    price: '₹62,000', oldPrice: '₹75,000',
    tag: null,
    specs: [
      { label: 'Load Capacity', value: '900 kg' },
      { label: 'Steel', value: '11-gauge' },
      { label: 'Height', value: '240 cm' },
      { label: 'Depth', value: '122 cm' },
      { label: 'Pull-up Bar', value: 'Multi-grip' },
      { label: 'Warranty', value: '10 years' },
    ],
    fullDesc: 'Built from 11-gauge steel with a heavy powder-coat finish, this power rack handles any training style — squats, bench press, deadlifts, pull-ups. Includes numbered uprights, dual-function J-hooks, and reversible spotter arms.'
  },
  {
    id: 'g3', name: 'Cable Crossover Machine', emoji: '⚙️', category: 'functional',
    desc: 'Dual-stack 100kg cable crossover machine with 19 height positions and lat pulldown.',
    price: '₹98,000', oldPrice: '₹1,20,000',
    tag: 'Popular',
    specs: [
      { label: 'Weight Stack', value: '2 × 100 kg' },
      { label: 'Positions', value: '19 adjustable' },
      { label: 'Cable', value: '7mm aircraft' },
      { label: 'Pulleys', value: 'Sealed bearing' },
      { label: 'Footprint', value: '210 × 115 cm' },
      { label: 'Warranty', value: '5 years' },
    ],
    fullDesc: 'Deliver functional strength and muscle isolation training with this dual-stack cable crossover. Features 19-position height adjustments, aircraft-grade cables, sealed bearing pulleys, and a built-in lat pulldown bar for complete upper-body versatility.'
  },
  {
    id: 'g4', name: 'Elliptical Trainer Elite', emoji: '🔄', category: 'cardio',
    desc: 'Low-impact commercial elliptical with 25kg flywheel and 32 resistance levels.',
    price: '₹88,500', oldPrice: '₹1,05,000',
    tag: null,
    specs: [
      { label: 'Flywheel', value: '25 kg' },
      { label: 'Resistance', value: '32 magnetic' },
      { label: 'Stride', value: '50 cm' },
      { label: 'Max Weight', value: '160 kg' },
      { label: 'Programs', value: '30 pre-set' },
      { label: 'Warranty', value: '5 years' },
    ],
    fullDesc: 'The Elite Elliptical combines smooth natural stride motion with a 25kg flywheel for momentum that feels as natural as running — without the joint impact. Dual-direction capability for varied muscle activation.'
  },
  {
    id: 'g5', name: 'Hex Dumbbell Set (5–50kg)', emoji: '🏋️‍♂️', category: 'strength',
    desc: 'Full set of rubber-coated hex dumbbells from 5kg to 50kg with 3-tier storage rack.',
    price: '₹1,22,000', oldPrice: '₹1,50,000',
    tag: 'Bundle Deal',
    specs: [
      { label: 'Range', value: '5 kg to 50 kg' },
      { label: 'Pairs', value: '10 pairs' },
      { label: 'Coating', value: 'Rubber hex' },
      { label: 'Handles', value: 'Chrome knurled' },
      { label: 'Rack Tiers', value: '3-tier A-frame' },
      { label: 'Warranty', value: '3 years' },
    ],
    fullDesc: 'A complete dumbbell set with rubber hex heads to prevent rolling, reduce floor damage, and absorb impact. Ergonomic knurled chrome handles ensure a secure grip. Paired with a 3-tier A-frame rack for organized storage.'
  },
  {
    id: 'g6', name: 'Smith Machine Combo', emoji: '🔩', category: 'functional',
    desc: 'Counter-balanced Smith machine with 7-degree bar path and integrated cable station.',
    price: '₹1,75,000', oldPrice: '₹2,10,000',
    tag: 'Pro Choice',
    specs: [
      { label: 'Bar Path', value: '7° angled' },
      { label: 'Bar Weight', value: 'Counterbalanced' },
      { label: 'Cable Stack', value: '80 kg' },
      { label: 'Safety Locks', value: '24 positions' },
      { label: 'Max Load', value: '400 kg' },
      { label: 'Warranty', value: '7 years' },
    ],
    fullDesc: 'This dual-function machine combines a precision-engineered counter-balanced Smith machine with an integrated functional trainer cable station — delivering complete upper and lower body training in one footprint.'
  },
];

const homeProducts = [
  {
    id: 'h1', name: 'Adjustable Dumbbell Set', emoji: '💪', category: 'compact',
    desc: 'Quick-adjust dumbbells from 2–24kg per hand. Replaces 15 pairs in seconds.',
    price: '₹18,500', oldPrice: '₹24,000',
    tag: 'Space Saver',
    specs: [
      { label: 'Range', value: '2 to 24 kg' },
      { label: 'Increments', value: '2 kg steps' },
      { label: 'Adjust Time', value: '<3 seconds' },
      { label: 'Length', value: '39 cm' },
      { label: 'Replaces', value: '15 dumbbell pairs' },
      { label: 'Warranty', value: '3 years' },
    ],
    fullDesc: 'The ultimate space-saving solution. A simple dial mechanism selects your weight in under 3 seconds. The compact storage tray neatly holds the unused weight plates, keeping your home gym tidy and organized.'
  },
  {
    id: 'h2', name: 'Folding Treadmill Compact', emoji: '🏃‍♀️', category: 'cardio',
    desc: 'Compact folding treadmill with 2.5HP motor, 16km/h speed, and under-desk mode.',
    price: '₹32,000', oldPrice: '₹42,000',
    tag: 'Best for Home',
    specs: [
      { label: 'Motor', value: '2.5 HP' },
      { label: 'Max Speed', value: '16 km/h' },
      { label: 'Folded Size', value: '160 × 67 × 15 cm' },
      { label: 'Max Weight', value: '120 kg' },
      { label: 'Desk Mode', value: '1–6 km/h' },
      { label: 'Warranty', value: '3 years' },
    ],
    fullDesc: 'Designed for home use, this compact treadmill folds flat in seconds and can even be used under a standing desk. Quiet enough for apartments, with a noise level under 60dB and automatic speed adjustment via remote.'
  },
  {
    id: 'h3', name: 'Home Multi-Station Gym', emoji: '🏠', category: 'compact',
    desc: 'All-in-one 8-function home gym with lat pulldown, chest press, and cable rows.',
    price: '₹55,000', oldPrice: '₹68,000',
    tag: null,
    specs: [
      { label: 'Functions', value: '8 stations' },
      { label: 'Weight Stack', value: '75 kg' },
      { label: 'Users', value: 'Multi-user' },
      { label: 'Footprint', value: '210 × 110 cm' },
      { label: 'Height', value: '210 cm' },
      { label: 'Warranty', value: '5 years' },
    ],
    fullDesc: 'A complete home fitness solution in one compact machine. Train your entire body with dedicated stations for chest, back, shoulders, arms, and legs. The 75kg weight stack and aircraft-grade cables deliver smooth resistance throughout.'
  },
  {
    id: 'h4', name: 'Pull-Up & Dip Station', emoji: '🤸', category: 'bodyweight',
    desc: 'Freestanding heavy-duty pull-up bar and dip station with multiple grip positions.',
    price: '₹8,900', oldPrice: '₹12,000',
    tag: 'No Drill',
    specs: [
      { label: 'Max Weight', value: '150 kg' },
      { label: 'Grips', value: 'Wide / Narrow / Neutral' },
      { label: 'Assembly', value: 'Tool-free' },
      { label: 'Height', value: 'Adjustable' },
      { label: 'Material', value: 'Heavy steel' },
      { label: 'Warranty', value: '2 years' },
    ],
    fullDesc: 'No drilling required. This freestanding power tower offers multiple grip positions for pull-ups, chin-ups, and dips. Build upper body strength using only your bodyweight. Foam-padded handles for comfort during extended sets.'
  },
  {
    id: 'h5', name: 'Exercise Bike Magnetic', emoji: '🚴', category: 'cardio',
    desc: 'Whisper-quiet magnetic resistance exercise bike with 24 resistance levels and tablet holder.',
    price: '₹14,500', oldPrice: '₹19,000',
    tag: 'Quiet Drive',
    specs: [
      { label: 'Resistance', value: '24 magnetic' },
      { label: 'Flywheel', value: '14 kg' },
      { label: 'Max Weight', value: '130 kg' },
      { label: 'Noise Level', value: '<45 dB' },
      { label: 'Display', value: 'LCD backlit' },
      { label: 'Warranty', value: '3 years' },
    ],
    fullDesc: 'Achieve intense cardio sessions without disturbing anyone in your household. The magnetic resistance system operates in near silence, making it ideal for apartments. Features a fully adjustable seat and handlebars for ergonomic positioning.'
  },
  {
    id: 'h6', name: 'Resistance Band Pro Set', emoji: '🔗', category: 'bodyweight',
    desc: 'Premium fabric + latex resistance band set (5 bands, 5–80kg) with door anchor & handles.',
    price: '₹2,200', oldPrice: '₹3,500',
    tag: 'Portable',
    specs: [
      { label: 'Bands', value: '5 levels' },
      { label: 'Resistance', value: '5 to 80 kg' },
      { label: 'Material', value: 'Fabric & Latex' },
      { label: 'Accessories', value: 'Door anchor, handles' },
      { label: 'Use', value: 'Home / Travel' },
      { label: 'Warranty', value: '1 year' },
    ],
    fullDesc: 'The most versatile fitness accessory you can own. Five progressive resistance levels allow for a full range of exercises from rehabilitation to heavy strength training. Fits in a bag — train anywhere.'
  },
];

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCursor();
  initNavbar();
  initHamburger();
  renderProducts('gymGrid', gymProducts);
  renderProducts('homeGrid', homeProducts);
  initFilters();
  initStats();
  initTestimonials();
  initModal();
  initContactForm();
  initReveal();
  initBackToTop();
});

// ===== LOADER =====
function initLoader() {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 2000);
}

// ===== CURSOR =====
function initCursor() {
  const cursor = document.querySelector('.cursor');
  const follower = document.querySelector('.cursor-follower');
  if (!cursor || !follower) return;

  let fx = 0, fy = 0, tx = 0, ty = 0;

  document.addEventListener('mousemove', e => {
    tx = e.clientX;
    ty = e.clientY;
    cursor.style.left = tx + 'px';
    cursor.style.top = ty + 'px';
  });

  function animateFollower() {
    fx += (tx - fx) * 0.12;
    fy += (ty - fy) * 0.12;
    follower.style.left = fx + 'px';
    follower.style.top = fy + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  // Scale on interactive elements
  const interactives = document.querySelectorAll('a, button, .product-card, .cat-card');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(2)';
      follower.style.transform = 'translate(-50%,-50%) scale(1.5)';
      follower.style.opacity = '0.25';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
      follower.style.transform = 'translate(-50%,-50%) scale(1)';
      follower.style.opacity = '0.5';
    });
  });
}

// ===== NAVBAR =====
function initNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ===== HAMBURGER =====
function initHamburger() {
  const burger = document.querySelector('.hamburger');
  const menu = document.getElementById('mobileMenu');
  if (!burger || !menu) return;

  burger.addEventListener('click', () => {
    menu.classList.toggle('open');
    const spans = burger.querySelectorAll('span');
    if (menu.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  menu.querySelectorAll('.mob-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      burger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });
}

// ===== RENDER PRODUCTS =====
function renderProducts(gridId, data) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  grid.innerHTML = data.map(p => `
    <div class="product-card reveal" data-cat="${p.category}" data-id="${p.id}" data-type="${gridId}">
      <div class="product-img">
        ${p.tag ? `<div class="product-tag">${p.tag}</div>` : ''}
        ${p.emoji}
      </div>
      <div class="product-body">
        <div class="product-cat">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-footer">
          <div class="product-price">
            ${p.price}
            ${p.oldPrice ? `<span>${p.oldPrice}</span>` : ''}
          </div>
          <button class="product-btn" data-id="${p.id}" data-type="${gridId}">View Details</button>
        </div>
      </div>
    </div>
  `).join('');

  // Bind detail buttons
  grid.querySelectorAll('.product-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      const type = btn.dataset.type;
      openModal(id, type);
    });
  });

  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      openModal(card.dataset.id, card.dataset.type);
    });
  });
}

// ===== FILTERS =====
function initFilters() {
  const sections = [
    { bar: document.querySelector('#gym-eq .filter-bar'), grid: 'gymGrid', data: gymProducts },
    { bar: document.querySelector('#home-eq .filter-bar'), grid: 'homeGrid', data: homeProducts },
  ];

  sections.forEach(({ bar, grid, data }) => {
    if (!bar) return;
    bar.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.cat;
        const gridEl = document.getElementById(grid);
        gridEl.querySelectorAll('.product-card').forEach(card => {
          if (cat === 'all' || card.dataset.cat === cat) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  });
}

// ===== ANIMATED STATS =====
function initStats() {
  const nums = document.querySelectorAll('.stat-num');
  let started = false;

  function startCount() {
    if (started) return;
    const heroRect = document.querySelector('#hero').getBoundingClientRect();
    if (heroRect.top < window.innerHeight) {
      started = true;
      nums.forEach(el => {
        const target = parseInt(el.dataset.target);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = Math.floor(current).toLocaleString('en-IN');
        }, 16);
      });
    }
  }

  window.addEventListener('scroll', startCount);
  startCount();
}

// ===== TESTIMONIALS SLIDER =====
function initTestimonials() {
  const track = document.getElementById('testimonialTrack');
  const dotsContainer = document.getElementById('testiDots');
  if (!track || !dotsContainer) return;

  const cards = track.querySelectorAll('.testi-card');
  let current = 0;
  const total = cards.length;
  const visible = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1;

  // Create dots
  const totalDots = Math.ceil(total / visible);
  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement('div');
    dot.classList.add('testi-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  }

  function goTo(index) {
    current = index;
    const cardWidth = cards[0].offsetWidth + 24;
    track.style.transform = `translateX(-${current * cardWidth * visible}px)`;
    dotsContainer.querySelectorAll('.testi-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  // Auto-advance
  setInterval(() => {
    const next = (current + 1) % totalDots;
    goTo(next);
  }, 4000);
}

// ===== MODAL =====
function initModal() {
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(id, type) {
  const data = type === 'gymGrid' ? gymProducts : homeProducts;
  const product = data.find(p => p.id === id);
  if (!product) return;

  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <div class="modal-img">${product.emoji}</div>
    <div class="modal-label">${product.category} Equipment</div>
    <div class="modal-title">${product.name}</div>
    <div class="modal-desc">${product.fullDesc}</div>
    <div class="modal-specs">
      ${product.specs.map(s => `
        <div class="spec-item">
          <span>${s.label}</span>
          <strong>${s.value}</strong>
        </div>
      `).join('')}
    </div>
    <div class="modal-price-row">
      <div class="modal-price">${product.price}</div>
      <a href="#contact" class="btn-primary" onclick="closeModal()">Get Quote</a>
    </div>
  `;

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
window.closeModal = closeModal;

// ===== CONTACT FORM =====
function initContactForm() {
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.btn-primary');
    btn.textContent = 'Sending...';
    btn.style.opacity = '0.7';

    setTimeout(() => {
      btn.textContent = 'Send Message →';
      btn.style.opacity = '1';
      success.classList.add('show');
      form.reset();
      setTimeout(() => success.classList.remove('show'), 5000);
    }, 1500);
  });
}

// ===== REVEAL ON SCROLL =====
function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

// ===== BACK TO TOP =====
function initBackToTop() {
  const btn = document.getElementById('backTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== RE-INIT REVEAL AFTER RENDER =====
setTimeout(() => {
  const elements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  elements.forEach(el => observer.observe(el));
}, 500);
