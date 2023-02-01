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

// code js cho hien thi button mua hang trên mỗi sản phẩm
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


// js cho việc lắng nghe trên nút menu
var header = document.querySelector('.wrapper__header')

var btnMenu = document.querySelector('.mobile-menu-btn')
var navMenu = document.querySelector('.nav')

var heightHeader = header.clientHeight;
var flag = 0;

btnMenu.onclick = function(){
  if(!flag){
    navMenu.style.display= 'block';
    header.style.height = 'auto';
    flag = 1;
  }
  else{
    navMenu.style.display= 'none';
    header.style.height = null;
    flag = 0;
  }


} 


// xử lí hover vô đăng kí, đăng nhập đổi màu icon person
var user = document.querySelector('.fa-user')
var signIn = document.querySelector('.signIn-register')

user.onmouseover = function(){
  user.style.color = 'rgb(249, 9, 9)';
  signIn.style.color = 'rgb(249, 9, 9)';

}
user.onmouseout = function(){
  user.style.color = '#000';
  signIn.style.color = '#000';

}
signIn.onmouseover = function(){
  user.style.color = 'rgb(249, 9, 9)';
  signIn.style.color = 'rgb(249, 9, 9)';

}
signIn.onmouseout = function(){
  user.style.color = '#000';
  signIn.style.color = '#000';

}

// mảng dữ liệu chưa thông tin sách


