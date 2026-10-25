/**
 * LÓGICA INTERACTIVA DEL PORTAFOLIO & DOSSIER MUSICAL
 * Ricardo Villarreal Muñoz
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  renderVideos("todos");
  setupVideoFilters();
  renderServices();
  renderPhotos();
  renderDossier();
  renderSocialsHub();
  initQuoteBuilder();
  initModals();
});

/* ==========================================================================
   ICONOS SVG REUTILIZABLES
   ========================================================================== */
const ICONS = {
  play: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.126.556 4.124 1.535 5.86l-1.535 5.605 5.749-1.508c1.693.922 3.633 1.447 5.696 1.447 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
  tiktok: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02l5.75-3.27-5.75-3.27v6.54z"/></svg>`,
  rings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="26" height="26"><circle cx="9" cy="14" r="5"></circle><circle cx="15" cy="14" r="5"></circle><path d="M12 5l2 2-2 2-2-2 2-2z"></path></svg>`,
  briefcase: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="26" height="26"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
  sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="26" height="26"><path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3z"></path></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`
};

/* ==========================================================================
   NAVEGACIÓN MÓVIL Y ENLACES DIRECTOS
   ========================================================================== */
function initNavigation() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => navLinks.classList.remove("open"));
    });
  }

  // Botón de Showreel en Hero
  const heroShowreelBtn = document.getElementById("heroShowreelPreview");
  if (heroShowreelBtn && PORTFOLIO_CONFIG.videos.length > 0) {
    heroShowreelBtn.addEventListener("click", () => {
      openVideoModal(PORTFOLIO_CONFIG.videos[0]);
    });
  }

  // Botón Imprimir / Descargar Dossier PDF
  const printBtns = document.querySelectorAll(".js-print-dossier");
  printBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.print();
    });
  });
}

/* ==========================================================================
   RENDERIZADO DE VIDEOS EN CLOUD (CLOUDINARY / YOUTUBE)
   ========================================================================== */
function renderVideos(category = "todos") {
  const grid = document.getElementById("videoGrid");
  if (!grid) return;

  const filtered =
    category === "todos"
      ? PORTFOLIO_CONFIG.videos
      : PORTFOLIO_CONFIG.videos.filter((v) => v.category === category);

  grid.innerHTML = filtered
    .map(
      (video) => `
      <article class="video-card ${video.aspect === "9:16" ? "aspect-vertical" : ""}">
        <div class="video-thumb-wrapper" data-video-id="${video.id}">
          <img src="${video.posterUrl}" alt="${video.title}" loading="lazy" />
          <div class="video-thumb-overlay">
            <div class="video-play-icon" aria-label="Reproducir video">
              ${ICONS.play}
            </div>
          </div>
          <span class="video-category-pill">${video.categoryLabel}</span>
          <span class="video-duration-pill">${video.duration || "HD"}</span>
        </div>
        <div class="video-card-body">
          <div>
            <h3 class="video-card-title">${video.title}</h3>
            <p class="video-card-desc">${video.description}</p>
          </div>
          <div class="video-card-footer">
            <button type="button" class="video-watch-link" data-video-id="${video.id}">
              Reproducir Video ${ICONS.arrowRight}
            </button>
            <a href="#cotizar" class="video-quote-trigger" data-video-title="${video.title}" style="color: var(--text-secondary); font-size: 0.8rem;">
              Cotizar este show
            </a>
          </div>
        </div>
      </article>
    `
    )
    .join("");

  // Eventos para abrir modal de video
  grid.querySelectorAll("[data-video-id]").forEach((el) => {
    el.addEventListener("click", () => {
      const vidId = el.getAttribute("data-video-id");
      const videoObj = PORTFOLIO_CONFIG.videos.find((v) => v.id === vidId);
      if (videoObj) openVideoModal(videoObj);
    });
  });
}

function setupVideoFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderVideos(category);
    });
  });
}

/* ==========================================================================
   RENDERIZADO DE SERVICIOS PARA EVENTOS
   ========================================================================== */
