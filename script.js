Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.2,
    
});
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr",{videos:["./0.mp4","./2.mp4","./3.mp4"]});

gsap.to(".fmainhead",{
    scrollTrigger:{
        trigger:"#fmain",
        pin:true,
        endTrigger:".last",
        start:"top top",
        end:"bottom bottom",
        scrub:1,
    },
    y:"-300%",
    ease:Power1
});
let sections=document.querySelectorAll(".fmainhead");
Shery.imageEffect(".fmainrightbox", {
    style: 4,
    config: { onMouse: { value: 1 } },
    slideStyle: (setScroll) => {
      sections.forEach(function (section, index) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          scrub: 1,
          onUpdate: function (prog) {
            setScroll(prog.progress + index);
            },
        });
      });
    },
  });