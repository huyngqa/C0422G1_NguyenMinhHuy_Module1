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

let author = new Authorized("Huy", "Thanh Kh??", true);
document.getElementById("daili").innerHTML = "<b>T??n ?????i l??: " + "</b>" + author.getName() +
    "<br><b>?????a ch???: </b>" + author.getLocation() + "<br><b>Gi?? v??: </b>1000??/1v??";
let customer1 = new Customer("Ng???c Trinh", 28);
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
        alert("B???n kh??ng ??c mua n???a")
    } else {
        arrTicket.push(arr);
        customer1.setMyTicket(arrTicket);
        display();
        let result = "<span>Kh??ch h??ng: </span>" + customer1.getName() +
            "<br>Tu???i: " + customer1.getAge() + "<br>???? mua v??:<br> " + customer1.getMyTicket().join("<br>");
        document.getElementById("myTicket").innerHTML = result;
    }

}

function displayTotal() {
    let count = 0;
    let result = "";

    if (customer1.getMyTicket() == undefined) {
        document.getElementById("displayTotal").innerHTML = result +
            "<br>M???i b???n quay l???i v??o ng??y mai!";
    } else {
        for (let i = 0; i < arrTicket.length; i++) {
            count = 0;
            for (let j = 0; j < arrTicket[i].length; j++) {
                if (arrRandom.includes(arrTicket[i][j])) {
                    count++;
                }
            }
            if (count == 3 || count == 4) {
                result += "Ch??c m???ng! B???n ???? tr??ng gi???i khuy???n kh??ch";
            } else if (count == 5) {
                result += "Ch??c m???ng! B???n ???? tr??ng gi???i nh??";
            } else if (count == 6) {
                result += "Ch??c m???ng! B???n ???? ?????i ?????i";
            } else {
                result += "Ch??c b???n may m???n l???n sau";
            }
            result += " k???t qu??? v?? " + (i + 1) + "<br>"
        }
    }
    document.getElementById("displayTotal").innerHTML = result +
        "<b>K???t qu??? x??? s??? h??m nay l??: </b>" + author.randomTotal().join("-") + "<br>";
}

function buyChooseNumber() {
    if (arrTicket.length >= 4) {
        alert("B???n kh??ng th??? mua th??m");
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
        result = "<span>Kh??ch h??ng: </span>" + customer1.getName() +
            "<br>Tu???i: " + customer1.getAge() + "<br>???? mua v??:<br> " + customer1.getMyTicket().join("<br>");
        document.getElementById("myTicket").innerHTML = result;
    }
}

function display() {
    if (arrTicket.length > 4) {
        alert("B???n kh??ng ???????c mua n???a");
    } else {
        for (let i = 0; i < arrTicket.length; i++) {
            for (let j = 0; j < arrTicket[i].length; j++) {
                document.getElementById(i + "" + j).value = arrTicket[i][j];
            }
        }
    }
}




