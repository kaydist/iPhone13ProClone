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
        gsap.set(".twelvth-section .image-component-10", {margin: "10em 0 6rem"})  
    }else{
        gsap.set(".twelvth-section .image-component-10", {margin: "25rem 0 6rem"})    
    }
})
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
        anticipatePin: 1,
        pin: true,
        pinSpacing: false
    }
})

gsap.set(".twelvth-section .astronut-video", {transform: "scale(3.5)"})
gsap.set(".twelvth-section .twelvth-section-heading", {padding: "6rem 0 0"})

twelvthPageVideo.fromTo(
    ".twelvth-section .astronut-video",
    {transform: "translateY(-12rem) scale(3.5)", transformOrigin: "top"},
    {transform: "translateY(30%) scale(1)", transformOrigin: "top"},
)

twelvthPageVideo.fromTo(
    ".twelvth-section .astronut-video img",
    {opacity: 0},
    {opacity: 1, 
        scrollTrigger:{
            trigger: ".twelvth-section .astronut-video video",
            endTrigger: ".twelvth-section .twelvth-section-heading",
            start: "0%",
            end: "0%",
            scrub: true,
        }
    }
)