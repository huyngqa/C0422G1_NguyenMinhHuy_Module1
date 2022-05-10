function exercise4() {
    let r = parseFloat(prompt("Nhập bán kính hình tròn"));
    let perimeter = 2 * r * MAX.PI;

    document.getElementById("myEx4").innerText = "Chu vi hình tròn là: " + perimeter;
}