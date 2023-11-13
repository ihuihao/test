function functiondel(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);//删除第j个元素开始的一个元素,即j元素
                j--
            }
        }
    }
}
var arr = ['苹果', '西瓜', '菠萝', '香蕉', '苹果', '榴莲', '香蕉'];
functiondel(arr);
var html = `<ul>`;
for (let i=0;i<arr.length;i++) {
    html += `<li>${arr[i]}</li>`;
}
html += `</ul>`;
document.getElementById("list").innerHTML = html;
var ul = document.querySelector("ul");
var liall = document.querySelectorAll("li");//提取所有li元素
ul.addEventListener('click', function (e) {
    function1();//初始化所有li元素格式，后使选中的li元素改变格式
    e.target.style.backgroundColor = "blue";
    e.target.style.color = 'white';
    e.stopPropagation();
    console.log("2");
})
function function1() {
    for (var i = 0; i < liall.length; i++) {
        liall[i].style.color = "black";
        liall[i].style.backgroundColor = "gainsboro";
    }
    console.log("1");
}