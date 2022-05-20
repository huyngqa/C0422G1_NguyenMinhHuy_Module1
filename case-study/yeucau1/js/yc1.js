function drawRectangle() {
    let width = +document.getElementById("rong").value;
    let length = +document.getElementById("dai").value;
    let result = "";
    for (let i = 1; i <= width; i++) {
        for (let j = 1; j <= length; j++) {
            if (i == 1 || j == 1 || i == width || j == length) {
                result += "*"
            } else {
                result += "&nbsp;&nbsp;";
            }
        }
        result += "<br>";
    }
    document.getElementById("result2").innerHTML = result;
}

function drawRightTriangle() {
    let result = "";
    let height = +document.getElementById("chieucao").value;
    for (let i = 1; i <= height; i++) {
        for (let j = 1; j <= i; j++) {
            if ( i == height || j == 1 || i == j) {
                result += "*";
            } else {
                result += "&ensp;"
            }
        }
        result += "<br>";

    }
    document.getElementById("result2").innerHTML = result;
}