function renderServices() {
  const container = document.getElementById("servicesGrid");
  if (!container) return;

  container.innerHTML = PORTFOLIO_CONFIG.services
    .map(
      (srv) => `
      <div class="service-card">
        <div>
          <div class="service-icon-box">
            ${ICONS[srv.icon] || ICONS.sparkles}
          </div>
          <h3 class="service-title">${srv.title}</h3>
          <p class="service-subtitle">${srv.subtitle}</p>
          <p class="service-desc">${srv.description}</p>
          <ul class="service-features">
            ${srv.features
              .map((feat) => `<li>${ICONS.check}<span>${feat}</span></li>`)
              .join("")}
          </ul>
        </div>
        <button type="button" class="btn btn-outline js-select-service" data-event-type="${srv.eventTypeValue}" style="width: 100%;">
          Cotizar ${srv.title.split("&")[0].trim()} por WhatsApp
        </button>
      </div>
    `
    )
    .join("");

  // Al hacer clic en un formato de servicio, preselecciona en el cotizador y hace scroll
  container.querySelectorAll(".js-select-service").forEach((btn) => {
    btn.addEventListener("click", () => {
      const eventType = btn.getAttribute("data-event-type");
      const selectEl = document.getElementById("quoteEventType");
      if (selectEl && eventType) {
        selectEl.value = eventType;
        selectEl.dispatchEvent(new Event("input"));
      }
      const contactSection = document.getElementById("cotizar");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

/* ==========================================================================
   RENDERIZADO DE GALERÍA FOTOGRÁFICA
   ========================================================================== */
function renderPhotos() {
  const grid = document.getElementById("photoGrid");
  if (!grid) return;

  grid.innerHTML = PORTFOLIO_CONFIG.photos
    .map(
      (photo) => `
      <div class="photo-item" data-photo-url="${photo.url}" data-photo-title="${photo.title}">
        <img src="${photo.url}" alt="${photo.title} - Ricardo Villarreal Muñoz" loading="lazy" />
        <div class="photo-caption">
          <span>${photo.category}</span>
          <h4>${photo.title}</h4>
        </div>
      </div>
    `
    )
    .join("");

  grid.querySelectorAll(".photo-item").forEach((item) => {
    item.addEventListener("click", () => {
      openPhotoModal(
        item.getAttribute("data-photo-url"),
        item.getAttribute("data-photo-title")
      );
    });
  });
}

/* ==========================================================================
   RENDERIZADO DE DOSSIER ARTÍSTICO & REPERTORIO
   ========================================================================== */
function renderDossier() {
  const bioContainer = document.getElementById("dossierBio");
  const riderContainer = document.getElementById("dossierRider");
  const repContainer = document.getElementById("repertoireGrid");

  if (bioContainer) {
    bioContainer.innerHTML = PORTFOLIO_CONFIG.artist.bio
      .map((paragraph) => `<p>${paragraph}</p>`)
      .join("");
  }

  if (riderContainer) {
    riderContainer.innerHTML = PORTFOLIO_CONFIG.artist.technicalRider
      .map((item) => `<li>${item}</li>`)
      .join("");
  }

  if (repContainer) {
    repContainer.innerHTML = PORTFOLIO_CONFIG.repertoire
      .map(
        (rep) => `
        <div class="repertoire-box">
          <h5>${rep.genre}</h5>
          <p>${rep.description}</p>
          <small><strong>Referentes:</strong> ${rep.examples}</small>
        </div>
      `
      )
      .join("");
  }
}

/* ==========================================================================
   RENDERIZADO DE REDES SOCIALES (INSTAGRAM, TIKTOK, FACEBOOK, YOUTUBE)
   ========================================================================== */
function renderSocialsHub() {
  const grid = document.getElementById("socialsGrid");
  if (!grid) return;

  const platforms = [
    { key: "instagram", icon: ICONS.instagram },
    { key: "tiktok", icon: ICONS.tiktok },
    { key: "facebook", icon: ICONS.facebook },
    { key: "youtube", icon: ICONS.youtube }
  ];

  grid.innerHTML = platforms
    .map(({ key, icon }) => {
      const item = PORTFOLIO_CONFIG.socials[key];
      if (!item) return "";
      return `
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="social-card">
          <div>
            <div class="social-card-header">
              <div class="social-platform-icon">${icon}</div>
              <div>
                <h4>${item.label}</h4>
                <span class="handle">${item.handle}</span>
              </div>
            </div>
            <p style="margin-top: 1rem;">${item.description}</p>
          </div>
          <span class="social-card-link">
            Visitar ${item.label} ${ICONS.arrowRight}
          </span>
        </a>
      `;
    })
    .join("");
}

/* ==========================================================================
   COTIZADOR INTELIGENTE HACIA WHATSAPP (+56979296731)
   ========================================================================== */
function initQuoteBuilder() {
  const form = document.getElementById("whatsappQuoteForm");
  const nameInput = document.getElementById("quoteName");
  const typeInput = document.getElementById("quoteEventType");
  const dateInput = document.getElementById("quoteDate");
  const locationInput = document.getElementById("quoteLocation");
  const detailsInput = document.getElementById("quoteDetails");
  const previewText = document.getElementById("waMessagePreview");

  if (!form) return;

  function buildMessage() {
    const name = nameInput.value.trim();
    const eventType = typeInput.value;
    const date = dateInput.value;
    const location = locationInput.value.trim();
    const details = detailsInput.value.trim();

    let msg = `¡Hola Ricardo! `;
    if (name) {
      msg += `Soy ${name}. `;
    }
    msg += `Vi tu portafolio web y me gustaría cotizar música en vivo para un *${eventType}*`;

    if (date) {
      msg += ` el día *${date}*`;
    }
    if (location) {
      msg += ` en *${location}*`;
    }
    msg += `.`;

    if (details) {
      msg += ` Detalles adicionales: ${details}`;
    }

    if (previewText) {
      previewText.textContent = `"${msg}"`;
    }
    return msg;
  }

  [nameInput, typeInput, dateInput, locationInput, detailsInput].forEach(
    (input) => {
      if (input) {
        input.addEventListener("input", buildMessage);
      }
    }
  );

  // Inicializar vista previa
  buildMessage();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = buildMessage();
    const waUrl = `https://wa.me/${PORTFOLIO_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  });
}

/* ==========================================================================
   MODALES LIGHTBOX (VIDEOS CLOUD & FOTOS)
   ========================================================================== */
function initModals() {
  const backdrop = document.getElementById("mediaModal");
  const closeBtn = document.getElementById("closeModalBtn");

  if (!backdrop) return;

  const closeModal = () => {
    backdrop.classList.remove("open");
    const container = document.getElementById("modalMediaContainer");
    if (container) container.innerHTML = "";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && backdrop.classList.contains("open")) {
      closeModal();
    }
  });
}

function openVideoModal(video) {
  const backdrop = document.getElementById("mediaModal");
  const modalBox = document.getElementById("modalContentBox");
  const container = document.getElementById("modalMediaContainer");
  const titleEl = document.getElementById("modalMediaTitle");

  if (!backdrop || !container) return;

  if (video.aspect === "9:16") {
    modalBox.classList.add("vertical-modal");
  } else {
    modalBox.classList.remove("vertical-modal");
  }

  titleEl.textContent = video.title;

  if (video.type === "youtube") {
    // Soporta ID de YouTube o URL completa
    let ytId = video.videoUrl;
    if (ytId.includes("v=")) {
      ytId = ytId.split("v=")[1].split("&")[0];
    } else if (ytId.includes("youtu.be/")) {
      ytId = ytId.split("youtu.be/")[1].split("?")[0];
    }
    container.innerHTML = `
      <iframe
        src="https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0"
        title="${video.title}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    `;
  } else {
    // Reproductor nativo HTML5 para Cloudinary / Cloud MP4 gratis
    container.innerHTML = `
      <video controls autoplay playsinline poster="${video.posterUrl}">
        <source src="${video.videoUrl}" type="video/mp4" />
        Tu navegador no soporta reproducción de video HTML5.
      </video>
    `;
  }

  backdrop.classList.add("open");
}

function openPhotoModal(url, title) {
  const backdrop = document.getElementById("mediaModal");
  const modalBox = document.getElementById("modalContentBox");
  const container = document.getElementById("modalMediaContainer");
  const titleEl = document.getElementById("modalMediaTitle");

  if (!backdrop || !container) return;

  modalBox.classList.remove("vertical-modal");
  titleEl.textContent = title;
  container.innerHTML = `
    <img src="${url}" alt="${title}" style="width: 100%; height: 100%; object-fit: contain; background: #000;" />
  `;

  backdrop.classList.add("open");
}