var book = [
  {
    Hinhanh:'./images/brief_answers_to_the_big_questions_1_2019_03_07_16_03_27.jpg',
    Ten: 'Brief Answers to...',
    Gia:'$12.54',
    Daban: 245,
    Tacgia:'Stephen Hawking',
    Namxuatban:'2020',
    Nhaxuatban:'Elsevier',
    Hinhthuc:'Hardcover',
    Noidung:'Khoa hoc',
  },
  {
    Hinhanh:'./images/apollo.jpeg',
    Ten: 'Apollo Remastered',
    Gia:'£53.99',
    Daban: 423,
    Tacgia:'Andy Saunders',
    Namxuatban:'2020',
    Nhaxuatban:'Elsevier',
    Hinhthuc:'Hardback',
    Noidung:'Khoa hoc',
  },
  {
    Hinhanh:'./images/carlorovelli.jpeg',
    Ten: 'Helgoland',
    Gia:'£8.99',
    Daban: 245,
    Tacgia:'Carlo Rovelli',
    Namxuatban:'2019',
    Nhaxuatban:'Elsevier',
    Hinhthuc:'Paperback',
    Noidung:'Khoa hoc',
  },
  {
    Hinhanh:'./images/concorde.jpeg',
    Ten: 'Concorde',
    Gia:'£20.00',
    Daban: 126,
    Tacgia:'Mike Bannister',
    Namxuatban:'2018',
    Nhaxuatban:'Elsevier',
    Hinhthuc:'Hardback',
    Noidung:'Khoa hoc',
  },
  {
    Hinhanh:'./images/lift3.0.jpeg',
    Ten: 'Life 3.0',
    Gia:'£12.99',
    Daban:534,
    Tacgia:'Max Tegmark',
    Namxuatban:'2021',
    Nhaxuatban:'Elsevier',
    Hinhthuc:'Hardback',
    Noidung:'Khoa hoc',
  },
  {
    Hinhanh:'./images/starrymessenger.jpeg',
    Ten: 'Starry Messenger',
    Gia:'£16.99',
    Daban: 234,
    Tacgia:'Neil deGrasse Tyson',
    Namxuatban:'2021',
    Nhaxuatban:'Elsevier',
    Hinhthuc:'Hardback',
    Noidung:'Khoa hoc',
  },
  //hang sach thu 2
  {
    Hinhanh:'./images/theyearinspace.jpeg',
    Ten: 'The Year in Space',
    Gia:'£12.99',
    Daban: 106,
    Tacgia:'The Supermassive',
    Namxuatban:'2017',
    Nhaxuatban:'Elsevier',
    Hinhthuc:'Hardback',
    Noidung:'Khoa hoc',
  },
  {
    Hinhanh:'./images/spineofthedragon.jpg',
    Ten: 'Spine of the Dragon',
    Gia:'£53.99',
    Daban: 120,
    Tacgia:'Kevin J. Anderson',
    Namxuatban:'2018',
    Nhaxuatban:'Elsevier',
    Hinhthuc:'Hardback',
    Noidung:'Khoa hoc',
  },
  {
    Hinhanh:'./images/thedevilyounow.jpeg',
    Ten: 'The Devil You Know',
    Gia:'£7.49',
    Daban: 122,
    Tacgia:'Gwen Adshead',
    Namxuatban:'2020',
    Nhaxuatban:'Elsevier',
    Hinhthuc:'Paperback',
    Noidung:'Khoa hoc',
  },
  {
    Hinhanh:'./images/tamthe.jpg',
    Ten: 'Tam Thể',
    Gia:'£5.00',
    Daban: 110,
    Tacgia:'Lưu Từ Hân',
    Namxuatban:'2019',
    Nhaxuatban:'Elsevier',
    Hinhthuc:'Paperback',
    Noidung:'Khoa hoc',
  },
  {
    Hinhanh:'./images/cacthegioisongsong.jpg',
    Ten: 'Các Thế Giới Song...',
    Gia:'94.100đ',
    Daban: 110,
    Tacgia:'Michio Kaku',
    Namxuatban:'2018',
    Nhaxuatban:'Elsevier',
    Hinhthuc:'Paperback',
    Noidung:'Khoa hoc',
  },
  {
    Hinhanh:'./images/frozenplanet2.jpeg',
    Ten: 'Frozen Planet II',
    Gia:'£55.00',
    Daban: 110,
    Tacgia:'Mark Brownlow',
    Namxuatban:'2020',
    Nhaxuatban:'Elsevier',
    Hinhthuc:'Hardback',
    Noidung:'Khoa hoc',
  },
  // hang sach thu 3
  {
    Hinhanh:'./images/2022_11_03_09_31_40_1-390x510.jpg',
    Ten: "An Astronaut's...",
    Gia:'311.400đ',
    Daban: 108,
    Tacgia:'Chris Hadfield',
    Namxuatban:'2019',
    Nhaxuatban:'Elsevier',
    Hinhthuc:'Paperback',
    Noidung:'Khoa hoc',
  },
  {
    Hinhanh:'./images/haivandamduoidaybien.jpg',
    Ten: 'Hai Vạn Dặm...',
    Gia:'89.000đ',
    Daban: 123,
    Tacgia:'Jules Verne',
    Namxuatban:'2018',
    Nhaxuatban:'Elsevier',
    Hinhthuc:'Paperback',
    Noidung:'Khoa hoc',
  },
  
  {
    Hinhanh:'./images/luattamthuc.jpg',
    Ten: 'LUẬT TÂM THỨC',
    Gia:'211.000đ',
    Daban: 110,
    Tacgia:'Ngô Sa Thạch',
    Namxuatban:'2019',
    Nhaxuatban:'Elsevier',
    Hinhthuc:'Paperback',
    Noidung:'Khoa hoc',
  },
  {
    Hinhanh:'./images/PhatMinhCuoiCung.jpg',
    Ten: 'Phát Minh Cuối...',
    Gia:'138.750đ',
    Daban: 113,
    Tacgia:'James Barrat',
    Namxuatban:'2020',
    Nhaxuatban:'Elsevier',
    Hinhthuc:'Paperback',
    Noidung:'Khoa hoc',
  },
  {
    Hinhanh:'./images/2020_05_12_15_48_16_1-390x510.jpg',
    Ten: 'The Evolutionary...',
    Gia:'₹2,736.95',
    Daban: 100,
    Tacgia:'Nicholas A. Christakis',
    Namxuatban:'2017',
    Nhaxuatban:'Elsevier',
    Hinhthuc:'Hardcover',
    Noidung:'Khoa hoc',
  },
  {
    Hinhanh:'./images/thebiggesstideasintheuniverse.jpeg',
    Ten: 'The Biggest Ideas...',
    Gia:'£16.99',
    Daban: 128,
    Tacgia:'Sean Carroll',
    Namxuatban:'2020',
    Nhaxuatban:'Elsevier',
    Hinhthuc:'Hardback',
    Noidung:'Khoa hoc',
  },

]

// local storage
localStorage.clear();
localStorage.setItem('book',JSON.stringify(book))

var Sachs = JSON.parse(localStorage.getItem('book'))

var images = document.querySelectorAll('.img-book img')
var nameSachs = document.querySelectorAll('.info-name-book')
var tacGias = document.querySelectorAll('.info-author')
var gias = document.querySelectorAll('.info-gia')
var materials = document.querySelectorAll('.info-material')

Sachs.forEach((sach,index)=>{
  hinhSach = images[index];
  tenSach = nameSachs[index];
  tacGia = tacGias[index];
  gia = gias[index];
  material = materials[index];

  hinhSach.setAttribute("src", sach.Hinhanh);
  tenSach.innerHTML = sach.Ten;
  tacGia.innerHTML = sach.Tacgia;
  gia.innerHTML = sach.Gia;
  material.innerHTML = sach.Hinhthuc;


})



