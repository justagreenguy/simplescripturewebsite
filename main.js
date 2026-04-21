/* ============================================================
   Simple Scripture – main.js
   ============================================================ */

/* ── Dynamic copyright year ──────────────────────────────── */

document.querySelectorAll('.js-year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

/* ── Carousel ────────────────────────────────────────────── */

(function () {
  const track  = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const btnPrev = document.querySelector('.carousel-btn-prev');
  const btnNext = document.querySelector('.carousel-btn-next');
  const dotsContainer = document.querySelector('.carousel-dots');

  if (!track || !slides.length) return;

  let current = 0;
  const total = slides.length;

  // Build dots
  const dots = [];
  slides.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.setAttribute('aria-label', `Go to screenshot ${i + 1}`);
    if (i === 0) btn.classList.add('active');
    btn.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(btn);
    dots.push(btn);
  });

  function goTo(index) {
    current = Math.max(0, Math.min(index, total - 1));
    slides[current].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    updateState();
  }

  function updateState() {
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
    if (btnPrev) btnPrev.disabled = current === 0;
    if (btnNext) btnNext.disabled = current === total - 1;
  }

  if (btnPrev) btnPrev.addEventListener('click', () => goTo(current - 1));
  if (btnNext) btnNext.addEventListener('click', () => goTo(current + 1));

  // Sync dot on scroll
  let scrollTimer;
  track.addEventListener('scroll', () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      const slideWidth = slides[0].offsetWidth + 24; // gap = 1.5rem = 24px
      const center = track.scrollLeft + track.offsetWidth / 2;
      const trackPad = parseFloat(getComputedStyle(track).paddingLeft) || 0;
      const idx = Math.round((center - trackPad - slideWidth / 2) / slideWidth);
      current = Math.max(0, Math.min(idx, total - 1));
      updateState();
    }, 80);
  }, { passive: true });

  // Init — set scroll directly (no animation) so it reliably starts at slide 0
  track.scrollLeft = 0;
  updateState();
})();
