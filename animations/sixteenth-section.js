//16th section
document.addEventListener("DOMContentLoaded", function(){
    if(currentScreenSize !== "mobile"){
        gsap.set(".sixteenth-section .sixteenth-section-heading", {opacity: "0", padding: "0rem 2em", top: "-30%"})
        gsap.set(".hand-container img", {y: "-25%", x: "50%", transform: "scale(2)"})
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
            {y: "-25%"},
        )
        
        sixteenthPage.fromTo(
            ".hand-container img",
            {x: "50%", transform: "scale(2)"},
            {x: "30%", transform: "scale(1)"}
        )
        sixteenthPage.fromTo(
            ".sixteenth-section .sixteenth-section-heading",
            {opacity: 0, y: 40},
            {opacity: 1, y: 0},
            "<"
        )
    }else{
        gsap.set(".sixteenth-section .sixteenth-section-heading", {opacity: "0", padding: "0rem 5%"})
        gsap.set(".hand-container img", {y: "70%", x: "0", transform: "scale(2)", transformOrigin: "left top"})
        // gsap.set(".hand-container img", {top: "90%", left: "45%", transform: "translate(-45%, 90%) scale(2)", transformOrigin: "left top"})
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
            { x: "-20%", transform: "scale(2)"},
            { x: "0%", transform: "scale(1)"}
        )
        sixteenthPage.fromTo(
            ".sixteenth-section .sixteenth-section-heading",
            {opacity: 0, y: 150},
            {opacity: 1, y: "-300%"},
            "<"
        )
    }
})