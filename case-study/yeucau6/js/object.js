let arrTicket = [];
let arr = [];

class Customer {
    constructor(name, age, myTicket) {
        this.name = name;
        this.age = age;
        this.myTicket = myTicket;
    }

    setMyTicket(myTicket) {
        this.myTicket = myTicket;
    }

    getMyTicket() {
        return this.myTicket;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setAge() {
        this.age = age;
    }

    getAge() {
        return this.age;
    }

}

class Authorized {
    constructor(name, location, total) {
        this.name = name;
        this.location = location;
        this.total = total;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setLocation(location) {
        this.location = location;
    }

    getLocation() {
        return this.location;
    }

    // randomTotal(ticket) {
    //     let arr = [];
    //     ticket.setNum1(Math.floor(Math.random() * 99 + 1));
    //     ticket.setNum2(Math.floor(Math.random() * 99 + 1));
    //     ticket.setNum3(Math.floor(Math.random() * 99 + 1));
    //     ticket.setNum4(Math.floor(Math.random() * 99 + 1));
    //     ticket.setNum5(Math.floor(Math.random() * 99 + 1));
    //     ticket.setNum6(Math.floor(Math.random() * 99 + 1));
    //
    //     arr = [num1, num2, num3, num4, num5, num6];
    //     arr.sort(function (a, b) {
    //         return a - b;
    //     });
    //     for (let i = 0; i < arr.length; i++) {
    //         if (arr[i] < 10) {
    //             arr[i] = "0" + arr[i];
    //         }
    //     }
    //     return arr;
    // }
    randomTotal() {
        let arr = [];
        let num1 = Math.floor(Math.random() * 99 + 1);
        let num2 = Math.floor(Math.random() * 99 + 1);
        let num3 = Math.floor(Math.random() * 99 + 1);
        let num4 = Math.floor(Math.random() * 99 + 1);
        let num5 = Math.floor(Math.random() * 99 + 1);
        let num6 = Math.floor(Math.random() * 99 + 1);
        arr = [num1, num2, num3, num4, num5, num6];
        arr.sort(function (a, b) {
            return a - b;
        });
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 10) {
                arr[i] = "0" + arr[i];
            }
        }
        return arr;
    }
}

let author = new Authorized("Huy", "Thanh Khê", true);
document.getElementById("daili").innerHTML = "<b>Tên đại lý: " + "</b>" + author.getName() +
    "<br><b>Địa chỉ: </b>" + author.getLocation() + "<br><b>Giá vé: </b>1000đ/1vé";
let customer1 = new Customer("Ngọc Trinh", 28);
let arrRandom = [author.randomTotal()];

function buyTicket() {
    let num01 = Math.floor(Math.random() * 99 + 1);
    let num02 = Math.floor(Math.random() * 99 + 1);
    let num03 = Math.floor(Math.random() * 99 + 1);
    let num04 = Math.floor(Math.random() * 99 + 1);
    let num05 = Math.floor(Math.random() * 99 + 1);
    let num06 = Math.floor(Math.random() * 99 + 1);

    arr = [num01, num02, num03, num04, num05, num06];
    arr.sort(function (a, b) {
        return a - b;
    });

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 10) {
            arr[i] = "0" + arr[i];
        }
    }
    if (arrTicket.length >= 4) {
        alert("Bạn không đc mua nữa")
    } else {
        arrTicket.push(arr);
        customer1.setMyTicket(arrTicket);
        display();
        let result = "<span>Khách hàng: </span>" + customer1.getName() +
            "<br>Tuổi: " + customer1.getAge() + "<br>Đã mua vé:<br> " + customer1.getMyTicket().join("<br>");
        document.getElementById("myTicket").innerHTML = result;
    }

}

function displayTotal() {
    let count = 0;
    let result = "";

    if (customer1.getMyTicket() == undefined) {
        document.getElementById("displayTotal").innerHTML = result +
            "<br>Mời bạn quay lại vào ngày mai!";
    } else {
        for (let i = 0; i < arrTicket.length; i++) {
            count = 0;
            for (let j = 0; j < arrTicket[i].length; j++) {
                if (arrRandom.includes(arrTicket[i][j])) {
                    count++;
                }
            }
            if (count == 3 || count == 4) {
                result += "Chúc mừng! Bạn đã trúng giải khuyến khích";
            } else if (count == 5) {
                result += "Chúc mừng! Bạn đã trúng giải nhì";
            } else if (count == 6) {
                result += "Chúc mừng! Bạn đã đổi đời";
            } else {
                result += "Chúc bạn may mắn lần sau";
            }
            result += " kết quả vé " + (i + 1) + "<br>"
        }
    }
    document.getElementById("displayTotal").innerHTML = result +
        "<b>Kết quả xổ số hôm nay là: </b>" + author.randomTotal().join("-") + "<br>";
}

function buyChooseNumber() {
    if (arrTicket.length >= 4) {
        alert("Bạn không thể mua thêm");
    } else {
        let countTicket = 0;
        let result = "";
        let choose1 = "";
        let choose2 = "";
        let choose3 = "";
        let choose4 = "";
        let choose5 = "";
        let choose6 = "";
        while (countTicket < 4) {
            if (arrTicket.length > 0) {
                countTicket = arrTicket.length;
            }
            arr = [];
            choose1 = document.getElementById(countTicket + "0").value;
            choose2 = document.getElementById(countTicket + "1").value;
            choose3 = document.getElementById(countTicket + "2").value;
            choose4 = document.getElementById(countTicket + "3").value;
            choose5 = document.getElementById(countTicket + "4").value;
            choose6 = document.getElementById(countTicket + "5").value;
            if (choose1 != "" && choose2 != "" && choose3 != "" && choose4 != "" && choose5 != "" && choose6 != "") {
                arr.push(choose1, choose2, choose3, choose4, choose5, choose6)
                arr.sort(function (a, b) {
                    return a - b;
                });
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] < 10) {
                        arr[i] = "0" + arr[i];
                    }
                }
                arrTicket.push(arr);
                countTicket++;
            } else {
                break;
            }
        }
        customer1.setMyTicket(arrTicket);
        display();
        result = "<span>Khách hàng: </span>" + customer1.getName() +
            "<br>Tuổi: " + customer1.getAge() + "<br>Đã mua vé:<br> " + customer1.getMyTicket().join("<br>");
        document.getElementById("myTicket").innerHTML = result;
    }
}

function display() {
    if (arrTicket.length > 4) {
        alert("Bạn không được mua nữa");
    } else {
        for (let i = 0; i < arrTicket.length; i++) {
            for (let j = 0; j < arrTicket[i].length; j++) {
                document.getElementById(i + "" + j).value = arrTicket[i][j];
            }
        }
    }
}




