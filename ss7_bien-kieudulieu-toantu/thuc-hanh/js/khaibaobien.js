document.write("<h3>Bài 1</h3>");
let i = 10;
let f = 20.5;
let bool = true;
let s = "Hà Nội";

document.write("i = " + i);
document.write("<br>");
document.write("f = " + f);
document.write("<br>");
document.write("boolean = " + bool);
document.write("<br>");
document.write("s = " + s);
document.write("<hr>");


document.write("<h3>Bài 2</h3>");
let width = 20;
let height = 10;
let area = width + height;

document.write("Area = " + area);

alert("Bài 3");
let a = parseInt(prompt("Nhập số a"));
let b = parseInt(prompt("Nhập số b"));
let c = a % b;
if (c == 0) {
    alert("a là bội số của b.");
} else {
    alert("a không phải bội số của b.");
}
