function Dictionary() {
	var items = {}
	this.has = function(key) {
		return (key in items)
	}
	this.set = function(key, value) {
		items[key] = value
	}
	this.delete = function(key) {
		if (this.has(key)) {
			delete items[key]
			return true
		}

		return false
	}
	this.get = function(key) {
		return this.has(key) ? items[key] : undefined
	}
	this.values = function() {
		var values = []
		for (key in items) {
			if (this.has(key)) {
				values.push(items[key])
			}

		}
		return values
	}
	this.clear = function() {
		items = {}
	}

	this.size = function() {
		return Object.keys(items).length
	}

	this.keys = function() {
		return Object.keys(items)
	}

	this.getItems = function() {
		return items
	}
}

var dictionary = new Dictionary()
dictionary.set('Gandalf', 'gandalf@email.com')
dictionary.set('John', 'johnsnow@email.com')
dictionary.set('Tyrion', 'tyrion@email.com')

console.log(dictionary.has('Gandalf'))

console.log(dictionary.size())
console.log(dictionary.keys())
console.log(dictionary.values())
console.log(dictionary.get('John'))
dictionary.delete('John')
console.log(dictionary.size())
console.log(dictionary.keys())
console.log(dictionary.values())