// gsap.to(".navbar",{
//     backgroundColor :"#000",
//     height:"120px",
//     duration :2,
//     scrollTrigger:{
//         trigger:".navbar",
//         scroller:"body"
//     }
// })



$(".container1 i").click(function () {
    $("ul").toggleClass("open");
  });
// JavaScript to toggle the dropdown menu on mobile screens
function toggleDropdown() {
    var dropdownMenus = document.querySelectorAll(".dropdown_menu"); // Use the appropriate selector here
    dropdownMenus.forEach(function(dropdownMenu) {
        dropdownMenu.classList.toggle("show_dropdown");
    });
}
const text=document.querySelector(".second-text");
const textLoad=()=>{
    setTimeout(()=>{
        text.textContent="Student";
    },0);
    setTimeout(()=>{
        text.textContent="Developer";
    },4000);
    setTimeout(()=>{
        text.textContent="Designer";
    },8000);
    setTimeout(()=>{
        text.textContent="Learner";
    },12000);
   
}
textLoad();
// setInterval(textLoad,12000);
// var tl= gsap.timeline();

// tl.from(".navbar h3,.menu li",{
//     top:-130,
//     opacity:0,
//     duration:0.5,
//     stagger:0.3
// })