let sach2 = [
    {
        created: 1,
        imgSrc: '../images/001_LookBack_35.jpg',
        bookName: 'Look Back',
        category: 'Tiểu Thuyết',
        price: 35000,
        del: 45000,
    },
    //../images/005_NgoiNhaTrongVePhiaBien_265.png
    {
        created: 2,
        imgSrc: '../images/002_ATreeGrowsInBrooklyn_189.jpg',
        bookName: 'A Tree Grows In Brooklyn',
        category: 'Tiểu Thuyết',
        price: 189000,
        del: 200000,
    },
    {
        created: 3,
        imgSrc: '../images/003_LangNgheTiengNang_100.png ',
        bookName: 'Lắng nghe tiếng nắng',
        category: 'Truyện Tranh',
        price: 100000,
        del: 180000,
    },
    {
        created: 4,
        imgSrc: '../images/004_AnhEmPhiHanhGia_45.png',
        bookName: 'Anh em phi hành gia',
        category: 'Hành Động',
        price: 100000,
        del: 150000,
    },
    {
        created: 5,
        imgSrc: '../images/005_NgoiNhaTrongVePhiaBien_265.png',
        bookName: 'The Alchemist',
        category: 'Hành Động',
        price: 52000,
        del: 90000,
    },
    {
        created: 6,
        imgSrc: '../images/006-BaNgoaiToiBienThanhBupBeNho_22.jpg',
        bookName: 'Bà ngoại tôi biến thành búp bê nhỏ',
        category: 'Thiếu Nhi',
        price: 22000,
        del: 45000,
    },
    {
        created: 7,
        imgSrc: '../images/007_NguoiBaTaiGioiVungSaGa2_42-34.jpg',
        bookName: 'Người bà tài giỏi vùng SaGa tập 2',
        category: 'Ngôn Tình',
        price: 34000,
        del: 42000,
    },
    {
        created: 8,
        imgSrc: '../images/008_BaNgoaiKinhYeu-35.jpg',
        bookName: 'Bà Ngoại Kính Yêu',
        category: 'Thiếu Nhi',
        price: 35000,
        del: 50000,
    },
    {
        created: 9,
        imgSrc: '../images/009_NguoiBaTaiGioiVungSaGaTap4_35.jpg',
        bookName: 'Người bà tài giỏi vùng SaGa tập 4',
        category: 'Thiếu Nhi',
        price: 35000,
        del: 50000,
    },
    {
        created: 10,
        imgSrc: '../images/0010_CayCamNgotCuaToi_86.jpg',
        bookName: 'Cây Cam Ngọt Của Tôi',
        category: 'Ngôn Tình',
        price: 86000,
        del: 100000,
    },
    {
        created: 11,
        imgSrc: '../images/0011_46_BuoiChieuDiQuaCanhDong.jpg',
        bookName: 'Buổi chiều đi qua cánh đồng',
        category: 'Thiếu Nhi',
        price: 46000,
        del: 80000,
    },
    {
        created: 12,
        imgSrc: '../images/0012_279CanhDongBatTan.jpg',
        bookName: 'Cánh Đồng Bất Tận',
        category: 'Tiểu Thuyết',
        price: 279000,
        del: 300000,
    },
    {
        created: 13,
        imgSrc: '../images/0013_269DonQuixoteNhaQuyTocTaiBaXuMancha.jpg',
        bookName: 'DonQuiXote Nhà Quý Tộc Tài Ba Xứ Mancha',
        category: 'Tiểu Thuyết',
        price: 269000,
        del: 300000,
    },
    {
        created: 14,
        imgSrc: '../images/0014_22BaToLaTheDay.jpg',
        bookName: 'Bố tớ là thế đấy',
        category: 'Thiếu Nhi',
        price: 22000,
        del: 60000,
    },
    {
        created: 15,
        imgSrc: '../images/0015_185_HieuSachNhoOParis.jpg',
        bookName: 'Hiệu sách nhỏ ở Paris',
        category: 'Tiểu Thuyết',
        price: 185000,
        del: 222000,
    },
];
localStorage.clear();
localStorage.setItem('sach2', JSON.stringify(sach2));
//Lấy giá trị select
let e = document.querySelector('#selectSapXep');
let eDanhMuc = document.querySelector('#selectDanhMuc');
var tmpCount = 0;
// //

