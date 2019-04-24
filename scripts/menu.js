function openMenu() {
  document.getElementById('menu-tray').style.display="block";
}

function closeMenu() {
  document.getElementById('menu-tray').style.display="none";
}

function runOnScroll() {
  var navbar = document.querySelector('#navbar');
    if (window.scrollY <= 300) {
      navbar.classList.remove('white');
      document.getElementById('smalllogo').style.display="none";
    } else {
      navbar.classList.add('white');
      document.getElementById('smalllogo').style.display="block";
    };
};
window.addEventListener("scroll", runOnScroll);
