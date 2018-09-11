class SmartCalculator {
	constructor(initialValue) {
		this.initialValue = initialValue;
	}

	add(number) {
		this.initialValue = new Function("a, b", "return a + '+' + b")(
			this.initialValue,
			number
		);
		return this;
	}

	subtract(number) {
		this.initialValue = new Function("a, b", "return a + '-' + b")(
			this.initialValue,
			number
		);
		return this;
	}

	multiply(number) {
		this.initialValue = new Function("a, b", "return a + '*' + b")(
			this.initialValue,
			number
		);
		return this;
	}

	devide(number) {
		this.initialValue = new Function("a, b", "return a + '/' + b")(
			this.initialValue,
			number
		);
		return this;
	}

	pow(number) {
		this.initialValue = new Function("a, b", "return a + '**' + b")(
			this.initialValue,
			number
		);
		return this;
	}
	valueOf() {
		this.initialValue = new Function("a, b", "return " + this.initialValue)();
		return this.initialValue;
	}
}

module.exports = SmartCalculator;
