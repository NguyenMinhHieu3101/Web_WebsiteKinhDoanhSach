$(document).ready(function () {
    $('.post-wrapper').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: $('.next'),
      prevArrow: $('.prev'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  
    $('.image-wrapper').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: null,
      prevArrow: null,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  });

  /*ĐĂNG KÝ ĐĂNG NHẬP*/
  function show_hide_password(target) {
    var input = document.getElementById("password-input");
    if (input.getAttribute("type") == "password") {
        target.classList.add("view");
        input.setAttribute("type", "text");
    } else {
        target.classList.remove("view");
        input.setAttribute("type", "password");
    }
    return false;
}
/*  BUY */
const itemBook = document.querySelectorAll('.item-book')
const buyBook  = document.querySelectorAll('.buy-book')

itemBook.forEach((item, index)=>{
  item.onmouseover = function(){
    var book = buyBook[index];
    book.classList.add('display-buybook')

  }
})
itemBook.forEach((item, index)=>{
  item.onmouseout = function(){
    const getBookActive = document.querySelector('.buy-book.display-buybook')
    getBookActive.classList.remove('display-buybook')

  }
})