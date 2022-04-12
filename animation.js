
//hero page 


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
        pin: true,
        pinSpacing: false
    }
});


//second section

const secondPageIN = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-section",
        start: "0%",
        end: "40%",        
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
        start: "20%",
        end: "70%",
        scrub: true,
    }
})

secondPageOut.to(
    ".highlight", 
    { color: "#f5f5f740", stagger: 1}, 
)

//third section

const thirdPageIn = gsap.timeline({
    scrollTrigger:{
        trigger: ".third-section",        
        markers: {startPoint: "orange", endPoint: "purple"},
        start: "-70%",
        end: "0%",
        scrub: true,
    }
})

thirdPageIn.fromTo(
    ".small-phone",
    {x: "-50%"},
    {x: "-25%", duration: 2},
)
thirdPageIn.fromTo(
    ".large-phone",
    {x: "50%"},
    {x: "35%", duration: 2},
    "<"
)
thirdPageIn.fromTo(
    ".left-text",
    {x: "200%", opacity: 0},
    {x: "-3%", opacity: 1, duration: 2},
    "<"
)
thirdPageIn.fromTo(
    ".right-text",
    {x: "-210%", opacity: 0},
    {x: "-0%", opacity: 1, duration: 2},
    "<"
)

const thirdPageOut = gsap.timeline({
    scrollTrigger:{
        trigger: ".third-section",
        start: "0%",
        end: "100%",
        scrub: true,
        pin: true,
        pinSpacing: false
    }
})

thirdPageOut.fromTo(
    ".small-phone",
    {x: "-25%"},
    {x: "-50%", duration: 2},
)
thirdPageOut.fromTo(
    ".large-phone",
    {x: "35%"},
    {x: "50%", duration: 2},
    "<"
)
thirdPageOut.fromTo(
    ".left-text",
    {x: "-3%", opacity: 1},
    {x: "200%", opacity: 0, duration: 2},
    "<"
)
thirdPageOut.fromTo(
    ".right-text",
    {x: "-0%", opacity: 1},
    {x: "-210%", opacity: 0, duration: 2},
    "<"
)


//fouth section

const swatches = document.querySelectorAll(".swatches span")
const labels = document.querySelectorAll(".swatch-container p span")
const gallery = document.querySelector(".phone-gallery")
const phones = document.querySelectorAll(".phone-gallery-container")


let topIndex = 1
let currentCloseUp = "green"  


swatches.forEach((swatch, index)=>{
    const coord = phones[index].getBoundingClientRect().left 

    swatch.addEventListener("click", (e)=>{
        const color = e.target.getAttribute("swatch")        
        const closeUp = document.querySelector(".close-"+color)         
        const label = document.querySelector(".label-"+color)
        if(currentCloseUp === color)return

        gsap.set(closeUp, {zIndex: topIndex})
        const carusol = gsap.timeline()
        carusol.to(
            ".phone-gallery", 
            {translateX: -coord, duration: 1.5, ease: "back.out(1.2)"},
        )
        carusol.fromTo(
            closeUp,
            {opacity: 0},
            {opacity: 1, duration: 1.5},
            "<"
        )
        
        gsap.set(labels, {color: "rgba(0,0,0,.25)"}) //sets allthe label back to original before choosing
        carusol.fromTo(
            label,
            {color: "rgba(0,0,0,.25)"},
            {color: "#1d1d1f", duration: 0.3},
            "<"
        )

        topIndex++
        currentCloseUp = color

    })
})


//sixth page

const screenStrenghtVid = document.querySelector(".sixth-section video")
const sixthPage = gsap.timeline({
    scrollTrigger:{
        trigger: ".sixth-section",
        start: "0%",
        end: "100%",
        onEnter: ()=> screenStrenghtVid.pause(),
        onEnterBack: ()=> screenStrenghtVid.pause(),
        onLeaveBack: ()=> screenStrenghtVid.play(),
        scrub: true,
    }
})

if(window.innerWidth >= "768"){
    const fouthPageOut = gsap.timeline({
        scrollTrigger:{
            trigger: ".fourth-section",        
            markers: {startPoint: "pink", endPoint: "red"},
            start: "0%",
            end: "100%",
            scrub: true,
            pin: true,
            pinSpacing: false
        }
    })

    fouthPageOut.to(
        gallery,
        {y: -200,}
    )
    fouthPageOut.to(
        ".purchase-right .phone",
        {y: -200,},
        "<"
    )

    //fifth page

    const fifthPageOut = gsap.timeline({
        scrollTrigger:{
            trigger: ".fifth-section",
            start: "0%",
            end: "100%",
            scrub: true,
            pin: true,
            pinSpacing: false
        }
    })

    fifthPageOut.to(
        ".fifth-section img",
        {y: -200,}
    )

    //sixth page
    const sixthPageOut = gsap.timeline({
        scrollTrigger:{
            trigger: ".sixth-section",
            start: "0%",
            end: "100%",
            scrub: true,
            pin: true,
            pinSpacing: false
        }
    })

    sixthPageOut.to(
        ".sixth-section img",
        {y: -200,}
    )
    sixthPageOut.to(
        ".sixth-section video",
        {y: -200,},
        "<"
    )
}





