
// navbar animation section

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const line = document.querySelectorAll(".line");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");

    hamburger.classList.toggle("open");

  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
navLinks.addEventListener("click",()=>{

  navLinks.classList.toggle("open");

    hamburger.classList.toggle("open");

  links.forEach(link => {
    link.classList.toggle("fade");
  });

});
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// titleText animation

const text=document.querySelector(".fancy");
const strText=text.textContent;
const splitText=strText.split("");
text.textContent="";

for(let i=0;i<splitText.length;i++){
  text.innerHTML +="<span>"+splitText[i] + "<span>";

}
let char=0;
let timer=setInterval(onTick,50);
function onTick(){
  const span=text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if(char === splitText.length+ 15){
    complete();
    return;
  }
}
function complete(){
  clearInterval(timer);
  timer=null;
}
