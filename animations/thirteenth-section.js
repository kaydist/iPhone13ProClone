//13th section
const thirteenthPage= gsap.timeline({
    scrollTrigger:{
        trigger: ".thirteenth-section .customize-text",  
        start: "-50%",
        end: "20%",
        scrub: true
    }
})

thirteenthPage.fromTo(
    ".thirteenth-section .customize-text .small-text",
    {y: 250},
    {y: 0}
)
thirteenthPage.fromTo(
    ".thirteenth-section .customize-text .large-text",
    {y: 500},
    {y: 0},
    "<"
)
thirteenthPage.fromTo(
    ".thirteenth-section .customize-text .model-image",
    {y: 250},
    {y: -60},
    "<"
)
thirteenthPage.fromTo(
    ".thirteenth-section .customize-camera-phone",
    {y: "50%"},
    {y: "25%"},
)

const thirteenthPageDetails = gsap.timeline({
    scrollTrigger:{
        trigger: ".thirteenth-section .customize-text",  
        start: "100%",
        end: "250%",
        scrub: true
    }
})

thirteenthPageDetails.fromTo(
    ".image-component-12 img",
    {y: 150},
    {y: -30, 
        scrollTrigger:{
            trigger: ".thirteenth-section .customize-text",  
            start: "100%",
            end: "150%",
            scrub: true
        }
    }
)
thirteenthPageDetails.fromTo(
    ".image-component-12 .image-component-desc-heading",
    {y: 150, opacity: 0},
    {y: 0, opacity: 1},
    "-=80%"
)
thirteenthPageDetails.fromTo(
    ".image-component-12 .image-component-desc-body",
    {y: 150, opacity: 0},
    {y: 0, opacity: 1}
)
thirteenthPageDetails.fromTo(
    ".image-component-12 .image-component-desc-footer",
    {y: 150, opacity: 0},
    {y: 0, opacity: 1}
)
thirteenthPageDetails.fromTo(
    ".image-component-13 .right-image img",
    {y: 200},
    {y: 0}
)
thirteenthPageDetails.fromTo(
    ".image-component-13 .left-image img",
    {y: 150},
    {y: 0}
)
thirteenthPageDetails.fromTo(
    ".image-component-13 .image-component-desc .image-component-desc-body-1",
    {y: 150, opacity: 0},
    {y: 0, opacity: 1}
)
thirteenthPageDetails.fromTo(
    ".image-component-13 .image-component-desc .image-component-desc-body-2",
    {y: 150, opacity: 0},
    {y: 0, opacity: 1}
)