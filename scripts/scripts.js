var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-22vh";
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
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
  document.getElementById("navbar").style.position = 'sticky';
  document.getElementById("home_page_main_photo").style.marginTop = "0";
}
function closemainMenu() {
  document.getElementById("main_menu").style.left = '-100%';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
  document.getElementById("navbar").style.position = 'fixed';
  document.getElementById("home_page_main_photo").style.marginTop = "81px";
}
document.getElementById("mobile_menubutton").onclick = function() {
  const element = document.querySelector('#mobile_menu');
  const style = getComputedStyle(element);
  const left = style.left;
  if (left == "0px") {
      closemobileMenu();
      console.log(left);
  } else {
      openmobileMenu();
      console.log(left);
}}

document.getElementById("mobile_menu_ex").onclick = closemobileMenu;
    
function openmobileMenu() {
  document.getElementById("mobile_menu").style.left = '0%';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
  document.getElementById("navbar").style.position = 'sticky';
  document.getElementById("home_page_main_photo").style.marginTop = "0";
}
function closemobileMenu() {
  document.getElementById("mobile_menu").style.left = '-100%';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
  document.getElementById("navbar").style.position = 'fixed';
  document.getElementById("home_page_main_photo").style.marginTop = "9vh";
}

document.getElementById("fb_button_1").onclick = fbslideRight;
document.getElementById("fb_button_2").onclick = fbslideRight;
document.getElementById("fb_button_3").onclick = fbslideLeft;
document.getElementById("fb_button_4").onclick = fbslideLeft;
function fbslideLeft() {
  document.getElementById("fb_slide_1").style.left = '-1000px';
  document.getElementById("fb_slide_2").style.left = '-500px';
  document.getElementById("fb_slide_3").style.left = '0';
  document.getElementById("fb_slide_4").style.left = '500px';
  document.getElementById("fb_button_1").style.background = '#000000';
  document.getElementById("fb_button_2").style.background = '#000000';
  document.getElementById("fb_button_3").style.background = '#0F96DC';
  document.getElementById("fb_button_4").style.background = '#0F96DC';
}
function fbslideRight() {
  document.getElementById("fb_slide_1").style.left = '0';
  document.getElementById("fb_slide_2").style.left = '500px';
  document.getElementById("fb_slide_3").style.left = '1000px';
  document.getElementById("fb_slide_4").style.left = '1500px';
  document.getElementById("fb_button_1").style.background = '#0F96DC';
  document.getElementById("fb_button_2").style.background = '#0F96DC';
  document.getElementById("fb_button_3").style.background = '#000000';
  document.getElementById("fb_button_4").style.background = '#000000';
}

document.getElementById("fb_condense_button_1").onclick = fbsetSlide1;
document.getElementById("fb_condense_button_2").onclick = fbsetSlide2;
document.getElementById("fb_condense_button_3").onclick = fbsetSlide3;
document.getElementById("fb_condense_button_4").onclick = fbsetSlide4;
function fbsetSlide1() {
  document.getElementById("fb_slide_condense_1").style.left = '0';
  document.getElementById("fb_slide_condense_2").style.left = '500px';
  document.getElementById("fb_slide_condense_3").style.left = '1000px';
  document.getElementById("fb_slide_condense_4").style.left = '1500px';
  document.getElementById("fb_condense_button_1").style.background = '#0F96DC';
  document.getElementById("fb_condense_button_2").style.background = '#000000';
  document.getElementById("fb_condense_button_3").style.background = '#000000';
  document.getElementById("fb_condense_button_4").style.background = '#000000';
}
function fbsetSlide2() {
  document.getElementById("fb_slide_condense_1").style.left = '-500px';
  document.getElementById("fb_slide_condense_2").style.left = '0';
  document.getElementById("fb_slide_condense_3").style.left = '500px';
  document.getElementById("fb_slide_condense_4").style.left = '1000px';
  document.getElementById("fb_condense_button_1").style.background = '#000000';
  document.getElementById("fb_condense_button_2").style.background = '#0F96DC';
  document.getElementById("fb_condense_button_3").style.background = '#000000';
  document.getElementById("fb_condense_button_4").style.background = '#000000';
}
function fbsetSlide3() {
  document.getElementById("fb_slide_condense_1").style.left = '-1000px';
  document.getElementById("fb_slide_condense_2").style.left = '-500px';
  document.getElementById("fb_slide_condense_3").style.left = '0';
  document.getElementById("fb_slide_condense_4").style.left = '500px';
  document.getElementById("fb_condense_button_1").style.background = '#000000';
  document.getElementById("fb_condense_button_2").style.background = '#000000';
  document.getElementById("fb_condense_button_3").style.background = '#0F96DC';
  document.getElementById("fb_condense_button_4").style.background = '#000000';
}
function fbsetSlide4() {
  document.getElementById("fb_slide_condense_1").style.left = '-1500px';
  document.getElementById("fb_slide_condense_2").style.left = '-1000px';
  document.getElementById("fb_slide_condense_3").style.left = '-500px';
  document.getElementById("fb_slide_condense_4").style.left = '0';
  document.getElementById("fb_condense_button_1").style.background = '#000000';
  document.getElementById("fb_condense_button_2").style.background = '#000000';
  document.getElementById("fb_condense_button_3").style.background = '#000000';
  document.getElementById("fb_condense_button_4").style.background = '#0F96DC';
}