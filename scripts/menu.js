function openMenu() {
  document.getElementById('menu-tray').style.height="80vh";
  document.getElementById('menu-list').style.display="block";
}

function closeMenu() {
  document.getElementById('menu-tray').style.height="0vh";
  document.getElementById('menu-list').style.display="none";
}

function runOnScroll() {
  var navbar = document.querySelector('#navbar');
    if (window.scrollY <= 100) {
      navbar.classList.remove('white');
      document.getElementById('smalllogo').style.display="none";
    } else {
      navbar.classList.add('white');
      document.getElementById('smalllogo').style.display="block";
    };
};
window.addEventListener("scroll", runOnScroll);
