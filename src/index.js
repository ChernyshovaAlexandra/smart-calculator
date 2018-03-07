class SmartCalculator {
  constructor(initialValue) {
    this.value = initialValue;
    this.String = initialValue.toString();
    this.regExp = /(\d+)(?!.*\d)/;
  }

  add(number) {
    this.calc(number, '+')
    return this;
  }

  subtract(number) {
    this.calc(number, '-')
    return this;
  }

  multiply(number) {
    this.calc(number, '*')
    return this;
  }

  devide(number) {
    this.calc(number, '/')
    return this;
  }

  pow(number) {
    this.calc(number, '**')
    return this;
  }
  
  calc(number, operator) {
    this.String = this.String + operator + number
    this.value = eval(this.String)
  }
}

module.exports = SmartCalculator;
