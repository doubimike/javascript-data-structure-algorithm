function Set() {
	let items = {}
	this.has = function(value) {
		// return items[item] != undefined
		// return value in items
		return items.hasOwnProperty(value)
	}
	this.add = function(value) {
		if (!this.has(value)) {
			items[value] = value
			return true
		}
		return false
	}
	this.remove = function(value) {
		if (items.has(value)) {
			delete items[value]
			return true
		}
		return false
	}
	this.clear = function() {
		items = {}
	}
	this.size = function() {
		return Object.keys(items).length
	}

	this.sizeLegacy = function() {
		let count = 0
		for (let key in items) {
			if (items.hasOwnProperty(key)) {
				count++
			}
		}
		return count
	}
	this.values = function() {
		let result = []
		for (let key in items) {
			if (items.hasOwnProperty(key)) {
				result.push(items[key])
			}
		}
		return result
	}
	this.union = function(otherSet) {
		let unionSet = new Set()
		let values = this.values()
		for (let i = 0; i < values.length; i++) {
			unionSet.add(values[i])
		}

		values = otherSet.values()
		for (let i = 0; i < values.length; i++) {
			unionSet.add(values[i])
		}

		return unionSet
	}

	this.intersection = function(otherSet) {
		let intersectionSet = new Set()
		let values = this.values()
		// let otherValues = otherSet.values()
		for (let i = 0; i < values.length; i++) {
			// for (let j = 0; j < otherValues.length; j++) {
			// 	if (values[i] = otherValues[j]) {
			// 		intersectionSet.add(values[i])
			// 		break
			// 	}
			// }
			if (otherSet.has(values[i])) {
				intersectionSet.add(values[i])
			}
		}

		return intersectionSet
	}

	this.difference = function(otherSet) {
		let differenceSet = new Set()
		let values = this.values()
		for (let i = 0; i < values.length; i++) {
			if (!otherSet.has(values[i])) {
				differenceSet.add(values[i])
			}
		}
		return differenceSet
	}
	this.subset = function(otherSet) {
		let values = this.values()
		if (this.size() > otherSet.size()) {
			return false
		}
		for (let i = 0; i < values.length; i++) {
			if (!otherSet.has(values[i])) {
				return false
			}
		}
		return true
	}
}

let set = new Set()
let set2 = new Set()
set2.add(2)
set.add(1)
set.add(2)
console.log(set.union(set2).values())
console.log(set.intersection(set2).values())
console.log(set.difference(set2).values())
console.log(set.subset(set2))
console.log(set2.subset(set))
// console.log(set.values())