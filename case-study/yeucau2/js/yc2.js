const MILION_MONEY = 1000000

function calculatorSalary() {
    let result = "";
    let money = +document.getElementById("money").value;
    if (money < 7 * MILION_MONEY) {
        money -= money * 0.05;
        result = "Lương ròng bạn nhận được sau khi đóng thuế thu nhập 5% là: " + money + "đ";
    } else if (money >= 7 * MILION_MONEY && money < 15 * MILION_MONEY) {
        money -= money * 0.1;
        result = "Lương ròng bạn nhận được sau khi đóng thuế thu nhập 10% là: " + money + "đ";
    } else {
        money -= money * 0.2;
        result = "Lương ròng bạn nhận được sau khi đóng thuế thu nhập 20% là: " + money + "đ";
    }
    document.getElementById("result1").innerHTML = result;
}

function checkChar() {
    let c = document.getElementById("kitu").value;
    let result = "";
    switch (c) {
        case "o":
        case "u":
        case "i":
        case "a":
        case "e":
        case "O":
        case "U":
        case "I":
        case "A":
        case "E":
           result = "Kí tự bạn nhập là 1 nguyên âm";
            break;
        default:
            result = "Kí tự bạn nhập không phải là nguyên âm";
    }
    document.getElementById("result2").innerHTML = result;
}