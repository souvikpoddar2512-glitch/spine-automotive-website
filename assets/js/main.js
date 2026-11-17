/**
 * SPINE AUTOMOTIVE PRIVATE LIMITED
 * Official Corporate Website Script
 * Industry: Manufacture of motor vehicles, trailers and semi-trailers
 * Location: Adityapur Industrial Area, Jharkhand, India
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. Theme Management (Light / Dark Mode with LocalStorage)
     ========================================================================== */
  const THEME_STORAGE_KEY = 'spine_theme_pref';
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');

  function getStoredTheme() {
    return localStorage.getItem(THEME_STORAGE_KEY);
  }

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  // Initialize theme: stored preference or light mode default
  const savedTheme = getStoredTheme();
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    // Light mode default as specified in design direction
    applyTheme('light');
  }

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isCurrentDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const newTheme = isCurrentDark ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
      btn.setAttribute('aria-label', `Switch to ${isCurrentDark ? 'dark' : 'light'} mode`);
    });
  });

  // Listen to system theme changes if user hasn't explicitly set a preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem(THEME_STORAGE_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  /* ==========================================================================
     2. Mobile Navigation Drawer Toggle & Accessibility
     ========================================================================== */
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-drawer .btn');

  if (mobileToggle && mobileDrawer) {
    function toggleMenu(forceState) {
      const isOpen = typeof forceState === 'boolean' ? forceState : !mobileToggle.classList.contains('open');
      mobileToggle.classList.toggle('open', isOpen);
      mobileDrawer.classList.toggle('open', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }

    mobileToggle.addEventListener('click', () => toggleMenu());

    // Close when clicking mobile navigation links
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    // Close on Escape key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        toggleMenu(false);
      }
    });

    // Close on click outside drawer
    document.addEventListener('click', e => {
      if (
        mobileDrawer.classList.contains('open') &&
        !mobileDrawer.contains(e.target) &&
        !mobileToggle.contains(e.target)
      ) {
        toggleMenu(false);
      }
    });
  }

  /* ==========================================================================
     3. Active Navigation Spy (Intersection Observer)
     ========================================================================== */
  const navLinks = document.querySelectorAll('.nav-desktop .nav-link');
  const sections = document.querySelectorAll('section[id]');

  if (sections.length > 0 && navLinks.length > 0 && 'IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(sec => sectionObserver.observe(sec));
  }

  /* ==========================================================================
     4. Contact & Quote Form Handling (Web3Forms API)
     ========================================================================== */
  const contactForm = document.getElementById('quoteForm');
  const statusMsg = document.getElementById('formStatusMsg');
  const submitBtn = document.getElementById('quoteSubmitBtn');

  if (contactForm && statusMsg && submitBtn) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      // Basic client-side validation
      const name = contactForm.elements['name']?.value.trim();
      const phone = contactForm.elements['phone']?.value.trim();
      const email = contactForm.elements['email']?.value.trim();
      const requirement = contactForm.elements['requirement']?.value;
      const message = contactForm.elements['message']?.value.trim();
      const accessKey = contactForm.elements['access_key']?.value.trim();

      if (!name || !phone || !email || !message) {
        showStatus('Please fill in all required fields.', 'error');
        return;
      }

      // Check if access key is still default placeholder
      if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
        // Helpful development alert without breaking UX
        console.warn('Spine Automotive: Web3Forms access key is not yet configured. Form will display simulated success for demonstration.');
        
        // Show simulated submission message for preview/staging
        setButtonState(true);
        setTimeout(() => {
          setButtonState(false);
          showStatus(
            'Inquiry simulated successfully! (Note to Owner: Replace YOUR_WEB3FORMS_ACCESS_KEY_HERE in index.html with your free Web3Forms key to receive real emails at spineautomotive2025@gmail.com).',
            'success'
          );
          contactForm.reset();
        }, 800);
        return;
      }

      // Prepare payload for Web3Forms
      const formData = new FormData(contactForm);

      setButtonState(true);
      statusMsg.style.display = 'none';

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        const result = await response.json();

        if (response.status === 200 && result.success) {
          showStatus(
            'Thank you for contacting Spine Automotive Private Limited. Your technical inquiry has been submitted. Our engineering team at Adityapur will contact you shortly.',
            'success'
          );
          contactForm.reset();
        } else {
          showStatus(
            result.message || 'Submission failed. Please email us directly at spineautomotive2025@gmail.com or call +91 7870915591.',
            'error'
          );
        }
      } catch (err) {
        console.error('Submission network error:', err);
        showStatus(
          'Network connection error. Please email us directly at spineautomotive2025@gmail.com or reach us on WhatsApp at +91 7870915591.',
          'error'
        );
      } finally {
        setButtonState(false);
      }
    });

    function setButtonState(loading) {
      if (loading) {
        submitBtn.disabled = true;
        submitBtn.dataset.originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = `
          <svg style="animation: spin 1s linear infinite; width: 18px; height: 18px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
            <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
          </svg>
          Submitting Specifications...
        `;
      } else {
        submitBtn.disabled = false;
        if (submitBtn.dataset.originalText) {
          submitBtn.innerHTML = submitBtn.dataset.originalText;
        }
      }
    }

    function showStatus(message, type) {
      statusMsg.textContent = message;
      statusMsg.className = `form-status-msg ${type}`;
      statusMsg.style.display = 'block';
      statusMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  /* ==========================================================================
     5. Keyframes injection for spinner animation
     ========================================================================== */
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`;
  document.head.appendChild(styleEl);

})();
