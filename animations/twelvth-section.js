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

// function for changing vid based on screen size
const video = document.querySelectorAll(".twelvth-section .astronut-video video")
//add source to video tag
function addSourceToVideo(element, src) {
    var source = document.createElement('source');
    source.src = src;
    source.type = 'video/mp4';
    element.appendChild(source);
	
}

//determine screen size and select mobile or desktop vid
function whichSizeVideo(element, src) {
	if (currentScreenSize !== "mobile" ) {
		addSourceToVideo( element, src.dataset.desktopVid);
	} else {
		addSourceToVideo(element, src.dataset.mobileVid);
	}
}

function videoSize() {
    if (astronutVideo !== undefined) {
    video.forEach(function(element, index) {
            whichSizeVideo(  
                element, //element
                element  //src locations
            );	
        });
    }
}
videoSize()



document.addEventListener("DOMContentLoaded", function(){
    if(currentScreenSize !== "mobile"){
        gsap.set(".twelvth-section .image-component-10", {margin: "0em 0 6rem", y: '25%'})  
    }else{
        gsap.set(".twelvth-section .image-component-10", {margin: "18rem 0 6rem"})    
    }
})
// gsap.set(".twelvth-section .astronut-video", {transform: "translateY(-12rem)"})
gsap.set(".twelvth-section", {minHeight: "90rem"})
if(currentScreenSize !== 'mobile'){
    gsap.set(".twelvth-section .astronut-video", {y: "-25%"})
}else{
    gsap.set(".twelvth-section .astronut-video", {y: "-30%"})
}
const twelvthPageVideo = gsap.timeline({
    scrollTrigger:{
        trigger: ".twelvth-section .astronut-video video",  
        onEnter: ()=> astronutVideo.pause(),
        onEnterBack: ()=> astronutVideo.pause(),
        onLeaveBack: ()=> astronutVideo.play(),
        start: "-13%",
        endTrigger: ".twelvth-section .astronut-video",  
        end: "20%",
        scrub: true,
        anticipatePin: 1,
        pin: ".twelvth-section",
    }
})



if(currentScreenSize !== "mobile"){
    document.addEventListener("DOMContentLoaded", function(){
        gsap.set(".twelvth-section .astronut-video", {transform: "scale(4)"})
        })
    twelvthPageVideo.fromTo(
        ".twelvth-section .astronut-video",
        {y: "-25%", transform: "scale(4)", transformOrigin: "top"},
        {y: "35%", transform: "scale(1)", transformOrigin: "top"},
    )
}else{
    document.addEventListener("DOMContentLoaded", function(){
        gsap.set(".twelvth-section .astronut-video", {transform: "scale(3.5)"})
        })
    twelvthPageVideo.fromTo(
        ".twelvth-section .astronut-video",
        {y: "-30%", transform: "scale(3.5)", transformOrigin: "top"},
        {y: "30%", transform: "scale(1)", transformOrigin: "top"},
    )

}

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