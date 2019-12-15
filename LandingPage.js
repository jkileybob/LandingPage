// open sidenav onclick
function showMobileNav() {
  let menu = document.getElementById("nav-menu");

  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

///////// onclick cloce mobile-nav-menu:
function closeMenu() {
  let menu = document.getElementById("nav-menu");

  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    null
  }
}


///////// scroll to form onclick:
function scrollToForm() {
  let form = document.querySelector('.form');

  form.scrollIntoView({
    behavior: 'smooth'
  });
};

///////// scroll to form and input email onclick:
function inputEmail() {
  let userEmail = document.getElementById("hero-input").value;
  let emailInput = document.getElementById("email-input");
  let emailInputMobile = document.getElementById("email-input-mobile");
  let form = document.querySelector('.form');

  emailInput.value = userEmail
  emailInputMobile.value = userEmail

  form.scrollIntoView({
    behavior: 'smooth'
  });
}

///////// changes sign up form to thanks and share form onClick of submit button:

function sayThanks(){
  document.querySelector(".form-container").style.display = "none"
  document.querySelector(".mobile-form").style.display = "none"
  document.querySelector(".thanks").style.display = "flex"
}


////////////////////////// swipe motion media-box mobile:

// let mediaCont = document.getElementsByClassName("media-box-container");
//
// // create a simple instance
// // by default, it only adds horizontal recognizers
// let mc = new Hammer(mediaCont);
//
// // listen to events...
// // mc.on("panleft panright tap press", function(ev) {
// //     myElement.textContent = ev.type +" gesture detected.";
// // });
//
// mc.on("panleft panright tap press", function(ev) {
//   mediaCont.textContent = ev.type +" gesture detected.";
// });















/////////////// changes quote carasoul onclick:

// needs to be consolidated. code is bulky and concepts are repetive.
// needs to function for more than 2 items.

function prevQuote() {
  let one = document.getElementById('quote-1');
  let two = document.getElementById('quote-2');

  two.style.cssText = "align-self: center;position: absolute;opacity: 0;-webkit-animation: fadeout 1s; /* Safari, Chrome and Opera > 12.1 */-moz-animation: fadeout 1s; /* Firefox < 16 */-ms-animation: fadeout 1s; /* Internet Explorer */-o-animation: fadeout 1s; /* Opera < 12.1 */animation: fadeout 1s;";
  one.style.cssText = "align-self: center;position: absolute;opacity: 1;-webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */-moz-animation: fadein 2s; /* Firefox < 16 */-ms-animation: fadein 2s; /* Internet Explorer */-o-animation: fadein 2s; /* Opera < 12.1 */animation: fadein 2s;"
};

function nextQuote() {

  let one = document.getElementById('quote-1');
  let two = document.getElementById('quote-2');

  one.style.cssText = "align-self: center;position: absolute;opacity: 0;-webkit-animation: fadeout 1s; /* Safari, Chrome and Opera > 12.1 */-moz-animation: fadeout 1s; /* Firefox < 16 */-ms-animation: fadeout 1s; /* Internet Explorer */-o-animation: fadeout 1s; /* Opera < 12.1 */animation: fadeout 1s;";
  two.style.cssText = "align-self: center;position: absolute;opacity: 1;-webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */-moz-animation: fadein 2s; /* Firefox < 16 */-ms-animation: fadein 2s; /* Internet Explorer */-o-animation: fadein 2s; /* Opera < 12.1 */animation: fadein 2s;"
};

///////////////////////////////// centers map, adds marker:

function myMap() {
  let map = new google.maps.Map(document.getElementById('googleMap'), {
    center: {
      lat: 28.5383,
      lng: -81.3792
    },
    zoom: 10
  });

  let marker = new google.maps.Marker({
    position: {
      lat: 28.4909268,
      lng: -80.5800275
    },
    map: map
  })
}
