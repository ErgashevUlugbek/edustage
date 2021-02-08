$(document).ready(function () {
  // Add .sticky class to header
  const header = $("header");
  $(window).on("scroll", () => {
    if ($(window).scrollTop() > 140) {
      header.addClass("sticky");
    } else {
      header.removeClass("sticky");
    }
  });

  // Courses section carousel
  $("#courses-carousel").owlCarousel({
    items: 3,
    loop: true,
    margin: 30,
    nav: true,
    navText: [
      `<img src="../assets/images/prev-btn.webp" aria-label="Previous">`,
      `<img src="../assets/images/next-btn.webp" aria-label="Next">`,
    ],
    dots: false,
    autoplay: true,
    autoplayspeed: 3000,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  // Clients section carousel
  $("#clients-carousel").owlCarousel({
    items: 2,
    loop: true,
    autoplay: true,
    autoplayspeed: 3000,
    margin: 30,
    dots: true,
    dotsEach: 2,
    smartSpeed: 3000,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      768: {
        items: 2,
      },
    },
  });

  // Search block above navbar
  const searchForm = $(".search-form");
  $(".ul-search").click(() => {
    if (
      typeof searchForm.attr("hidden") === typeof undefined ||
      searchForm.attr("hidden") === false
    ) {
      searchForm.slideToggle();
    }
    searchForm.removeAttr("hidden");
  });
  $(".close-search-form").click(() => {
    searchForm.slideUp();
  });

  // Navbar toggler icon
  const navbarToggler = $(".navbar-toggler");
  navbarToggler.click(() => {
    $(".navbar-toggler span:first-child").toggleClass("rotate-bottom");
    $(".navbar-toggler span:nth-child(2)").toggleClass("display-none");
    $(".navbar-toggler span:last-child").toggleClass("rotate-top");
  });

  // Placing map
  let script = document.createElement("script");
  script.src =
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyD_Hwls9nYTRjXzBo9rUiNPXtQPGmidesg&callback=initMap";
  script.defer = true;

  // Attach your callback function to the `window` object
  let map;
  window.initMap = function () {
    map = new google.maps.Map($(".map-place")[0], {
      center: {
        lat: -34,
        lng: 150,
      },
      zoom: 8,
    });
  };

  // Append the 'script' element to 'head'
  document.head.appendChild(script);
});
