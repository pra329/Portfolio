const three_lines = document.getElementsByClassName('svgg')[0];
const cross = document.getElementsByClassName('iconn')[0];

document.querySelector(".menu-icon").addEventListener("click", function () {
  const threeLines = document.getElementsByClassName('svgg')[0];
  const cross = document.getElementsByClassName('iconn')[0];
  const menuIcon = document.querySelector(".menu-icon");
  const megaMenuFull = document.querySelector("#mega-menu-full");

  // Toggle the mega-menu-full and the icon on menu button click
  menuIcon.addEventListener("click", function () {
      megaMenuFull.classList.toggle("show");
      if (!threeLines.classList.contains('active') && cross.classList.contains('active')) {
          threeLines.classList.add('active');
          cross.classList.remove('active');
      } else {
          cross.classList.add('active');
          threeLines.classList.remove('active');
      }
  });

  // Event listener function to hide menu and scroll to the section
  function handleAnchorClick(event, targetId, offset) {
      event.preventDefault();
      // Hide the mega menu
      megaMenuFull.classList.remove("show");
      cross.classList.add('active');
      threeLines.classList.remove('active');
      // Scroll smoothly to the target section
      const target = document.getElementById(targetId);
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
      });
}

  // Add event listeners to each anchor tag
  document.getElementById('home-link').addEventListener('click', function(event) {
      handleAnchorClick(event, 'home', 70);
  });

  document.getElementById('about-link').addEventListener('click', function(event) {
      handleAnchorClick(event, 'about', 70);
  });

  document.getElementById('project-link').addEventListener('click', function(event) {
      handleAnchorClick(event, 'projects', 70);
  });

  document.getElementById('contact-link').addEventListener('click', function(event) {
      handleAnchorClick(event, 'contact', 70);
  });
});

document.getElementById('about-link').addEventListener('click', function(event) {
  event.preventDefault();
  const target = document.getElementById('about');
  const offset = 20;
  const elementPosition = target.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
});

document.getElementById('home-link').addEventListener('click', function(event) {
  event.preventDefault();
  const target = document.getElementById('home');
  const offset = 150;
  const elementPosition = target.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
});

document.getElementById('home1-link').addEventListener('click', function(event) {
  event.preventDefault();
  const target = document.getElementById('home');
  const offset = 150;
  const elementPosition = target.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
});

document.getElementById('project-link').addEventListener('click', function(event) {
  event.preventDefault();
  const target = document.getElementById('projects');
  const offset = 70;
  const elementPosition = target.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
});

document.getElementById('project-link_button').addEventListener('click', function(event) {
  event.preventDefault();
  const target = document.getElementById('projects');
  const offset = 70;
  const elementPosition = target.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
});

document.getElementById('contact-link').addEventListener('click', function(event) {
  event.preventDefault();
  const target = document.getElementById('contact');
  const offset = 20;
  const elementPosition = target.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
});

document.getElementById('contact_button').addEventListener('click', function(event) {
  event.preventDefault();
  const target = document.getElementById('contact');
  const offset = 20;
  const elementPosition = target.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
});