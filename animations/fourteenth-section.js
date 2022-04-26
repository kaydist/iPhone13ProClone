//14th section
const fourteenthPageHeadingRight = document.querySelectorAll(`.fourteenth-section-heading .large-text span:nth-of-type(2n)`)
const fourteenthPageHeadingLeft = document.querySelectorAll(`.fourteenth-section-heading .large-text span:nth-of-type(2n-1)`)

const fourteenthPage= gsap.timeline({
    scrollTrigger:{
        trigger: ".fourteenth-section",  
        start: "-8%",
        end: "3%",
        scrub: true
    }
})

if(currentScreenSize !== "mobile"){
    fourteenthPage.fromTo(
        fourteenthPageHeadingLeft,
        8,
        {x: 0},
        {x: 150,}
    )
    fourteenthPage.fromTo(
        fourteenthPageHeadingRight,
        8,
        {x: 0},
        {x: -150,},
        "<"
    )
}else{
    fourteenthPage.fromTo(
        `.fourteenth-section-heading .large-text span:nth-child(3)`,
        8,
        {x: 40},
        {x: 0}
    )
    fourteenthPage.fromTo(
        `.fourteenth-section-heading .large-text span:nth-child(5)`,
        8,
        {x: 60},
        {x: 0},
        "<"
    )
}

fourteenthPage.fromTo(
    ".fourteenth-section-heading .small-text",
    {opacity: 0},
    {opacity: 1},
    "<50%"
)
fourteenthPage.fromTo(
    ".fourteenth-section .astronut-photo img",
    {y: 80},
    {y: 0},
    "<"
)
fourteenthPage.fromTo(
    ".fourteenth-section .image-component-18",
    {y: 80, opacity: 0},
    {y: 0, opacity: 1,
        scrollTrigger:{
            trigger: ".fourteenth-section-sub-2 .fourteenth-section-heading img", 
            start: "60%",
            end: "90%",
            scrub: true
        }
    }
)

const component15 = gsap.timeline({ 
    scrollTrigger:{
        trigger: ".fourteenth-section-sub-2-fusion img",  
        start: "30%",
        end: "80%",
        scrub: true,
    }
})
component15.fromTo(
    ".fourteenth-section-sub-2-fusion .image-component-15 .image-component-desc-heading",
    {y: 80, opacity: 0},
    {y: 0, opacity: 1,}
)
component15.fromTo(
    ".fourteenth-section-sub-2-fusion .image-component-15 .image-component-desc-body",
    {y: 80, opacity: 0},
    {y: 0, opacity: 1},
)