//eight page

// if(window.innerWidth >= "768"){
//     const eighthPageImgIn = gsap.timeline({
//         scrollTrigger:{
//             trigger: ".eighth-section",
//             markers: {startPoint: "red", endPoint: "green"},
//             start: "-15%",
//             end: "0%",
//             scrub: true,
//         }
//     })
//     gsap.set(".eighth-section img", {top: "30%"})
//     eighthPageImgIn.fromTo(
//         ".eighth-section img",
//         {y: 500},
//         {y: 0}
//     )
//     gsap.set(".eighth-section p", {padding: "90vh 10% 1em"})

// }else{    
//     const eighthPageImgIn = gsap.timeline({
//         scrollTrigger:{
//             trigger: ".eighth-section",
//             markers: {startPoint: "red", endPoint: "green"},
//             start: "-400em",
//             end: "-350em",
//             scrub: true,
//         }
//     })
//     gsap.set(".eighth-section img", {top: "30vh"})
//     eighthPageImgIn.fromTo(
//         ".eighth-section img",
//         {y: 500},
//         {y: 0}
//     )
//     gsap.set(".eighth-section p", {padding: "80vh 5% 2em"})
    
// }
// gsap.set(".eighth-section img", {position: "fixed"})
// const eighthPageImgCon = gsap.timeline({
//     scrollTrigger:{
//         trigger: ".eighth-section",
//         start: "-0%",
//         end: "50%",
//         scrub: true,
//         pin: true,
//         pinSpacing: false
//     },
// })
// eighthPageImgCon.fromTo(
//     ".eighth-section img",
//     {y: 0},
//     {y: -100}
// )
// eighthPageImgCon.to(
//     ".eighth-section p",
//     {y: "-70%"},
//     "<"
// )

//twelve section

const twelvthPage = gsap.timeline({
    scrollTrigger:{
        trigger: ".twelvth-section",
        start: "0%",
        end: "100%",
        scrub: true,
    }
})

const astronutPhone = document.querySelector(".twelvth-section .astronut-video .phone-casing")
const astronutPhoneUI = document.querySelector(".twelvth-section .astronut-video .phone-interface")
const astronutVideo = document.querySelector(".twelvth-section .astronut-video video")
const videoHeight = 0.53 * astronutPhone.clientHeight
const videoWidth = 0.57 * astronutPhone.clientWidth
const interfaceHeight = 0.98 * astronutPhone.clientHeight
const interfaceWidth =  0.9 * astronutPhone.clientWidth


gsap.set(".astronut-video video", {width: videoHeight, height: videoWidth})
gsap.set(".astronut-video .phone-interface", {width: interfaceHeight, height: interfaceWidth})

gsap.set(".twelvth-section .astronut-video", {transform: "translateY(-12rem)"})
const twelvthPageVideo = gsap.timeline({
    scrollTrigger:{
        trigger: ".twelvth-section .astronut-video",     
        onEnter: ()=> astronutVideo.pause(),
        onEnterBack: ()=> astronutVideo.pause(),
        onLeaveBack: ()=> astronutVideo.play(),
        start: "35%",
        end: "65%",
        scrub: true,
        pin: true,
        pinSpacing: false
    }
})

gsap.set(".twelvth-section .astronut-video", {transform: "scale(3.5)"})
gsap.set(".twelvth-section .twelvth-section-heading", {padding: "6rem 0 0"})
gsap.set(".twelvth-section .image-component-10", {margin: "10em 0 6rem"})

twelvthPageVideo.fromTo(
    ".twelvth-section .astronut-video",
    {transform: "translateY(-12rem) scale(3.5)", transformOrigin: "top"},
    {transform: "translateY(25%) scale(1)", transformOrigin: "top"},
)

twelvthPageVideo.fromTo(
    ".twelvth-section .astronut-video img",
    {opacity: 0},
    {opacity: 1, 
        scrollTrigger:{
            trigger: ".twelvth-section .astronut-video video",
            start: "0%",
            end: "0%",
            scrub: true,
        }
    }
)

