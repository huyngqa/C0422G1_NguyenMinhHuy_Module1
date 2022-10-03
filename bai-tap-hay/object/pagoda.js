class Pagoda {
    constructor(namePagoda, location, moneyBox) {
        this.namePagoda = namePagoda;
        this.location = location;
        this.moneyBox = moneyBox;
    }
    getNamePagoda() {
        return this.namePagoda;
    }
    setNamePagoda(namePagoda) {
        this.namePagoda = namePagoda;
    }
    getLocation() {
        return this.location;
    }
    setLocation(location) {
        this.location = location;
    }
    getMoneyBox() {
        return this.moneyBox;
    }
    setMoneyBox(moneyBox) {
        this.moneyBox = moneyBox;
    }
    increaseMoney(human) {
        this.moneyBox = this.moneyBox + human.getMoney();
    }
}