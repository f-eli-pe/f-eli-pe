
var tl = gsap.timeline({ delay: 0 });

tl.from(".text1", 0.3, { y: -20, alpha: 0 })
    .to("#portal-fluid", 9, { rotation: "360", ease: Linear.easeNone, repeat: -1 }, 0);
tl.from("#portal-fluid", 1.4, { scale: 0, alpha: 1, ease: Elastic.easeOut }, 1)
    .from("#felipe", .8, { top: 5, left: 100, scale: 0.6, autoAlpha: 0, ease: Elastic.easeOut }) 

    