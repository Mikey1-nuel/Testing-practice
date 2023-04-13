class Calculator {
	constructor() {
		this.scores = [];
	}
	add(num){
		this.scores.push(num.reduce((a,b) => a + b, 0));
	}
	subtract(num){
		let sorted = num.sort((a, b) => b - a, 0);
		let biggest = sorted[0] + sorted[0];
		sorted.forEach((num) => {
			biggest = biggest - num;
			// console.log(biggest);
		});
		this.scores.push(biggest);
	}
	multiply(num){
		let res = num.reduce((a,b) => a * b, 1);
		this.scores.push(res);
	}
	divide(num){
		let sorted = num.sort((a, b) => b - a, 0);
		let biggest = sorted[0] * sorted[0];
		sorted.forEach((num) => {
			biggest = biggest / num;
		});
		// console.log(Math.round(biggest));
		// console.log(biggest.toFixed(2));
		this.scores.push(biggest);
	}
}
const calc = new Calculator();

// calc.add([3,4,5]);
// calc.subtract([100, ,1000, 10]);
// calc.multiply([2,5,50]);
// calc.divide([120, 320, 3, 4]);
// console.log(calc);

module.exports = Calculator;