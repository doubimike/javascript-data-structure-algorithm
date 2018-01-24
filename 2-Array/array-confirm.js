var arr = []
console.log(Array.isArray(arr))

console.log(arr instanceof Array)

function isArray(o) {
	return Object.prototype.toString.call(o) === '[object Array]'
}