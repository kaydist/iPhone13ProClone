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

if(window.innerWidth >= "768"){
    const fouthPageOut = gsap.timeline({
        scrollTrigger:{
            trigger: ".fourth-section",        
            start: "0%",
            end: "100%",
            scrub: true,
            anticipatePin: 1,
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
            anticipatePin: 1,
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
            anticipatePin: 1,
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