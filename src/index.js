class SmartCalculator {
  constructor(initialValue) {
    this.value = initialValue.toString();
  }

  add(number) {
    this.calc(number, '+');
    return this;
  }

  subtract(number) {
    this.calc(number, '-');
    return this;
  }

  multiply(number) {
    this.calc(number, '*');
    return this;
  }

  devide(number) {
    this.calc(number, '/');
    return this;
  }

  pow(number) {
    this.calc(number, '**');
    return this;
  }

  calc(number, operator) {
    this.value = this.value + operator + number;
    this.value = eval(this.value);
     return JSON.stringify(this.value);
  }
}

module.exports = SmartCalculator;
