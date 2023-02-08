let sach2 = [
    {
        imgSrc: 'https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg',
        bookName: 'Frankenstein',
        price: '192.000',
        del: '192.000',
    },
    {
        imgSrc: 'https://alysbcohen.files.wordpress.com/2015/01/little-princess-book-cover.jpg',
        bookName: 'A Little Princess',
        price: '192.000',
        del: '192.000',
    },
    {
        imgSrc: 'http://talkingwriting.com//sites/default/files/Bird-by-Bird-image1.jpg ',
        bookName: 'Bird By Bird',
        price: '192.000',
        del: '192.000',
    },
    {
        imgSrc: 'http://d.gr-assets.com/books/1414348859l/23209971.jpg',
        bookName: 'Girl at War',
        price: '192.000',
        del: '192.000',
    },
    {
        imgSrc: 'http://prodimage.images-bn.com/pimages/9780062315007_p0_v2_s192x300.jpg',
        bookName: 'The Alchemist',
        price: '192.000',
        del: '192.000',
    },
    {
        imgSrc: 'http://talkingwriting.com//sites/default/files/Bird-by-Bird-image1.jpg ',
        bookName: 'Bird By Bird',
        price: '192.000',
        del: '192.000',
    },
    {
        imgSrc: 'http://d.gr-assets.com/books/1414348859l/23209971.jpg',
        bookName: 'Girl at War',
        price: '192.000',
        del: '192.000',
    },
    {
        imgSrc: 'http://prodimage.images-bn.com/pimages/9780062315007_p0_v2_s192x300.jpg',
        bookName: 'The Alchemist',
        price: '192.000',
        del: '192.000',
    },
    {
        imgSrc: 'http://talkingwriting.com//sites/default/files/Bird-by-Bird-image1.jpg ',
        bookName: 'Bird By Bird',
        price: '192.000',
        del: '192.000',
    },
    {
        imgSrc: 'http://d.gr-assets.com/books/1414348859l/23209971.jpg',
        bookName: 'Girl at War',
        price: '192.000',
        del: '192.000',
    },
    {
        imgSrc: 'http://prodimage.images-bn.com/pimages/9780062315007_p0_v2_s192x300.jpg',
        bookName: 'The Alchemist',
        price: '192.000',
        del: '192.000',
    },
];
localStorage.clear();
localStorage.setItem('sach2', JSON.stringify(sach2));

var books = JSON.parse(localStorage.getItem('sach2'));

var List1 = document.getElementById('list-product');
List1.innerHTML = '';

books.map((book, index) => {
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
        book.price +
        '</span>' +
        '       <span class="del">' +
        book.del +
        '</span>' +
        '       <button class="add_to_cart">Thêm vào giỏ</button>' +
        '   </div>' +
        '</div>';
});

List3.innerHTML = List2.innerHTML = List1.innerHTML;
