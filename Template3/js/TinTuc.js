
// lấy ra tên các truyện
var titleTruyens = document.querySelectorAll(".title-truyen")
var titleTruyens1 = document.querySelectorAll(".list-truyen-xemnhanh")


// lắng nghe sự kiện click
titleTruyens.forEach(function(titleTruyen,index){
    titleTruyen.addEventListener("click",function(){
        localStorage.setItem('soThuTu', JSON.stringify(index));

    })
})

titleTruyens1.forEach(function(titleTruyen1,index){
    titleTruyen1.addEventListener("click",function(){
        localStorage.setItem('soThuTu', JSON.stringify(index));

    })
})
