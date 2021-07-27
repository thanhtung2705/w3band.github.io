
$(document).ready(function() {
  // banner slider
  $('.js-slide').slick({
    fade: true,
    // prevArrow: '<span class="slick-prev">prev</span>',
    // nextArrow: '<span class="slick-next">next</span>',
    dots: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});

const buyBtns = document.querySelectorAll('.js-buy-ticket');
const jsModal = document.querySelector('.js-modal');
const jsModalContainer = document.querySelector('.js-modal-container');
const jsCloseModal = document.querySelector('.js-modal-close');

// Hiển thị modal(add class open)
function showBuyTickets() {
  jsModal.classList.add('open');
}


// Hàm ẩn modal (remove class open)
function hideBuyTickets() {
  jsModal.classList.remove('open')
}

// Lặp qua từng thẻ button và nghe click
for(const buyBtn of buyBtns) {
  buyBtn.addEventListener('click', showBuyTickets)
}

// Nghe hành vi click vào button close
jsCloseModal.addEventListener('click', hideBuyTickets)

jsModal.addEventListener('click', hideBuyTickets)

jsModalContainer.addEventListener('click', function(event) {
  event.stopPropagation()
});

var header = document.getElementById('header');
var mobileMenuBtn = document.getElementById('mobile-menu-btn');
var headerHeight = header.clientHeight;

// Đóng/Mở mobile menu
mobileMenuBtn.onclick = function() {
  var isClosed = header.clientHeight === headerHeight;

  if (isClosed) {
    header.style.height = 'auto';
  } else {
    header.style.height = null;
  }
}

// Tự động đóng mở menu item
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for(var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];

  menuItem.onclick = function(event) {
    var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
    if (!isParentMenu) {
      header.style.height = null;
    } else {
      event.preventDefault();
    }
  }
}