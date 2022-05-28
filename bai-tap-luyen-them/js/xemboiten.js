function checkNameToLove() {
    let nameMan = document.getElementById("nameMan").value;
    let nameWoman = document.getElementById("nameWoman").value;
    let str = nameMan + nameWoman;
    str= str.toLowerCase();
    let arr = str.split("");
    let count;
    let tmp = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "" || arr[i] === " ") {
            continue;
        } else {
            count = 1;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    arr[j] = "";
                    count++;
                }
            }
            tmp += count;
        }
    }
    let sum = 0;
    let tmp2 = "";
    while (true) {
        tmp2 = "";
        for (let i = 0; i < tmp.length; i++) {
            if (i == tmp.length - 1) {
                tmp2 += tmp[i];
            } else {
                sum = eval(tmp[i] + "+" + tmp[i + 1]);//cộng 2 số liên tiếp trong chuỗi với nhau
                tmp2 += sum;
                i++;
            }
        }
        tmp = tmp2;
        if (parseInt(tmp) <= 100) {
            break;
        }
    }
    document.getElementById("result").innerText = "Hai bạn có " + tmp +"%" +  " yêu nhau";
}

