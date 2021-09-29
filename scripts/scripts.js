var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-91px";
  }
  prevScrollpos = currentScrollPos;
}

document.getElementById("navmenu").onclick = openmainMenu
  function openmainMenu() {
    document.getElementById("main_menu").style.right = '0px';
    document.getElementById("main_menu").style.height = 'auto';
    document.getElementById("main_menu").style.width = '100%';
  }