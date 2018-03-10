class SmartCalculator {
    constructor(initialValue) {
        this.string = initialValue.toString();
    }

    finalCount(result){
        result = new Number(eval(this.string));
        result.add = (x) => {
            this.string = this.string + "+" + x ;
            return eval(this.finalCount(this.string));
        }

        result.subtract = (x) =>{
            this.string = this.string + "-" + x ;
            return eval(this.finalCount(this.string));
        }

        result.multiply = (x) =>{
            this.string = this.string + "*" + x ;
            return eval(this.finalCount(this.string));
        }

        result.devide = (x) =>{
            this.string = this.string + "/" + x ;
            return eval(this.finalCount(this.string));
        }

        result.pow = (x) =>{
            let k = /\D+/g;
            let dev = this.string.replace(k, " ").trim().split(' ');
            let base = dev[dev.length - 1];
            let newString = this.string.slice(0, this.string.lastIndexOf(base));
            base = Math.pow(base, x);
            this.string = newString + base;
            return eval(this.finalCount(this.string));
        }
        return result;
    }

    add(number) {
        this.string = this.string + "+" + number;
        return this.finalCount(eval(this.string));

    }

    subtract(number) {
        this.string = this.string + "-" + number;
        return this.finalCount(eval(this.string));
    }

    multiply(number) {
        this.string = this.string + "*" + number;
        return this.finalCount(eval(this.string));

    }

    devide(number) {
        this.string = this.string + "/" + number;
        return this.finalCount(eval(this.string));
    }

    pow(number) {
        this.regExp = /\D+/g;
        this.dev = this.string.replace(this.regExp, " ").trim().split(' ');
        this.base = this.dev[this.dev.length - 1];
        this.newString = this.string.slice(0, this.string.lastIndexOf(this.base));
        this.base = Math.pow(this.base, number);
        this.string = this.newString + this.base;
        return this.finalCount(eval(this.string));
    }
}


module.exports = SmartCalculator;
