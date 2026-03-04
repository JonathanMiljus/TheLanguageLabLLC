// ============================================
// THE LANGUAGE LABORATORY LLC
// Site JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Mobile Navigation Toggle ----
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('active');
  });

  // Close mobile nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('active');
    });
  });

  // ---- Sticky Nav Scroll Effect ----
  const nav = document.getElementById('nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  }, { passive: true });

  // ---- Fade-In on Scroll ----
  const fadeTargets = document.querySelectorAll(
    '.section-label, .section-title, .section-intro, ' +
    '.about-main p, .about-card, ' +
    '.service-card, ' +
    '.credential-group, ' +
    '.research-card, ' +
    '.lang-card, ' +
    '.expertise-tag, ' +
    '.contact-info, .contact-form-wrapper, ' +
    '.hero-text, .hero-image'
  );

  fadeTargets.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add stagger delay for grouped items
        const parent = entry.target.parentElement;
        if (parent) {
          const siblings = Array.from(parent.children).filter(c => c.classList.contains('fade-in'));
          const index = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = `${index * 0.07}s`;
        }
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  fadeTargets.forEach(el => observer.observe(el));

  // ---- Smooth Scroll for Anchor Links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ---- Contact Form Handling ----
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      // If using Formspree or similar, let it handle naturally
      // If no backend, show a thank-you message
      const action = form.getAttribute('action');
      if (action.includes('YOUR_FORM_ID')) {
        e.preventDefault();
        const wrapper = document.querySelector('.contact-form-wrapper');
        wrapper.innerHTML = `
          <div style="text-align:center; padding: 3rem 1rem;">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3a9e9e" stroke-width="2" style="margin-bottom: 1rem;">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <h3 style="font-family: 'Cormorant Garamond', Georgia, serif; color: #1a2744; margin-bottom: 0.5rem;">Message Received</h3>
            <p style="color: #6b6760; font-size: 0.95rem;">Thank you for reaching out. I'll get back to you within 24–48 hours.</p>
          </div>
        `;
      }
    });
  }

});
