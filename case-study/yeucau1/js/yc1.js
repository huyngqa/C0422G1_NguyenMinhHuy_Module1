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
    document.getElementById("result1").innerHTML = result;
}

function drawEmptyRightTriangle() {
    let result = "";
    let height = +document.getElementById("chieucao1").value;
    for (let i = 1; i <= height; i++) {
        for (let j = 1; j <= i; j++) {
            if (i == height || j == 1 || i == j) {
                result += "*";
            } else {
                result += "&ensp;"
            }
        }
        result += "<br>";

    }
    document.getElementById("result2").innerHTML = result;
}

function drawIsoscelesTriangle() {
    let height = +document.getElementById("chieucao2").value;
    let result = "";
    for (let i = 1; i <= height; i++) {
        for (let j = height - 1; j >= i; j--) {
            result += "&nbsp;&nbsp;"
        }
        for (let j = 1; j <= i + (i - 1); j++) {
            result += "*";
        }
        result += "<br>";
    }
    document.getElementById("result3").innerHTML = result;
}
function drawEmptyIsoscelesTriangle() {
    let height = +document.getElementById("chieucao3").value;
    let result = "";
    for (let i = 1; i <= height ; i++) {
        for (let j = height - 1; j >= i; j--) {
            result += "&nbsp;&nbsp;"
        }
        for (let j = 1; j <= i + (i - 1); j++) {
           if(j==1 || j == i + (i-1) || i == height) {
               result += "*";
           } else {
               result += "&nbsp;&nbsp;"
           }
        }
        result += "<br>";
    }
    document.getElementById("result4").innerHTML = result;
}