function capitalize(string) {
	let string2 = string.charAt(0).toUpperCase() + string.slice(1);
	return string2;
}
// console.log(capitalize('babe'));

module.exports = capitalize;