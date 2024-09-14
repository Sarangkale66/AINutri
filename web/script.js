function slidebar(){
let loginHere=document.querySelector("#loginHere");
loginHere.addEventListener("click",function(){
  gsap.to("#slideBar",
    {
      left:"0%",
      duration:0.5,
      ease:Power4,
    }
  )
})

let signUpHere=document.querySelector("#signUpHere");
signUpHere.addEventListener("click",function(){
  gsap.to("#slideBar",{
    left:"50%",
    duration:0.5,
    ease:Power4,
  }
)
})
}
function Sheryjs(){
  Shery.imageEffect("#slideBar", {
    style: 3,
    config:{"uFrequencyX":{"value":12,"range":[0,100]},"uFrequencyY":{"value":12,"range":[0,100]},"uFrequencyZ":{"value":10,"range":[0,100]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":1.2625414379331221},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0.03,"range":[0,0.5]},"shapeRadius":{"value":0.05,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.21,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey:true
  });
}

function init(){
  let tl=gsap.timeline();
  tl.from("#fullScreen",{
    y:40,
    duration:1,
  })
  
  tl.from(".container",{
    y:20,
    opacity:0,
    duration:2
  },"sank");
  
  tl.from("#slideBar img",{
    y:20,
    opacity:0,
    duration:2
  },"sank");
  
  tl.from("#head1",{
    y:10,
    opacity:0,
    duration:0.5
  },"shaani");
  
  tl.from("#head2",{
    y:10,
    opacity:0,
    duration:1
  },"shaani");
}


function btnMouseHover(){
  // document.querySelector("#btn1").addEventListener("mousemove",(e)=>{
  //  gsap.to("#cursor",{
  //     x:`${e.x}`,
  //     y:`${e.y}`,
  //  })
  // })
  // document.querySelector("#btn1").addEventListener("mousemove",function(e){
  //   gsap.to("#cursor",{
  //     scale:3,
  //   })
  // })
  // document.querySelector("#btn1").addEventListener("mouseleave",function(e){
  //   gsap.to("#cursor",{
  //     scale:0,
  //   })
  // })
  // let teriiccha=document.querySelector("#btn1").getBoundingClientRect();
  // console.log(teriiccha)
}






init();
slidebar();
// btnMouseHover();
Sheryjs();


