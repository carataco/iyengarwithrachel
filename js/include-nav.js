fetch("nav.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("nav-placeholder").innerHTML = data;

    // Now that nav is in the DOM, run your toggle logic
    const hamburger = document.getElementById('hamburger-btn');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });

      window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
          navLinks.classList.remove('active');
        }
      });

      if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
      }
    } else {
      console.error('Hamburger button or nav-links not found!');
    }
  });
fetch("nav.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("nav-placeholder").innerHTML = data;

    const hamburger = document.getElementById('hamburger-btn');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });

      window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
          navLinks.classList.remove('active');
        }
      });
    }

    // --- AUTOMATIC ACTIVE LINK HIGHLIGHTER ---
    // Get the current page filename (e.g., "gallery.html")
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    
    // Find all links inside the menu
    const allLinks = document.querySelectorAll('.nav-links a');

    allLinks.forEach(link => {
      const linkAttribute = link.getAttribute('href');
      
      // If the link href matches our current page file name, highlight it!
      if (linkAttribute === currentPath) {
        link.classList.add('active-page');
        
        // If it's a sub-link inside the classes dropdown, also highlight the main "Classes" link
        const parentDropdown = link.closest('.dropdown');
        if (parentDropdown) {
          const dropBtn = parentDropdown.querySelector('.dropbtn');
          if (dropBtn) dropBtn.classList.add('active-page');
        }
      }
    });
  })
  .catch(err => console.error('Error loading navigation:', err));