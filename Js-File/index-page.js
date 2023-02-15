/*Sticky Navbar*/
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 0) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
        document.body.style.paddingTop = '0';
      } 
  });
});
/*Sticky Navbar End*/
/*More-Less Div*/
let btn = document.getElementById("VisHideBtn")
        let more = document.getElementById("ListanMore")
        let ml = document.getElementById("more-less")
        btn.addEventListener("click",function(){
            if(more.style.overflow === "auto"){
                more.style.overflow = "hidden";
                ml.innerText = "More"
            }else{
                more.style.overflow = "auto"
                RPparent.style.display='block'
                First.style.display='none';
                Second.style.display='none';
                Third.style.display='none';
                Fourth.style.display='none';
                Fifth.style.display='none';
                Sixth.style.display='none';
                Seventh.style.display='none';
                Eighth.style.display='none';
                Ninth.style.display='none';
                Tenth.style.display='none';
                ml.innerText = "Less"
            }
        });
/*More-Less Div End*/
// Music Banner Changing 
var RPparent = document.getElementById("RPparent")
var First = document.getElementById("Fparent")
var Second = document.getElementById("Sparent")
var Third = document.getElementById("Tparent")
var Fourth = document.getElementById("Foparent")
var Fifth = document.getElementById("Fiparent")
var Sixth = document.getElementById("Siparent")
var Seventh = document.getElementById("Separent")
var Eighth = document.getElementById("Eparent")
var Ninth = document.getElementById("Nparent")
var Tenth = document.getElementById("Teparent")
function bchange(value){
    if (value == 1) {
      First.style.display='block';
      RPparent.style.display='none'
      Second.style.display='none';
      Third.style.display='none';
      Fourth.style.display='none';
      Fifth.style.display='none';
      Sixth.style.display='none';
      Seventh.style.display='none';
      Eighth.style.display='none';
      Ninth.style.display='none';
      Tenth.style.display='none';
    }
    else if (value == 2) {
      Second.style.display='block';
      RPparent.style.display='none'
      First.style.display='none';
      Third.style.display='none';
      Fourth.style.display='none';
      Fifth.style.display='none';
      Sixth.style.display='none';
      Seventh.style.display='none';
      Eighth.style.display='none';
      Ninth.style.display='none';
      Tenth.style.display='none';
    } 
    else if (value == 3){
      Third.style.display='block';
      RPparent.style.display='none'
      First.style.display='none';
      Second.style.display='none';
      Fourth.style.display='none';
      Fifth.style.display='none';
      Sixth.style.display='none';
      Seventh.style.display='none';
      Eighth.style.display='none';
      Ninth.style.display='none';
      Tenth.style.display='none';
    }
    else if (value == 4) {
      Fourth.style.display='block';
      RPparent.style.display='none';
      First.style.display='none';
      Second.style.display='none';
      Third.style.display='none';
      Fifth.style.display='none';
      Sixth.style.display='none';
      Seventh.style.display='none';
      Eighth.style.display='none';
      Ninth.style.display='none';
      Tenth.style.display='none';
    } 
    else if (value == 5){
      Fifth.style.display='block';
      RPparent.style.display='none';
      First.style.display='none';
      Second.style.display='none';
      Third.style.display='none';
      Fourth.style.display='none';
      Sixth.style.display='none';
      Seventh.style.display='none';
      Eighth.style.display='none';
      Ninth.style.display='none';
      Tenth.style.display='none';
    }
    else if (value == 6){
      Sixth.style.display='block';
      RPparent.style.display='none';
      First.style.display='none';
      Second.style.display='none';
      Third.style.display='none';
      Fourth.style.display='none';
      Fifth.style.display='none';
      Seventh.style.display='none';
      Eighth.style.display='none';
      Ninth.style.display='none';
      Tenth.style.display='none';
    }
    else if (value == 7){
      Seventh.style.display='block';
      RPparent.style.display='none';
      First.style.display='none';
      Second.style.display='none';
      Third.style.display='none';
      Fourth.style.display='none';
      Fifth.style.display='none';
      Sixth.style.display='none';
      Eighth.style.display='none';
      Ninth.style.display='none';
      Tenth.style.display='none';
    }
    else if (value == 8){
      Eighth.style.display='block';
      RPparent.style.display='none';
      First.style.display='none';
      Second.style.display='none';
      Third.style.display='none';
      Fourth.style.display='none';
      Fifth.style.display='none';
      Sixth.style.display='none';
      Seventh.style.display='none';
      Ninth.style.display='none';
      Tenth.style.display='none';
    }
    else if (value == 9){
      Ninth.style.display='block';
      RPparent.style.display='none';
      First.style.display='none';
      Second.style.display='none';
      Third.style.display='none';
      Fourth.style.display='none';
      Fifth.style.display='none';
      Sixth.style.display='none';
      Seventh.style.display='none';
      Eighth.style.display='none';
      Tenth.style.display='none';
    }
    else {
      Tenth.style.display='block';
      RPparent.style.display='none';
      First.style.display='none';
      Second.style.display='none';
      Third.style.display='none';
      Fourth.style.display='none';
      Fifth.style.display='none';
      Sixth.style.display='none';
      Seventh.style.display='none';
      Eighth.style.display='none';
      Ninth.style.display='none';
    }
}
function BGbanner(){
  RPparent.style.display='block'
  First.style.display='none';
  Second.style.display='none';
  Third.style.display='none';
  Fourth.style.display='none';
  Fifth.style.display='none';
  Sixth.style.display='none';
  Seventh.style.display='none';
  Eighth.style.display='none';
  Ninth.style.display='none';
  Tenth.style.display='none';
}

// End
