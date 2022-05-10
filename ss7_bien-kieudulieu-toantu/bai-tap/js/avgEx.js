//code js bài 1 tính điểm trung bình và tổng điểm
function exercise1() {
    let physics = parseFloat(prompt("Nhập điểm Vật lý"));
    let chemistry = parseFloat(prompt("Nhập điểm Hoá học"));
    let biology = parseFloat(prompt("Nhập điểm Sinh học"));
    let avg = (physics + chemistry + biology) / 3;
    let sum = physics + chemistry + biology;

    document.getElementById("myEx1").innerText = "Điểm trung bình là : " + avg +
        " và tổng điểm là: " + sum;

}
