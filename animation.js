//hero page
let currentScreenSize = "mobile";
if (window.innerWidth >= "768") {
  currentScreenSize = "notMobile";
} else {
  currentScreenSize = "mobile";
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

function animateText(elem) {}

document.addEventListener("DOMContentLoaded", function () {
  gsap.utils.toArray(".animated-text").forEach((elem) => {
    hide(elem);
    var y = 50;
    elem.style.transform = "translateY(" + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(
      elem,
      { y: y, autoAlpha: 0 },
      {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
        scrollTrigger: {
          trigger: elem,
          start: "top 90%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  });
});

const firstPageIN = gsap.timeline();
firstPageIN.fromTo(".hero-text-1", { opacity: 0 }, { opacity: 1, duration: 2 });
firstPageIN.fromTo(
  ".hero-video",
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 0.5 },
  "<"
);
firstPageIN.to(".hero-text-1", { opacity: 0, duration: 2, delay: 0.5 });
firstPageIN.to(".hero-animation-container img", { display: "block", delay: 2 });
firstPageIN.to(".hero-animation-container video", { display: "none" }, "<");

const firstPageOut = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-section",
    start: "60%",
    end: "100%",
    anticipatePin: 1,
    pin: true,
    pinSpacing: false,
  },
});

//eight page
// document.addEventListener("DOMContentLoaded", function () {
//   if (currentScreenSize !== "mobile") {
//     gsap.set(".eighth-section img", { y: "-150%" });
//     gsap.set(".eighth-section", { padding: "0 0 0em" });
//     gsap.set(".eighth-section", { minHeight: "250vh" });
//     gsap.set(".eighth-section p", { padding: "60vh 5em 0" });
//     const eighthPageImgIn = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".eighth-section",
//         markers: true,
//         start: "top 70%",
//         // endTrigger: ".eighth-section img",
//         end: "top 60%",
//         scrub: true,
//       },
//     });
//     eighthPageImgIn.fromTo(".eighth-section img", { y: "-150%" }, { y: "-190%" });

//     eighthPageImgIn.fromTo(
//       ".eighth-section img",
//       { y: "-195%" },
//       {
//         y: "-80%",
//         scrollTrigger: {
//           trigger: ".eighth-section img",
//           markers: true,
//           start: "-190% 80%",
//           endTrigger: ".eighth-section p",
//           end: "60% 80%",
//           scrub: true,
//           anticipatePin: 1,
//           pin: ".eighth-section",
//           pinSpacing: "false",
//         },
//       }
//     );

//     // const eighthPageImgOut = gsap.timeline({
//     //   scrollTrigger: {
//     //     trigger: ".eighth-section",
//     //     markers: true,
//     //     start: "top",
//     //     endTrigger: ".eighth-section p",
//     //     end: "60% 80%",
//     //     scrub: true,
//     //     anticipatePin: 1,
//     //     pin: ".eighth-section",
//     //     pinSpacing: "false",
//     //   },
//     // });
//     // eighthPageImgOut.to(".eighth-section p", { y: "-30%" }, "<");
//   } else {
//     const eighthPageImgIn = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".eighth-section",
//         start: "top 90%",
//         end: "top 60%",
//         scrub: true,
//       },
//     });
//     gsap.set(".eighth-section p", { padding: "45vh 5% 2em" });
//     eighthPageImgIn.fromTo(".eighth-section img", { y: "10%" }, { y: 0 });
//     gsap.set(".eighth-section img", { top: "5%" });
//     eighthPageImgIn.fromTo(
//       ".eighth-section img",
//       { y: 0 },
//       {
//         y: -50,
//         scrollTrigger: {
//           trigger: ".eighth-section img",
//           start: "top 80%",
//           endTrigger: ".eighth-section p",
//           end: "bottom 75%",
//           scrub: true,
//           pin: ".eighth-section img",
//           pinSpacing: "false",
//         },
//       }
//     );
//   }
// });

//11th page
const eleventhPage = gsap.timeline({
  scrollTrigger: {
    trigger: ".eleventh-section",
    start: "5%",
    end: "70%",
    scrub: true,
  },
});

gsap.fromTo(
  ".image-component-7 img",
  { y: 100 },
  {
    y: -60,
    scrollTrigger: {
      trigger: ".eleventh-section",
      start: "-30%",
      end: "35%",
      scrub: true,
    },
  }
);
eleventhPage.fromTo(
  ".image-component-8 .image-component-desc",
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1 }
);
eleventhPage.fromTo(
  ".image-component-9 .image-component-desc-1",
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1 }
);
eleventhPage.fromTo(
  ".image-component-9 .image-component-desc-2",
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1 }
);
