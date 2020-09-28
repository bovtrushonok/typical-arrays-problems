
exports.min = function min (array) {
	let arr = array;
	if ( arguments.length === 0 || arr.length === 0 ) return 0;
	return arr.sort( (a, b) => a - b )[0];
  
}

exports.max = function max (array) {
	let arr = array;
	if (arguments.length === 0 || arr.length === 0) return 0;
	return arr.sort( (a, b) => b - a )[0];
}

exports.avg = function avg (array) {
	let arr = array;
	if (arguments.length === 0 || arr.length === 0) return 0;
	return (arr.reduce((sum, current) => sum + current, 0)) / arr.length;
}
