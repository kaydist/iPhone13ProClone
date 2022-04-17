
//hero page 
let currentScreenSize = "mobile"
if(window.innerWidth >= "768"){
    currentScreenSize = "notMobile"
}else{
    currentScreenSize = "mobile"
}

const firstPageIN = gsap.timeline()
firstPageIN.fromTo(
    ".hero-text-1",
    {opacity: 0}, 
    {opacity: 1, duration: 2}
)
firstPageIN.fromTo(
    ".hero-video",
    {opacity: 0}, 
    {opacity: 1, duration: 1, delay: 0.5},
    "<"
)
firstPageIN.to(
    ".hero-text-1",
    {opacity: 0, duration: 2, delay: 0.5} 
)
firstPageIN.to(
    ".hero-animation-container img",
    {display: "block", delay: 2} 
)
firstPageIN.to(
    ".hero-animation-container video",
    {display: "none"},
    "<"
)

const firstPageOut = gsap.timeline({
    scrollTrigger:{
        trigger: '.hero-section',
        start: "60%",
        end: "100%",
        anticipatePin: 1,
        pin: true,
        pinSpacing: false
    }
});





//eight page

if(window.innerWidth >= "768"){
    const eighthPageImgIn = gsap.timeline({
        scrollTrigger:{
            trigger: ".eighth-section",
            start: "top 70%",
            end: "top 60%",
            scrub: true,
        }
    })    
    gsap.set(".eighth-section p", {padding: "100vh 5em 1em"})
    gsap.set(".eighth-section img", {top: "5%"})
    eighthPageImgIn.fromTo(
        ".eighth-section img",
        {y: 500},
        {y: 0}
    )
    const eighthPageImgCon = gsap.timeline({
        scrollTrigger:{
            trigger: ".eighth-section img",
            start: "top 70%",
            end: "25%",
            scrub: true,
            pin: ".eighth-section img",
            pinSpacing: false,
        },
    })
    eighthPageImgCon.fromTo(
        ".eighth-section img",
        {y: 0},
        {y: -50}
    )
    eighthPageImgCon.to(
        ".eighth-section p",
        {y: "-50%"},
        "<"
    )

}else{    
    const eighthPageImgIn = gsap.timeline({
        scrollTrigger:{
            trigger: ".eighth-section",
            start: "top 90%",
            end: "top 60%",
            scrub: true,
        }
    })
    gsap.set(".eighth-section p", {padding: "45vh 5% 2em"})
    eighthPageImgIn.fromTo(
        ".eighth-section img",
        {y: "10%"},
        {y: 0}
    )    
    gsap.set(".eighth-section img", {top: "5%"})
    eighthPageImgIn.fromTo(
        ".eighth-section img",
        {y: 0},
        {y: -50,
            scrollTrigger:{
                trigger: ".eighth-section img",
                start: "top 80%",                
                endTrigger: ".eighth-section p",
                end: "bottom 75%",
                scrub: true,
                pin: ".eighth-section img",
                pinSpacing: "false"
            },
        }
    )
}




//9th section
const ninthPage = gsap.timeline()
ninthPage.fromTo(
    ".ninth-section-columns-1 div",
    {y: 200, opacity: 0},
    {y: 0, opacity: 1,
        scrollTrigger:{
            trigger: ".ninth-section-columns-1 div",
            start: "top bottom",
            end: "top 70%",
            scrub: true
        }
    }
)
ninthPage.fromTo(
    ".ninth-section-columns-2",
    {y: 200, opacity: 0},
    {y: 0, opacity: 1,
        scrollTrigger:{
            trigger: ".ninth-section-columns-2",
            start: "top bottom",
            end: "top 70%",
            scrub: true
        }
    }
)

//11th page
const eleventhPage = gsap.timeline({
    scrollTrigger:{
        trigger: ".eleventh-section",
        start: "5%",
        end: "70%",
        scrub: true
    }
})

gsap.fromTo(
    ".image-component-7 img",
    {y: 100},
    {y: -60, 
        scrollTrigger:{
        trigger: ".eleventh-section",
        start: "-30%",
        end: "35%",
        scrub: true
        }
    }
)
eleventhPage.fromTo(
    ".image-component-8 .image-component-desc",
    {y: 100, opacity: 0},
    {y: 0, opacity: 1},
)
eleventhPage.fromTo(
    ".image-component-9 .image-component-desc-1",
    {y: 100, opacity: 0},
    {y: 0, opacity: 1},
)
eleventhPage.fromTo(
    ".image-component-9 .image-component-desc-2",
    {y: 100, opacity: 0},
    {y: 0, opacity: 1},
)
