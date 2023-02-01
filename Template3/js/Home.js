function getOffset(el) {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    // console.log(_x);

    return { top: _y, left: _x };
}
console.log();

document.getElementById('tag1').addEventListener('click', function () {
    document.documentElement.scrollTop = getOffset(document.getElementById('container-1')).top - 50;
});
document.getElementById('tag2').addEventListener('click', function () {
    document.documentElement.scrollTop = getOffset(document.getElementById('container-2')).top - 50;
});
document.getElementById('tag3').addEventListener('click', function () {
    document.documentElement.scrollTop = getOffset(document.getElementById('container-3')).top - 50;
});
