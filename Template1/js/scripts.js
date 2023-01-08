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
const buyBook = document.querySelectorAll('.buy-book')

itemBook.forEach((item, index) => {
  item.onmouseover = function () {
    var book = buyBook[index];
    book.classList.add('display-buybook')

  }
})
itemBook.forEach((item, index) => {
  item.onmouseout = function () {
    const getBookActive = document.querySelector('.buy-book.display-buybook')
    getBookActive.classList.remove('display-buybook')

  }
})

// LOCAL STORAGE

let sach = [];
sach.push({
  hinhanh: '../images/newyear/1Q84.png',
  ten: '1Q84',
  giaban: '138,000đ',
  sale: '-10%',
  giasale: '124,200đ',
  daban: '56',
  tacgia: 'Haruki Murakami',
  namxb: '2019',
  nxb: 'NXB Hội Nhà Văn',
  hinhthuc: 'Bìa Mềm',
  noidung: '',
  phienban: '',
  theloai: '',
  mota: ''
})
sach.push({
  hinhanh: '../images/newyear/Arsène_Lupin_sieu_trom_dao_hoa.png',
  ten: 'Arsène Lupin Siêu Trộm Đào Hoa',
  giaban: '89,000đ',
  sale: '-10%',
  giasale: '81,900đ',
  daban: '56',
  tacgia: 'Maurice Leblanc',
  namxb: '2020',
  nxb: 'NXB Văn Học',
  hinhthuc: 'Bìa Mềm',
  noidung: '',
  phienban: '',
  theloai: '',
  mota: ''
})
sach.push({
  hinhanh: '../images/newyear/khu_vuon_bi_mat.png',
  ten: 'Khu Vườn Bí Mật',
  giaban: '149,000đ',
  sale: '-10%',
  giasale: '134,100đ',
  daban: '56',
  tacgia: 'Frances Hodgson Burnett',
  namxb: '2022',
  nxb: 'Dân Trí',
  hinhthuc: 'Bìa Mềm',
  noidung: '',
  phienban: '',
  theloai: '',
  mota: ''
})
sach.push({
  hinhanh: '../images/newyear/yeu_nhau_trong_lo_au.png',
  ten: 'Yêu Nhau Trong Lo Âu',
  giaban: '125,000đ',
  sale: '-10%',
  giasale: '112,500đ',
  daban: '56',
  tacgia: 'Nguyễn Đông Thức',
  namxb: '2022',
  nxb: 'Trẻ',
  hinhthuc: 'Bìa Mềm',
  noidung: '',
  phienban: '',
  theloai: '',
  mota: ''
})
sach.push({
  hinhanh: '../images/newyear/thuong_duong.jpg',
  ten: 'Thượng Dương',
  giaban: '108,000đ',
  sale: '-37%',
  giasale: '68,040đ',
  daban: '56',
  tacgia: 'Hoàng Yến',
  namxb: '2020',
  nxb: 'NXB Phụ Nữ Việt Nam',
  hinhthuc: 'Bìa Mềm',
  noidung: '',
  phienban: '',
  theloai: '',
  mota: ''
})
sach.push({
  hinhanh: '../images/newyear/lu_tr_hu_nhat_qua_dat.png',
  ten: 'Lũ Trẻ Hư Nhất Quả Đất',
  giaban: '185,000đ',
  sale: '-10%',
  giasale: '166,500đ',
  daban: '56',
  tacgia: 'David Williams',
  namxb: '2020',
  nxb: 'NXB Hội Nhà Văn',
  hinhthuc: 'Bìa Cứng',
  noidung: '',
  phienban: '',
  theloai: '',
  mota: ''
})
sach.push({
  hinhanh: '../images/newyear/nhat_ky_ca_sau.png',
  ten: 'Nhật Ký Cá Sấu',
  giaban: '185,000đ',
  sale: '-10%',
  giasale: '166,500đ',
  daban: '56',
  tacgia: 'Khâu Diệu Tân',
  namxb: '2022',
  nxb: 'Phụ Nữ Việt Nam',
  hinhthuc: 'Bìa Mềm',
  noidung: '',
  phienban: '',
  theloai: '',
  mota: ''
})
sach.push({
  hinhanh: '../images/newyear/le_chi.png',
  ten: 'Lệ Chi',
  giaban: '98,000đ',
  sale: '-10%',
  giasale: '88,200đ',
  daban: '56',
  tacgia: 'Van Luc',
  namxb: '2022',
  nxb: 'Hội Nhà Văn',
  hinhthuc: 'Bìa Mềm',
  noidung: '',
  phienban: '',
  theloai: '',
  mota: ''
})
sach.push({
  hinhanh: '../images/newyear/onepiece7.jpg',
  ten: 'Vua Hải Tặc Tập 7',
  giaban: '30,000đ',
  sale: '-20%',
  giasale: '24,000đ',
  daban: '56',
  tacgia: 'Eiichiro Oda',
  namxb: '2022',
  nxb: 'NXB Kim Đồng',
  hinhthuc: 'Bìa Mềm',
  noidung: '',
  phienban: '',
  theloai: '',
  mota: ''
})
sach.push({
  hinhanh: '../images/newyear/shin48.jpg',
  ten: 'Shin Cậu Bé Bút Chì Tập 48',
  giaban: '55,000đ',
  sale: '-20%',
  giasale: '44,000đ',
  daban: '56',
  tacgia: 'Yoshito Usui',
  namxb: '2022',
  nxb: 'NXB Kim Đồng',
  hinhthuc: 'Bìa Mềm',
  noidung: '',
  phienban: '',
  theloai: '',
  mota: ''
})
sach.push({
  hinhanh: '../images/newyear/tokyo1.png',
  ten: 'Tokyo Revengers Tập 1',
  giaban: '115,000đ',
  sale: '-20%',
  giasale: '92,000đ',
  daban: '56',
  tacgia: 'Ken Wakui',
  namxb: '2022',
  nxb: 'NXB Hà Nội',
  hinhthuc: 'Bìa Mềm',
  noidung: '',
  phienban: '',
  theloai: '',
  mota: ''
})
sach.push({
  hinhanh: '../images/newyear/quan-he-nguy-hiem.jpg',
  ten: 'Quan Hệ Nguy Hiểm',
  giaban: '118,000đ',
  sale: '-20%',
  giasale: '94,000đ',
  daban: '56',
  tacgia: 'Khiêu Dược Hỏa Diệm',
  namxb: '2018',
  nxb: 'NXB Văn Học',
  hinhthuc: 'Bìa Mềm',
  noidung: '',
  phienban: '',
  theloai: '',
  mota: ''
})
sach.push({
  hinhanh: '../images/newyear/nui_chuot_quet.jpg',
  ten: 'Núi Chuột Quét',
  giaban: '190,000đ',
  sale: '-20%',
  giasale: '152,000đ',
  daban: '56',
  tacgia: 'Hô Diên Vân',
  namxb: '2022',
  nxb: 'NXB Hồng Đức',
  hinhthuc: 'Bìa Mềm',
  noidung: '',
  phienban: '',
  theloai: '',
  mota: ''
})
localStorage.clear();
localStorage.setItem('sach', JSON.stringify(sach));

var books = JSON.parse(localStorage.getItem('sach'))
var image = document.querySelectorAll('.img img')
var bookname = document.querySelectorAll('.pro-name a')
var price = document.querySelectorAll('.content_price .pro-price-del .compare-price')
var sale = document.querySelectorAll('.product-sale .sale-lb')
var saleprice = document.querySelectorAll('.content_price .pro-price')

books.forEach((book, index) => {
  hinhAnh = image[index];
  ten = bookname[index];
  giaBan = price[index];
  phanTramSale = sale[index];
  giaSale = saleprice[index];

  hinhAnh.setAttribute("src", book.hinhanh);
  ten.setAttribute("title", book.ten);
  ten.innerHTML = book.ten;
  giaBan.innerHTML = book.giaban;
  phanTramSale.innerHTML = book.sale;
  giaSale.innerHTML = book.giasale;
})