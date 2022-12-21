var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
}
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


