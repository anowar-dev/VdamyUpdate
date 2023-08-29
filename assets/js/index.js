//=========== This section for mobile menu ============

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//=========== This section for Back to top btn ============
let mybutton = document.getElementById("topBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//================== Owl Carousel for About bottom Js=================
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});

//================== Slick Slider Js=================

$(document).ready(function () {
  $(".single-item").slick({
    autoplay: true,
    autoplayTimeout: 2000,
    dots: true,
    infinite: true,
  });
});

//============= Inner Video===============
// 1. manually src set on button and get the src when popup btn click
// --------------------------------------------------------------------

// Gets the video src from the data-src on each button
var $videoSrc;
const popup_open_btn = document.getElementById("popup_open_btn");
popup_open_btn.addEventListener("click", function (event) {
  $videoSrc = $(this).data("src");
  console.log($videoSrc);
});

// when the modal is opened autoplay it
const video_modal = document.getElementById("video_modal");
const iframeID = document.getElementById("iframID");

video_modal.addEventListener("shown.bs.modal", function (event) {
  iframeID.setAttribute(
    "src",
    $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
  );
});

// stop playing the youtube video when I close the modal
video_modal.addEventListener("hide.bs.modal", function (event) {
  iframeID.setAttribute("src", $videoSrc);
});


