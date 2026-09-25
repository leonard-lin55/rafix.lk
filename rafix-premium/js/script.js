/* ==========================================================================
   RAFIX (Pvt) Ltd — Centralized site configuration
   Edit the values below to update images, links and contact details
   sitewide. Replace any imageUrl with your own photograph whenever
   you have one — the layout and cropping will adapt automatically.
   ========================================================================== */
const siteConfig = {
  // Contact
  whatsappNumber: "94787444000",
  whatsappLink: "https://wa.me/94787444000?text=Hello%20Rafix%2C%20I%20would%20like%20to%20know%20more%20about%20your%20CCTV%20solutions.",
  phoneLink: "tel:+94787444000",
  emailLink: "mailto:rafixlimited@gmail.com",
  facebookLink: "https://www.facebook.com/rafix.lk",
  instagramLink: "https://www.instagram.com/rafix.lk",
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Rafix%20(Pvt)%20Ltd%2C%20Mahabuthgamuwa%20Angoda%2C%20Angoda%2010620",
  // Embeddable version of the same location (exact link provided by Rafix), shown live inside the "Find Rafix" section
  googleMapsEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6091429325716!2d79.90893047524446!3d6.937229193062731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2590a10d66825%3A0xd09d7f5dc66c3404!2sRafix%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1790265331200!5m2!1sen!2slk",

  // Facebook videos (exact links as provided). Each is embedded live via
  // Facebook's official Video Plugin, with the original "Watch on Facebook"
  // link kept underneath as a fallback for the (rare) case a viewer's
  // browser or Facebook's own settings block the embedded player.
  video1Url: "https://www.facebook.com/reel/1061202439751598",
  video2Url: "https://www.facebook.com/reel/1065156615843221",

  // Centralized images — every URL below is a real, free-to-use photo
  // (Unsplash License / Pexels License, free for commercial use).
  // Replace any of these with your own Rafix photography at any time;
  // nothing else in the code needs to change.
  images: {
    logo: "images/logo.png",
    hero: "https://images.unsplash.com/photo-1761489798109-b29c9f8318c9?auto=format&fit=crop&w=1920&q=70",
    about: "https://images.pexels.com/photos/19782580/pexels-photo-19782580.jpeg?auto=compress&cs=tinysrgb&w=1200",
    residential: "https://images.pexels.com/photos/5581836/pexels-photo-5581836.jpeg?auto=compress&cs=tinysrgb&w=900",
    commercial: "https://images.pexels.com/photos/36004813/pexels-photo-36004813.jpeg?auto=compress&cs=tinysrgb&w=900",
    outdoor: "https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?auto=format&fit=crop&w=900&q=70",
    indoor: "https://images.pexels.com/photos/14845202/pexels-photo-14845202.jpeg?auto=compress&cs=tinysrgb&w=900",
    equipment: "https://images.pexels.com/photos/17323801/pexels-photo-17323801.jpeg?auto=compress&cs=tinysrgb&w=900",
    installation: "https://images.pexels.com/photos/27696596/pexels-photo-27696596.jpeg?auto=compress&cs=tinysrgb&w=900",
    project1: "https://images.pexels.com/photos/5581836/pexels-photo-5581836.jpeg?auto=compress&cs=tinysrgb&w=900",
    project2: "https://images.pexels.com/photos/36004813/pexels-photo-36004813.jpeg?auto=compress&cs=tinysrgb&w=900",
    project3: "https://images.pexels.com/photos/19782580/pexels-photo-19782580.jpeg?auto=compress&cs=tinysrgb&w=900",
    project4: "https://images.pexels.com/photos/27696596/pexels-photo-27696596.jpeg?auto=compress&cs=tinysrgb&w=900",
    project5: "https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?auto=format&fit=crop&w=900&q=70",
    project6: "https://images.pexels.com/photos/17323801/pexels-photo-17323801.jpeg?auto=compress&cs=tinysrgb&w=900"
  }
};

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Apply centralized config to the DOM ---------- */
  document.querySelectorAll('[data-src-key]').forEach(function (el) {
    var key = el.getAttribute('data-src-key');
    if (siteConfig.images[key]) el.setAttribute('src', siteConfig.images[key]);
  });
  document.querySelectorAll('[data-bg-key]').forEach(function (el) {
    var key = el.getAttribute('data-bg-key');
    if (siteConfig.images[key]) el.style.backgroundImage = "url('" + siteConfig.images[key] + "')";
  });
  document.querySelectorAll('[data-link="whatsapp"]').forEach(function (el) { el.setAttribute('href', siteConfig.whatsappLink); });
  document.querySelectorAll('[data-link="phone"]').forEach(function (el) { el.setAttribute('href', siteConfig.phoneLink); });
  document.querySelectorAll('[data-link="email"]').forEach(function (el) { el.setAttribute('href', siteConfig.emailLink); });
  document.querySelectorAll('[data-link="facebook"]').forEach(function (el) { el.setAttribute('href', siteConfig.facebookLink); });
  document.querySelectorAll('[data-link="instagram"]').forEach(function (el) { el.setAttribute('href', siteConfig.instagramLink); });
  document.querySelectorAll('[data-link="maps"]').forEach(function (el) { el.setAttribute('href', siteConfig.googleMapsLink); });
  document.querySelectorAll('[data-link="video1"]').forEach(function (el) { el.setAttribute('href', siteConfig.video1Url); });
  document.querySelectorAll('[data-link="video2"]').forEach(function (el) { el.setAttribute('href', siteConfig.video2Url); });

  /* ---------- Live Facebook video embeds ---------- */
  document.querySelectorAll('[data-embed="video1"]').forEach(function (el) {
    el.src = "https://www.facebook.com/plugins/video.php?href=" + encodeURIComponent(siteConfig.video1Url) + "&show_text=false&width=560&height=315";
  });
  document.querySelectorAll('[data-embed="video2"]').forEach(function (el) {
    el.src = "https://www.facebook.com/plugins/video.php?href=" + encodeURIComponent(siteConfig.video2Url) + "&show_text=false&width=560&height=315";
  });

  /* ---------- Live Google Maps embed ---------- */
  document.querySelectorAll('[data-embed="maps"]').forEach(function (el) {
    el.src = siteConfig.googleMapsEmbedSrc;
  });

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Sticky header ---------- */
  var header = document.getElementById('siteHeader');
  function updateHeaderState() {
    if (window.scrollY > 10) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  }
  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, { passive: true });

  /* ---------- Mobile nav ---------- */
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', function () {
    var isOpen = navLinks.classList.toggle('mobile-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('mobile-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Scroll reveal ---------- */
  var revealTargets = document.querySelectorAll('.section-head, .reveal-item');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(function (el) { el.classList.add('reveal'); observer.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('reveal', 'is-visible'); });
  }

  /* ---------- Hero floating particles ---------- */
  var particleField = document.getElementById('heroParticles');
  if (particleField && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    for (var i = 0; i < 18; i++) {
      var dot = document.createElement('span');
      dot.style.left = Math.random() * 100 + '%';
      dot.style.bottom = (Math.random() * 40) + '%';
      dot.style.animationDuration = (6 + Math.random() * 6) + 's';
      dot.style.animationDelay = (Math.random() * 6) + 's';
      particleField.appendChild(dot);
    }
  }
});