// //setTitle
var hContent = document.getElementById('danhmucTitle');
var count = document.getElementById('count');
// // Thiết lập click cho button 1

//

var books = JSON.parse(localStorage.getItem('sach2'));

var List1 = document.getElementById('list-product');

count.innerHTML = 'Hiển thị ' + books.length + ' trong tổng ' + books.length + ' sản phẩm';
List1.innerHTML = '';
books
    .filter((book) => {
        if (eDanhMuc.value == 'all') return book;
        else if (book.category == eDanhMuc.value) {
            tmpCount++;
            return book;
        }
    })
    .sort((a, b) => {
        if (e.value == 'price-ascending') {
            return a.price - b.price;
        } else if (e.value == 'price-descending') {
            return b.price - a.price;
        } else if (e.value == 'title-ascending') {
            // Sử dụng toUpperCase() để chuyển các kí tự về cùng viết hoa
            var typeA = a.bookName.toUpperCase();
            var typeB = b.bookName.toUpperCase();

            let comparison = 0;
            if (typeA > typeB) {
                comparison = 1;
            } else if (typeA < typeB) {
                comparison = -1;
            }
            return comparison;
        } else if (e.value == 'title-descending') {
            // Sử dụng toUpperCase() để chuyển các kí tự về cùng viết hoa
            var typeA = a.bookName.toUpperCase();
            var typeB = b.bookName.toUpperCase();

            let comparison = 0;
            if (typeA > typeB) {
                comparison = 1;
            } else if (typeA < typeB) {
                comparison = -1;
            }
            return comparison * -1;
        } else if (e.value == 'created-ascending') {
            // Sử dụng toUpperCase() để chuyển các kí tự về cùng viết hoa
            return b.created - a.created;
        } else if (e.value == 'created-descending') {
            // Sử dụng toUpperCase() để chuyển các kí tự về cùng viết hoa
            return a.created - b.created;
        }
    })
    .map((book) => {
        List1.innerHTML +=
            '<div class="book read">' +
            '   <div class="cover">' +
            '       <img src="' +
            book.imgSrc +
            '"/>' +
            '   </div>' +
            '   <div class="description">' +
            book.bookName +
            '</div>' +
            '   <div class="title_price">' +
            '       <span class="price">' +
            book.price.toLocaleString() +
            '</span>' +
            '       <span class="del">' +
            book.del +
            '</span>' +
            '       <button class="add_to_cart">Thêm vào giỏ</button>' +
            '   </div>' +
            '</div>';
    });
