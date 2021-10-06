var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-81px";
  }
  prevScrollpos = currentScrollPos;
}
document.getElementById("navmenu").onclick = function() {
  const element = document.querySelector('#main_menu');
  const style = getComputedStyle(element);
  const left = style.left;
  if (left == "0px") {
      closemainMenu();
      console.log(left);
  } else {
      openmainMenu();
      console.log(left);
}}

document.getElementById("main_menu_ex").onclick = closemainMenu;
    
function openmainMenu() {
  document.getElementById("main_menu").style.left = '0%';
  document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  document.getElementById("navbar").style.position = 'sticky';
  document.getElementById("home_page_main_photo").style.marginTop = "0";
}
function closemainMenu() {
  document.getElementById("main_menu").style.left = '-100%';
  document.getElementsByTagName('body')[0].style.overflow = 'scroll';
  document.getElementById("navbar").style.position = 'fixed';
  document.getElementById("home_page_main_photo").style.marginTop = "81px";
}