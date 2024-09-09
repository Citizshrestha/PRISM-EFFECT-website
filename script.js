var crsr = document.querySelector("#cursor");
var crsrBlur = document.querySelector("#cursor-blur");
var page1 = document.querySelector("#page1");
var page2 = document.querySelector("#page2"); 

var crsrblur = document.querySelector("#cursor-blur");

function cursorFun(){
   page1.addEventListener("mousemove",function(dets){
      crsr.style.left = dets.pageX + "px";
      crsr.style.top = dets.pageY + "px";
      crsrblur.style.left = dets.x-100 + "px";
      crsrblur.style.top = dets.y-100 + "px";
   });
   page1.addEventListener("mouseenter",function(){
      crsrBlur.style.opacity = 1;
   });
   
   
   page1.addEventListener("mouseleave",function(){
      crsrBlur.style.opacity = 0;
   });
}
cursorFun();


function page3Hover(){
   const imagedivs = document.querySelectorAll("#image-div")

const page3 = document.getElementById("page3");

imagedivs.forEach((imagediv)=>{
   imagediv.addEventListener("mouseenter",() =>{
      page3.style.backgroundColor = "#fff";
   })
   
   imagediv.addEventListener("mouseleave",() =>{
      page3.style.backgroundColor = "#111";
   })
   
});

}
page3Hover();


function loco(){
   
const scroll = new LocomotiveScroll({
   el: document.querySelector('#main'),
   smooth: true
 });
 
 const footer = document.querySelector("#footer h3");

 footer.addEventListener("click",function(){
   scroll.scrollTo(0);
 })
}
loco();

