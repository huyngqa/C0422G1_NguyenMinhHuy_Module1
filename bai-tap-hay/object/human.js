class Human {
    constructor(nameHuman, age, identity, money) {
        this.nameHuman = nameHuman;
        this.age = age;
        this.identity = identity;
        this.money = money;
    }
    setNameHuman(nameHuman) {
        this.nameHuman = nameHuman;
    }
    getNameHuman() {
        return this.nameHuman;
    }
    setAge(age) {
        this.age = age;
    }
    getAge(){
        return this.age;
    }
    setIdentity(identity) {
        this.identity = identity;
    }
    getIdentity() {
        return this.identity;
    }
    setMoney(money) {
        this.money = money;
    }
    getMoney() {
        return this.money;
    }
    isMonks() { // có phải là nhà sư hay không;
        if(this.identity.toLowerCase() === "nhà sư")
            return true;
        else
            return false;
    }
    cleanTheYard() {
        if(this.isMonks()) {
            return "Đã quét sân sạch sẽ";
        } else {
            return "Đây là công việc của nhà chùa, thí chủ thông cảm";
        }
    }
    incense() {

    }
    eulogy() {

    }
}