//16th section
document.addEventListener("DOMContentLoaded", function(){
    if(currentScreenSize !== "mobile"){
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
    }else{
        gsap.set(".sixteenth-section .sixteenth-section-heading", {opacity: "0", padding: "0rem 5%"})
        gsap.set(".hand-container img", {top: "90%", left: "45%", transform: "translate(-45%, 90%) scale(2)", transformOrigin: "left top"})
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
            {y: "-45%"},
        )
        
        sixteenthPage.fromTo(
            ".hand-container img",
            {top: "-45%", left: "45%", transform: "translate(-45%, 45%) scale(2)"},
            {top: "-45%", left: "35%", transform: "translate(-15%, 45%) scale(1)"}
        )
        sixteenthPage.fromTo(
            ".sixteenth-section .sixteenth-section-heading",
            {opacity: 0, y: 150},
            {opacity: 1, y: "-300%"},
            "<"
        )
    }
})