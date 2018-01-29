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
}

let set = new Set()
let set2 = new Set()
set2.add(2)
set.add(1)
set.add(2)
console.log(set.union(set2).values())
// console.log(set.values())