//9th section
const ninthPage = gsap.timeline()
ninthPage.fromTo(
    ".ninth-section-columns-1 div",
    {y: 200, opacity: 0},
    {y: 0, opacity: 1,
        scrollTrigger:{
            trigger: ".ninth-section img",
            start: "20%",
            end: "70%",
            scrub: true
        }
    }
)
ninthPage.fromTo(
    ".ninth-section-columns-2",
    {y: 200, opacity: 0},
    {y: 0, opacity: 1,
        scrollTrigger:{
            trigger: ".ninth-section video",
            start: "0%",
            end: "50%",
            scrub: true
        }
    }
)

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
    {y: 50},
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
    ".image-component-13 .image-component-desc img",
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
fourteenthPage.fromTo(
    ".fourteenth-section-heading .small-text",
    {y: 50},
    {y: 0,},
    "-80%"
)
fourteenthPage.fromTo(
    ".fourteenth-section .astronut-video img",
    {y: 100},
    {y: 0,},
    "<"
)
fourteenthPage.fromTo(
    ".fourteenth-section .image-component-14",
    {y: 80, opacity: 0},
    {y: 0, opacity: 1,
        scrollTrigger:{
            trigger: ".fourteenth-section .astronut-video img",  
            start: "-25%",
            end: "5%",
            scrub: true
        }
    }
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

//15th section
const fifteenthPage= gsap.timeline({
    scrollTrigger:{
        trigger: ".fifteenth-section",  
        start: "-20%",
        end: "-10%",
        scrub: true
    }
})


const fifteenthPageHeadingRight = document.querySelectorAll(`.fifteenth-section-heading .large-text span:nth-of-type(2n)`)
const fifteenthPageHeadingLeft = document.querySelectorAll(`.fifteenth-section-heading .large-text span:nth-of-type(2n-1)`)

fifteenthPage.fromTo(
    fifteenthPageHeadingLeft,
    {x: 0},
    {x: 150, ease: Power4.easeOut}
)
fifteenthPage.fromTo(
    fifteenthPageHeadingRight,
    {x: 0},
    {x: -150, ease: Power4.easeOut},
    "<"
)

const cameraLabels= gsap.timeline({
    scrollTrigger:{
        trigger: ".fifteenth-section",  
        start: "10%",
        end: "60%",
        scrub: true
    }
})

gsap.set("line", {width: "30%", opacity: 0})
cameraLabels.fromTo(
    ".camera-label-1",
    {y: 250, opacity: 0},
    {y: 0, opacity: 1},
)
cameraLabels.fromTo(
    ".camera-label-1 .label-title",
    {y: 250, opacity: 0},
    {y: 0, opacity: 1},
    "<"
)
cameraLabels.fromTo(
    ".camera-label-1 p",
    {y: 250, opacity: 0},
    {y: 0, opacity: 1},
    "-=20%"
)
cameraLabels.fromTo(
    ".camera-label-1 .line",
    {width: "30%", opacity: 0},
    {width: "45rem", opacity: 1},
)

cameraLabels.fromTo(
    ".camera-label-2",
    {y: 250, opacity: 0},
    {y: 0, opacity: 1},
)
cameraLabels.fromTo(
    ".camera-label-2 .label-title",
    {y: 250, opacity: 0},
    {y: 0, opacity: 1},
    "<"
)
cameraLabels.fromTo(
    ".camera-label-2 p",
    {y: 250, opacity: 0},
    {y: 0, opacity: 1},
    "-=20%"
)
cameraLabels.fromTo(
    ".camera-label-2 .line",
    {width: "30%", opacity: 0},
    {width: "45rem", opacity: 1},
)


cameraLabels.fromTo(
    ".camera-label-3",
    {y: 250, opacity: 0},
    {y: 0, opacity: 1},
)
cameraLabels.fromTo(
    ".camera-label-3 .label-title",
    {y: 250, opacity: 0},
    {y: 0, opacity: 1},
    "<"
)
cameraLabels.fromTo(
    ".camera-label-3 p",
    {y: 250, opacity: 0},
    {y: 0, opacity: 1},
    "-=20%"
)
cameraLabels.fromTo(
    ".camera-label-3 .line",
    {width: "30%", opacity: 0},
    {width: "45rem", opacity: 1},
)
cameraLabels.fromTo(
    ".phone-container .base-text",
    {y: 250, opacity: 0},
    {y: 0, opacity: 1},
)


//16th section
gsap.set(".sixteenth-section .sixteenth-section-heading", {opacity: "0", padding: "0rem 2em", top: "-30%"})
gsap.set(".hand-container img", {top: "50%", right: "-30%", transform: "translate(30%, 50%) scale(2)"})

const sixteenthPage= gsap.timeline({
    scrollTrigger:{
        trigger: ".sixteenth-section",  
        start: "0%",
        end: "120%",
        scrub: true,
        pin: true
    }
})

sixteenthPage.fromTo(
    ".sixteenth-section .image-component-16",
    {opacity: 1},
    {opacity: 0},  
)
sixteenthPage.fromTo(
    ".hand-container img",
    {y: "50%"},
    {y: "5%"},
)

sixteenthPage.fromTo(
    ".hand-container img",
    {top: "5%", right: "-30%", transform: "translate(30%, -5%) scale(2)"},
    {top: "5%", right: "-18%", transform: "translate(18%, -5%) scale(1)"}
)
sixteenthPage.fromTo(
    ".sixteenth-section .sixteenth-section-heading",
    {opacity: 0, y: 40},
    {opacity: 1, y: 0},
    "<"
)