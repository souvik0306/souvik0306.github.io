// Simple client-side router for clean URLs
// This script intercepts navigation to internal routes and loads content dynamically.
document.addEventListener('DOMContentLoaded', function () {
  function navigate(path) {
    if (path === '/personal' || path === '/aviation') {
      // Load the corresponding HTML file content into main
      const file = path.replace('/', '') + '.html';
      fetch(file)
        .then(res => res.text())
        .then(html => {
          const temp = document.createElement('div');
          temp.innerHTML = html;
          const newMain = temp.querySelector('main');
          if (newMain) {
            document.querySelector('main').innerHTML = newMain.innerHTML;
          }
        });
    }
  }

  document.body.addEventListener('click', function (e) {
    const link = e.target.closest('a[data-route]');
    if (link) {
      e.preventDefault();
      const path = link.getAttribute('href');
      window.history.pushState({}, '', path);
      navigate(path);
    }
  });

  window.addEventListener('popstate', function () {
    navigate(window.location.pathname);
  });

  // Initial load
  if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
    navigate(window.location.pathname);
  }
});
