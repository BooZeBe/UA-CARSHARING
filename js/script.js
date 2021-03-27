// webp
function testWebP(callback) {
  let webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height === 2);
  };
  webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function (support) {
  if (support === true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
// /webp


// Burger menu
const menuBtn = document.querySelectorAll('.menu');
const menuLine = document.querySelectorAll('.menu-line');
const menuContent = document.querySelectorAll('.navbar-nav')
const menu = document.querySelectorAll('.menu-content');
const body = document.querySelector('body')

const mediaQuery = window.matchMedia('(max-width: 992px)')
const mediaQuery2 = window.matchMedia('(min-width: 992px)')

function toggleMenu() {
  if (mediaQuery.matches) {
    let isActive = false

    menu.forEach(e => {
      if (e.classList.contains('active')) {
        isActive = true
      }
    })

    closeByBody()
    if (isActive) {
      closeNav()
    } else {
      openNav()
    }
  }
}

function openNav() {
  menuLine.forEach(b => b.classList.add('active'));
  menu.forEach(e => e.classList.add('active'))
  body.classList.add('open-menu')

  menu.forEach(e => e.style.background = 'rgba(0, 0, 0, 0.6)')
  menu.forEach(e => e.style.width = '100%')
  menuContent.forEach(e => e.style.width = '300px')

  menuContent.forEach(e => e.addEventListener('click', e => {
    e.stopPropagation()
  }))
}

function closeNav() {
  menuLine.forEach(b => b.classList.remove('active'));

  menuContent.forEach(e => e.style.width = '0')
  menu.forEach(e => e.style.background = 'none')
  setTimeout(() => {
    body.classList.remove('open-menu')
    menu.forEach(e => e.classList.remove('active'))
    menu.forEach(e => e.style = 'none')
  }, 500)
}

function closeByBody() {
  if (mediaQuery.matches) {
    menu.forEach(e => e.addEventListener('click', e => {
      e.preventDefault()
      e.stopPropagation()
      closeNav()
    }))
  }
}

menuBtn.forEach(e => e.addEventListener('click', toggleMenu));
// /Burger menu


// vertical slick slider
$('.baner-slider').slick({
  vertical: true,
  verticalSwiping: true,
  dots: true,
  arrows: false,
});
// /vertical slick slider


// reviews slick slider
$('.reviews-slider').slick({
  dots: true,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// /reviews slick slider