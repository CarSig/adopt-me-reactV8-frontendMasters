console.log("hello world");

const arr = [1, 2, 3, 4, 5]

for (let n of arr) {
    console.log(n)
}













function getComplementaryColor(color) {
    let r = parseInt(color.substring(1, 3), 16);
    let g = parseInt(color.substring(3, 5), 16);
    let b = parseInt(color.substring(5, 7), 16);
    let r2 = 255 - r;
    let g2 = 255 - g;
    let b2 = 255 - b;
    return "#" + r2.toString(16) + g2.toString(16) + b2.toString(16);
}



function changeColor1() {
    let color = document.getElementById("inputColor1").value;
    let headerItem = document.querySelectorAll(".header-item");
    let compColor = getComplementaryColor(color);
    headerItem.forEach((item) => {
        item.style.backgroundColor = color;
        item.style.color = compColor;
    });


    document.getElementById("inputText1").value = color;

}