e.addEventListener('change', () => {
    console.log(e.value);
    tmpCount = 0;
    List1.innerHTML = '';
    books
        .filter((book) => {
            if (eDanhMuc.value == 'all') {
                tmpCount++;
                return book;
            } else if (book.category == eDanhMuc.value) {
                tmpCount++;
                return book;
            }
        })
        .sort((a, b) => {
            if (e.value == 'price-ascending') {
                return a.price - b.price;
            } else if (e.value == 'price-descending') {
                return b.price - a.price;
            } else if (e.value == 'title-ascending') {
                // Sử dụng toUpperCase() để chuyển các kí tự về cùng viết hoa
                var typeA = a.bookName.toUpperCase();
                var typeB = b.bookName.toUpperCase();

                let comparison = 0;
                if (typeA > typeB) {
                    comparison = 1;
                } else if (typeA < typeB) {
                    comparison = -1;
                }
                return comparison;
            } else if (e.value == 'title-descending') {
                // Sử dụng toUpperCase() để chuyển các kí tự về cùng viết hoa
                var typeA = a.bookName.toUpperCase();
                var typeB = b.bookName.toUpperCase();

                let comparison = 0;
                if (typeA > typeB) {
                    comparison = 1;
                } else if (typeA < typeB) {
                    comparison = -1;
                }
                return comparison * -1;
            } else if (e.value == 'created-ascending') {
                // Sử dụng toUpperCase() để chuyển các kí tự về cùng viết hoa
                return b.created - a.created;
            } else if (e.value == 'created-descending') {
                // Sử dụng toUpperCase() để chuyển các kí tự về cùng viết hoa
                return a.created - b.created;
            }
        })
        .map((book, index) => {
            List1.innerHTML +=
                '<div class="book read">' +
                '   <div class="cover">' +
                '       <img src="' +
                book.imgSrc +
                '"/>' +
                '   </div>' +
                '   <div class="description">' +
                book.bookName +
                '</div>' +
                '   <div class="title_price">' +
                '       <span class="price">' +
                book.price.toLocaleString() +
                '</span>' +
                '       <span class="del">' +
                book.del +
                '</span>' +
                '       <button class="add_to_cart">Thêm vào giỏ</button>' +
                '   </div>' +
                '</div>';
        });

    count.innerHTML = 'Hiển thị ' + tmpCount + ' trong tổng ' + books.length + ' sản phẩm';
});
eDanhMuc.addEventListener('change', () => {
    // hContent.innerHTML = eSapXep.value;
    if (eDanhMuc.value == 'all') {
        hContent.innerHTML = 'Tất cả sản phẩm';
    } else hContent.innerHTML = 'Sách ' + eDanhMuc.value;
    tmpCount = 0;
    List1.innerHTML = '';
    books
        .filter((book) => {
            if (eDanhMuc.value == 'all') {
                tmpCount++;
                return book;
            } else if (book.category == eDanhMuc.value) {
                tmpCount++;
                return book;
            }
        })
        .sort((a, b) => {
            if (e.value == 'price-ascending') {
                return a.price - b.price;
            } else if (e.value == 'price-descending') {
                return b.price - a.price;
            } else if (e.value == 'title-ascending') {
                // Sử dụng toUpperCase() để chuyển các kí tự về cùng viết hoa
                var typeA = a.bookName.toUpperCase();
                var typeB = b.bookName.toUpperCase();

                let comparison = 0;
                if (typeA > typeB) {
                    comparison = 1;
                } else if (typeA < typeB) {
                    comparison = -1;
                }
                return comparison;
            } else if (e.value == 'title-descending') {
                // Sử dụng toUpperCase() để chuyển các kí tự về cùng viết hoa
                var typeA = a.bookName.toUpperCase();
                var typeB = b.bookName.toUpperCase();

                let comparison = 0;
                if (typeA > typeB) {
                    comparison = 1;
                } else if (typeA < typeB) {
                    comparison = -1;
                }
                return comparison * -1;
            } else if (e.value == 'created-ascending') {
                // Sử dụng toUpperCase() để chuyển các kí tự về cùng viết hoa
                return b.created - a.created;
            } else if (e.value == 'created-descending') {
                // Sử dụng toUpperCase() để chuyển các kí tự về cùng viết hoa
                return a.created - b.created;
            }
        })
        .map((book, index) => {
            List1.innerHTML +=
                '<div class="book read">' +
                '   <div class="cover">' +
                '       <img src="' +
                book.imgSrc +
                '"/>' +
                '   </div>' +
                '   <div class="description">' +
                book.bookName +
                '</div>' +
                '   <div class="title_price">' +
                '       <span class="price">' +
                book.price.toLocaleString() +
                '</span>' +
                '       <span class="del">' +
                book.del +
                '</span>' +
                '       <button class="add_to_cart">Thêm vào giỏ</button>' +
                '   </div>' +
                '</div>';
        });
    count.innerHTML = 'Hiển thị ' + tmpCount + ' trong tổng ' + books.length + ' sản phẩm';
});
