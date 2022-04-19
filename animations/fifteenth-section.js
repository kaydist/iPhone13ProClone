//15th section


const fifteenthPageHeadingRight = document.querySelectorAll(`.fifteenth-section-heading .large-text span:nth-of-type(2n)`)
const fifteenthPageHeadingLeft = document.querySelectorAll(`.fifteenth-section-heading .large-text span:nth-of-type(2n-1)`)

if(currentScreenSize !== "mobile"){
    const fifteenthPage= gsap.timeline({
        scrollTrigger:{
            trigger: ".fifteenth-section",  
            start: "-20%",
            end: "-10%",
            scrub: true
        }
    })

if(currentScreenSize !== "mobile"){
    fifteenthPage.fromTo(
        fifteenthPageHeadingLeft,
        {x: 0},
        {x: 150}
    )
    fifteenthPage.fromTo(
        fifteenthPageHeadingRight,
        {x: 0},
        {x: -150},
        "<"
    )
}else{
    fifteenthPage.fromTo(
        `.fifteenth-section-heading .large-text span:nth-child(3)`,
        8,
        {x: 40},
        {x: 0}
    )
    fifteenthPage.fromTo(
        `.fifteenth-section-heading .large-text span:nth-child(5)`,
        8,
        {x: 60},
        {x: 0},
        "<"
    )
}
    
    const cameraLabels= gsap.timeline({
        scrollTrigger:{
            trigger: ".fifteenth-section",  
            start: "10%",
            end: "60%",
            scrub: true
        }
    })
    
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
}else{

    const cameraLabels= gsap.timeline({
        scrollTrigger:{
            trigger: ".fifteenth-section .phone-container",  
            start: "-48%",
            end: "100%",
            scrub: true,
            pin: ".fifteenth-section",
            invalidateOnRefresh:true
        }
    })
    
    let line = CSSRulePlugin.getRule(".camera-label-1 .line::after");  
    gsap.set(line, {cssRule:{height: "0%", opacity: 0}})

    cameraLabels.fromTo(
        ".camera-label-1",
        {y: "175%", opacity: 0},
        {y: "75%", opacity: 1},
    )
    cameraLabels.fromTo(
        line,
        {height: "0%", opacity: 0},
        {height: "0%", opacity: 1},
    )
    cameraLabels.to(
        ".camera-label-1",
        {opacity: 0},
    )
    
    
    cameraLabels.fromTo(
        ".camera-label-2",
        {y: "200%", opacity: 0},
        {y: "105%", opacity: 1},
    )
    cameraLabels.fromTo(
        `.camera-label-2 ${line}`,
        {height: "0%", opacity: 0},
        {height: "15.3rem", opacity: 1},
    )
    cameraLabels.to(
        ".camera-label-2",
        {opacity: 0},
    )
    
    
    cameraLabels.fromTo(
        ".camera-label-3",
        {y: "215%", opacity: 0},
        {y: "115%", opacity: 1},
    )
    cameraLabels.fromTo(
        `.camera-label-3 ${line}`,
        {height: "0%", opacity: 0},
        {height: "16.3rem", opacity: 1},
    )
    cameraLabels.to(
        ".camera-label-3",
        {opacity: 0},
    )
}