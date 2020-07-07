// onclick open mobile nav
function showMobileNav() {
  let popUpMenu = document.getElementById("nav-menu");
  let input = document.getElementById("hero-input");
  let chevronDown = document.getElementById("chevron-down");

  if (popUpMenu.style.display === "flex") {
    popUpMenu.style.display = "none";
    input.placeholder = "Enter your email";
    chevronDown.style.display = "flex";
  } else {
    popUpMenu.style.display = "flex";
    input.placeholder = "";
    chevronDown.style.display = "none";
  }
}

///////// onclick close mobile-nav-menu:
function closeMenu() {
  let popUpMenu = document.getElementById("nav-menu");
  let input = document.getElementById("hero-input");
  let chevronDown = document.getElementById("chevron-down");

  if (popUpMenu.style.display === "flex") {
    popUpMenu.style.display = "none";
    input.placeholder = "Enter your email";
    chevronDown.style.display = "flex";
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
  closeMenu();
};

function scrollToMap() {
  let map = document.querySelector('.map');

  map.scrollIntoView({
    behavior: 'smooth'
  });
  closeMenu();
};

///////// scroll to form and input email onclick:
function inputEmail() {
  let userEmail = document.getElementById("hero-input").value;
  let emailInput = document.getElementById("email");
  let form = document.querySelector('.form');
  let changeFocus = document.getElementById('first-name');

  emailInput.value = userEmail;

  setTimeout(function(){ changeFocus.focus(); }, 1000);
  scrollToForm();

}

///////// changes sign up form to thanks and share form onClick of submit button:

function sayThanks(){
  document.querySelector(".form-container").style.display = "none"
  document.querySelector(".thanks").style.display = "flex"
}


//////////////  load more media boxes:
function loadMore() {
  let button = document.getElementById("load-more");
  let container = document.getElementById("load-more-cont");

  setTimeout(function(){ button.style.display = "none";
  container.style.display = "none";
  }, 1000);
  button.style.cssText = "opacity: 0;-webkit-animation: fadeout 0.75s; /* Safari, Chrome and Opera > 12.1 */-moz-animation: fadeout 0.75s; /* Firefox < 16 */-ms-animation: fadeout 0.75s; /* Internet Explorer */-o-animation: fadeout 0.75s; /* Opera < 12.1 */animation: fadeout 0.75s;";

  let boxes = document.querySelector('#media-box-cont-2');

  setTimeout(function(){ boxes.style.display = "flex"; }, 1000);
  boxes.style.cssText = "opacity: 1;-webkit-animation: fadein 0.75s; /* Safari, Chrome and Opera > 12.1 */-moz-animation: fadein 0.75s; /* Firefox < 16 */-ms-animation: fadein 0.75s; /* Internet Explorer */-o-animation: fadein 0.75s; /* Opera < 12.1 */animation: fadein 0.75s;"

}

/////////////// changes quote carasoul onclick:

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

/////////////////////////////////   centers map to orlando on initialize, then adds marker
/////////   centers map around marker on browser resize

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

  google.maps.event.addDomListener(window, "resize", () => {
      map.setCenter({
        lat: marker.position.lat(),
        lng: marker.position.lng()
      }
    )
  })

} ////////// end function myMap
