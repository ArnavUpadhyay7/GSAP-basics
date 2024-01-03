var tl = gsap.timeline()
tl.from("#nav img,#nav h3,#nav h4,#nav button",{
    y: -100,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.2
})
tl.from("#main h1",{
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.5
})
tl.from("#main>img",{
    y: 200,
    duration: 0.5,
    opacity: 0,
    // scale: 0,
    stagger: 0.5
})
tl.from("#main h5",{
    duration: 0.5,
    opacity: 0,
    scale: 0
})
tl.to("#main h5",{
    y: 40,
    repeat: -1,
    duration: 0.5,
    yoyo: true
})
