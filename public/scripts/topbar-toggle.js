(function initTopbarToggle(){
  const initTopbar = (topbar) => {
    if (topbar.dataset.menuToggleInit === 'true') return;
    const nav = topbar.querySelector('.nav');
    if (!nav) return;

    topbar.dataset.menuToggleInit = 'true';

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'menu-toggle';
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Toggle navigation menu');
    button.innerHTML = '<span class="menu-icon" aria-hidden="true"></span><span class="menu-label">Menu</span>';

    const onToggle = () => {
      const isOpen = nav.classList.toggle('open');
      button.classList.toggle('open', isOpen);
      button.setAttribute('aria-expanded', String(isOpen));
    };

    button.addEventListener('click', onToggle);

    const onLinkClick = () => {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        button.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
      }
    };

    topbar.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', onLinkClick));

    const wrap = topbar.querySelector('.wrap') || topbar;
    const mql = window.matchMedia('(max-width:900px)');

    const ensureAppended = () => {
      if (!wrap.contains(button)) wrap.appendChild(button);
    };

    const ensureRemoved = () => {
      if (wrap.contains(button)) {
        if (nav.classList.contains('open')) {
          nav.classList.remove('open');
        }
        wrap.removeChild(button);
      }
    };

    const handleChange = (e) => {
      if (e.matches) {
        ensureAppended();
      } else {
        ensureRemoved();
      }
    };

    handleChange(mql);

    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', handleChange);
    } else if (typeof mql.addListener === 'function') {
      mql.addListener(handleChange);
    }
  };

  const initAllTopbars = () => {
    document.querySelectorAll('.topbar').forEach(initTopbar);
  };

  const observeTopbarInserts = () => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches('.topbar')) {
            initTopbar(node);
          } else {
            node.querySelectorAll?.('.topbar')?.forEach(initTopbar);
          }
        });
      });
    });

    observer.observe(document.documentElement, { childList: true, subtree: true });
  };

  const run = () => {
    initAllTopbars();
    observeTopbarInserts();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
