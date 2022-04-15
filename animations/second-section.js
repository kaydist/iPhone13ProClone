//second section

const secondPageIN = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-section",
        start: "0%",
        end: "50%",        
        scrub: true,
    }
})

secondPageIN.fromTo(
    ".highlight", 
    { color: "#f5f5f740"}, 
    { color: "#f5f5f7", stagger: 1}
)

const secondPageOut = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-section",
        start: "10%",
        end: "60%",
        scrub: true,
    }
})

secondPageOut.to(
    ".highlight", 
    { color: "#f5f5f740", stagger: 1}, 
)