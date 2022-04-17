//third section

const thirdPageIn = gsap.timeline({
    scrollTrigger:{
        trigger: ".third-section",        
        start: "-70%",
        end: "0%",
        scrub: true,
    }
})


if (currentScreenSize !== "mobile"){
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
}else{
    thirdPageIn.fromTo(
        ".small-phone",
        {x: "-50%"},
        {x: "-25%", duration: 2},
    )
    thirdPageIn.fromTo(
        ".large-phone",
        {x: "50%"},
        {x: "25%", duration: 2},
        "<"
    )
    thirdPageIn.fromTo(
        ".left-text",
        {x: "20%", opacity: 0},
        {x: "-3%", opacity: 1, duration: 2},
        "<"
    )
    thirdPageIn.fromTo(
        ".right-text",
        {x: "-30%", opacity: 0},
        {x: "-0%", opacity: 1, duration: 2},
        "<"
    )
}

const thirdPageOut = gsap.timeline({
    scrollTrigger:{
        trigger: ".third-section",
        start: "0%",
        end: "100%",
        scrub: true,
        anticipatePin: 1,
        pin: true,
        pinSpacing: false
    }
})

if (currentScreenSize !== "mobile"){
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
}else{
    thirdPageOut.fromTo(
        ".small-phone",
        {x: "-25%"},
        {x: "-50%", duration: 2},
    )
    thirdPageOut.fromTo(
        ".large-phone",
        {x: "25%"},
        {x: "50%", duration: 2},
        "<"
    )
    thirdPageOut.fromTo(
        ".left-text",
        {x: "-3%", opacity: 1},
        {x: "20%", opacity: 0, duration: 2},
        "<"
    )
    thirdPageOut.fromTo(
        ".right-text",
        {x: "-0%", opacity: 1},
        {x: "-30%", opacity: 0, duration: 2},
        "<"
    )
}