function HashTable() {
	var tables = []
	var loseloseHashCode = function(key) {
		var hash = 0
		for (var i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i)
		}
		return hash % 37
	}

	this.put = function(key, value) {
		console.log(loseloseHashCode(key), '-', value)
		return tables[loseloseHashCode(key)] = value
	}
	this.get = function(key) {
		return tables[loseloseHashCode(key)]
	}

	this.remove = function(key) {
		// delete tables[loseloseHashCode(key)]
		tables[loseloseHashCode(key)] = undefined
	}

	this.print = function() {
		for (let i = 0; i < tables.length; i++) {
			if (tables[i]) {
				console.log(i + ' - ' + tables[i])
			}

		}
	}

}

var hash = new HashTable()

hash.put('Gandalf', 'gandalf@email.com')
hash.put('John', 'johnsnow@email.com')
hash.put('Tyrion', 'tyrion@email.com')
hash.put('Aaron', 'aaron@email.com')
hash.put('Donnie', 'donnie@email.com')
hash.put('Ana', 'ana@email.com')
hash.put('Jonathan', 'jonathan@email.com')
hash.put('Jamie', 'jamie@email.com')
hash.put('Sue', 'sue@email.com')
hash.put('Mindy', 'mindy@email.com')
hash.put('Paul', 'paul@email.com')
hash.put('Nathan', 'nathan@email.com')

console.log(hash.get('John'))
console.log(hash.get('Mike'))
hash.remove('Gandalf')
console.log(hash.get('Gandalf'))
console.log('---')
hash.print()