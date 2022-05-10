function exercise3() {
    let r = parseFloat(prompt("Nhập bán kính hình tròn"));
    let area = r * r * MAX.PI;

    document.getElementById("myEx3").innerText = "Diện tích hình tròn là: " + area;
}