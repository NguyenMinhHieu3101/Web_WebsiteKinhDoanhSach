let sach2 = [
    {
        created: 1,
        imgSrc: 'https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg',
        bookName: 'Frankenstein',
        category: 'Tiểu Thuyết',
        price: 142000,
        del: 226000,
    },
    {
        created: 2,
        imgSrc: 'https://alysbcohen.files.wordpress.com/2015/01/little-princess-book-cover.jpg',
        bookName: 'A Little Princess',
        category: 'Tiểu Thuyết',
        price: 175000,
        del: 200000,
    },
    {
        created: 3,
        imgSrc: 'http://talkingwriting.com//sites/default/files/Bird-by-Bird-image1.jpg ',
        bookName: 'Bird By Bird',
        category: 'Truyện Tranh',
        price: 142000,
        del: 180000,
    },
    {
        created: 4,
        imgSrc: 'http://d.gr-assets.com/books/1414348859l/23209971.jpg',
        bookName: 'Girl at War',
        category: 'Hành Động',
        price: 100000,
        del: 150000,
    },
    {
        created: 5,
        imgSrc: 'http://prodimage.images-bn.com/pimages/9780062315007_p0_v2_s192x300.jpg',
        bookName: 'The Alchemist',
        category: 'Hành Động',
        price: 52000,
        del: 90000,
    },
    {
        created: 6,
        imgSrc: 'http://talkingwriting.com//sites/default/files/Bird-by-Bird-image1.jpg ',
        bookName: 'Bird By Bird',
        category: 'Ngôn Tình',
        price: 70000,
        del: 140000,
    },
    {
        created: 7,
        imgSrc: 'http://d.gr-assets.com/books/1414348859l/23209971.jpg',
        bookName: 'Girl at War',
        category: 'Ngon Tình',
        price: 100000,
        del: 200000,
    },
    {
        created: 8,
        imgSrc: 'http://prodimage.images-bn.com/pimages/9780062315007_p0_v2_s192x300.jpg',
        bookName: 'The Alchemist',
        category: 'Ngôn Tình',
        price: 182000,
        del: 200000,
    },
    {
        created: 9,
        imgSrc: 'http://talkingwriting.com//sites/default/files/Bird-by-Bird-image1.jpg ',
        bookName: 'Bird By Bird',
        category: 'Ngôn Tình',
        price: 175000,
        del: 200000,
    },
    {
        created: 10,
        imgSrc: 'http://d.gr-assets.com/books/1414348859l/23209971.jpg',
        bookName: 'Girl at War',
        category: 'Thiếu Nhi',
        price: 175000,
        del: 200000,
    },
    {
        created: 11,
        imgSrc: 'http://prodimage.images-bn.com/pimages/9780062315007_p0_v2_s192x300.jpg',
        bookName: 'The Alchemist',
        category: 'Thiếu Nhi',
        price: 175000,
        del: 200000,
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
