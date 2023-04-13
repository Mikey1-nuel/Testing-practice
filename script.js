function stringLength(string) {

    let count = 0;
	for (let i = 0; i < string.length; i += 1) {
		count += 1;
	}
	if (count > 0 && count <= 10) {
		return count;
	}
		throw new Error ('String does not meet the required conditions!');
}
// console.log(stringLength('tracetrace'));

module.exports = stringLength;
