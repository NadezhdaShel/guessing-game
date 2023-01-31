class GuessingGame {
    constructor(number) {
        this.number = number;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        let p = Math.round((this.min + this.max) / 2);
        if (this.number < p) {
            return this.lower();
        } else if (this.number > p) {
            return this.greater();
        } else return p;
    }

    lower() {
        this.max = Math.round((this.min + this.max) / 2);
        return this.guess();
    }

    greater() {
        this.min = Math.round((this.min + this.max) / 2);
        return this.guess();
    }
}

module.exports = GuessingGame;
