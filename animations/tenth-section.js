//10th page
const tenthPage = gsap.timeline({
    scrollTrigger:{
        trigger: ".tenth-section",
        start: "-10%",
        end: "90%",
        scrub: true
    }
})

tenthPage.fromTo(
    ".image-component-1 img",
    {y: 50},
    {y: -50}
)
tenthPage.fromTo(
    ".image-component-1 .image-component-desc-body",
    {y: 50, opacity: 0},
    {y: 0, opacity: 1},
    "<50%"
)
tenthPage.fromTo(
    ".image-component-2 .image-component-desc",
    {y: 150, opacity: 0},
    {y: 0, opacity: 1},
    ">20%"
)
tenthPage.fromTo(
    ".image-component-2 img",
    {y: 30},
    {y: -50},
    "<50%"
)
tenthPage.fromTo(
    ".image-component-3 .image-component-desc",
    {y: 150, opacity: 0},
    {y: 0, opacity: 1},
    "<80%"
)
tenthPage.fromTo(
    ".image-component-4 img",
    {y: 50},
    {y: -50},
    "<50%"
)
tenthPage.fromTo(
    ".image-component-5 .image-component-desc",
    {y: 150, opacity: 0},
    {y: 0, opacity: 1},
    ">80%"
)
tenthPage.fromTo(
    ".image-component-6 .image-component-desc",
    {y: 100, opacity: 0},
    {y: 0, opacity: 1},
)