function frelixSumArray() {
    let result = "";
    let n = +prompt("Nhập vào độ dài của mảng");
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = +prompt("Nhập vào phần tử thứ " + i + " của mảng");
    }
    alert("Bạn đã nhập xong Mảng");
    result += "Mảng của bạn vừa nhập là: [" + arr + "]<br>";
    let sum = 0;
    let arrNew = [];
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        arrNew[i] = sum;
    }
    result += "Mảng mới là frelix sum của mảng bạn vừa nhập là: [" + arrNew + "]";
    document.getElementById("result1").innerHTML = result;
}

function checkNumberExistArray() {
    let arrA = [7, 2, 5, 3, 5, 3];
    let arrB = [7, 2, 5, 4, 6, 1, 3, 5, 3];
    let arrResult = [];
    // let tmpIndex = 0;
    // let flg;
    for (let i = 0; i < arrB.length; i++) {// cách 1 sử dụng hàm indexOf()
        if (arrA.indexOf(arrB[i]) === -1 && arrResult.indexOf(arrB[i]) === -1) {
            arrResult.push(arrB[i]);
        }
    }
    // for (let i = 0; i < arrB.length; i++) { //cách 2 code chay
    //     flg = true;
    //     for (let j = 0; j < arrA.length; j++) {
    //         if (arrB[i] == arrA[j]) {
    //             flg = false;
    //             break;
    //         }
    //     }
    //     if (flg) {
    //         arrResult[tmpIndex] = arrB[i];
    //         tmpIndex++;
    //     }
    // }
    document.getElementById("result2").innerHTML = "Các phần tử trong mảng B "
        + "không xuất hiện trong mảng A là: [" + arrResult + "]";
}

function findMaxFraction() {
    let arrA = [5, 2, 5, 5, 2, 3, 6, 8, 3, 1];
    let arrB = [6, 3, 4, 6, 3, 3, 10, 4, 2, 1];
    let max = arrA[0] / arrB[0];
    let tmp;
    for (let i = 1; i < arrA.length; i++) {
        if (arrA[i] / arrB[i] > max) {
            max = arrA[i] / arrB[i];
            tmp = i;
        }
    }
    document.getElementById("result3").innerHTML = arrA[tmp] + "/" + arrB[tmp] + " la phân số lớn nhất "
        + " có chỉ số là " + tmp;
}

function transNumberToString() {
    let arrNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let arrStr = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín",];
    let num = document.getElementById("number").value;
    let result = "";
    result += "Số bạn nhập là: " + num + "<br>";
    for (let i = 0; i < num.length; i++) {// xài indexOf
        if (arrNum.indexOf(num[i]) !== -1) {
            result += arrStr[arrNum.indexOf(num[i])] + " ";
        }
    }
    // for (let i = 0; i < num.length; i++) {// code chay
    //     for (let j = 0; j < arrNum.length; j++) {
    //         if (num[i] == arrNum[j]) {
    //             result += arrStr[j] + " ";
    //         }
    //     }
    // }
    document.getElementById("result4").innerHTML = result;
    document.getElementById("number").value = "";
}
