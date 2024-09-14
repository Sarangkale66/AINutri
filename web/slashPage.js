function init(){
    gsap.registerPlugin(ScrollTrigger);
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".container"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy(".container", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector(".container").style.transform ? "transform" : "fixed"
  });
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  ScrollTrigger.refresh();
  }
  init();

  gsap.from("#nav img",{
    opacity:0,
    duration:1,
  });
    gsap.from("#nav img",{
      // top:"35%",
      // left:"45%",
      scale:5, 
      duration:0.5,
      },"kuch");
      
    gsap.from("#nav #imgbg",{
      top:"0%",
      left:"0%",
      borderRadius: "0%",
      height:"100%",
      width:"100%", 
      duration:0.5,
      },"kuch");

    let Nav=document.querySelector("#nav");
    gsap.to(Nav,{
    height:"10vh",
    duration:0.5,
    },"kuch");
    
    gsap.from(".ele",{
      y:20,
      opacity:0,
      duration:1,
      delay:1,
    })

    gsap.from("#name",{
      y:-40,
      opacity:0,
      delay:1.3,
      duration:2,
    });

gsap.from("#info",{
  opacity:0,
  y:40,
  duration:2,
  delay:1,
  scrollTrigger:{
    trigger:"#page",
    scroller:".container",
  }
});

let tl=gsap.timeline({
    scrollTrigger:{
      trigger:"#first",
      scroller:".container",
          markers:true,
          start:"60% 50%",
          end:"100% 90%",
    } 
});

tl.to("#image1",{
    height:'240px',
    width:'458px',
    duration:1,
    onComplete: function() {
        this.reverse();
  }
});

tl.to("#image2",{
  height:'240px',
  width:'458px',
  duration:1,
  onComplete: function() {
    this.reverse();
  }
});

tl.to("#image3",{
  height:'240px',
  width:'458px',
  duration:1,
  onComplete: function() {
    this.reverse();
  }
});
tl.to("#image4",{
  height:'240px',
  width:'458px',
  duration:1,
  onComplete: function() {
    this.reverse();
  }
});

gsap.to("#page2",{  
  background: "linear-gradient(to top, #006769,#468586,#006769)",
  opacity:1,
  duration:15,
  scrollTrigger:{
    trigger:"#page",
    scroller:".container",
        markers:true,
        start:"100% 15%",
        end:"150% 50%",
    scrub:true,
  }
});

let t2=gsap.timeline({
  scrollTrigger:{ 
    trigger:"#page2",
    pin:true,
    scroller:".container",
     markers:true,
     start:"100% 100%",
     end:"100% 0%",
     scrub:true,
  }
});

t2.to("#Block1",{  
  transform:"translate(-500%)",
  duration:7,
},"both");

t2.to("#Block2",{  
  transform:"translate(-500%)",
  duration:7,
},"both");

t2.to("#Block3",{  
  transform:"translate(-500%)",
  duration:7,
},"both");

t2.to("#Block4",{  
  transform:"translate(-500%)",
  duration:7,
},"both");

t2.to("#Block5",{  
  transform:"translate(-500%)",
  duration:7,
},"both");

let t3=gsap.timeline({
  scrollTrigger:{ 
    trigger:"#page3",
    pin:true,
    scroller:".container",
     markers:true,
     start:"100% 100%",
     end:"150% 0%",
     scrub:true,
  }
});

t3.from("#page3",{
  background:"#8ee2e6ae",
  opacity:1,
  duration:3,
},"both2");

t3.to("#page3 #img1",{
   x:"100%",
   opacity:0,
   duration:3
},"both2");

t3.to("#page3 #img2",{
  x:"-100%",
  opacity:0,
  duration:3,
},"both2");

t3.to("#page3 #text",{
  fontSize:"150px",
  opacity:1,
  duration:3,
},"both2");

const slider = document.getElementById('pagetwo');
const images = document.querySelectorAll('#pagetwo div');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
console.log(images);


// let counter = 0;
// const size = images[0].clientWidth;

// nextBtn.addEventListener('click', () => {
//     if (counter >= images.length - 1) return;
//     slider.style.transform = `translateX(${-size * ++counter}px)`;
// });

// prevBtn.addEventListener('click', () => {
//     if (counter <= 0) return;
//     slider.style.transform = `translateX(${-size * --counter}px)`;
// });


for(let i=1;i<images.length;i++){
  nextBtn.addEventListener('click',()=>{
      console.log(images[i]);
        images[i].style.height="100vh";
        images[i].style.width="100vw";
        images[i].style.position="static";  
    })
}
  
  //
  // images.forEach((value,inde) => {
  //   nextBtn.addEventListener('click',()=>{
  //     value.style.height="100vh";
  //     value.style.width="100vw";
  //     // images[i].style.zIndex="-9" ;
  //     value.style.position="static";  
  //   })
  // });
  


