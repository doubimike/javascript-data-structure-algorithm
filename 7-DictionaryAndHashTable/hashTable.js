'use strict'
function HashTable() {
    var tables = []
    var loseloseHashCode = function(key) {
        var hash = 0
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % 37
    }

    var djb2HashCode = function (key) {
    	var hash = 5381
    	for(var i = 0;i<key.length;i++){
    		hash = hash *33 +key.charCodeAt(i)
    	}

    	return hash %1013
    }

    var ValuePair = function(key, value) {
        this.key = key
        this.value = value
        this.toString = function() {
            return '[' + this.key + ' - ' + this.value + ']'
        }
    }

    this.put = function(key, value) {
        var position = loseloseHashCode(key)
        if (tables[position] == undefined) {
            tables[position] = new LinkedList()
        }
        // console.log(loseloseHashCode(key), '-', value)
        tables[position].append(new ValuePair(key, value))
            // return tables[loseloseHashCode(key)] = value
    }
    this.get = function(key) {
        var position = loseloseHashCode(key)
        if (tables[position] !== undefined) {

            // 遍历链表来寻找键/值
            var current = tables[position].getHead()

            while (current.next) {
                if (current.element.key === key) {
                    return current.element.value
                }
                current = current.next
            }
            // 检查元素在链表第一个或最后一个节点的情况
            if (current.element.key === key) {
                return current.element.value
            }
        }

        return undefined
            // return tables[loseloseHashCode(key)]
    }

    this.remove = function(key) {
        // delete tables[loseloseHashCode(key)]
        // tables[loseloseHashCode(key)] = undefined
        var position = loseloseHashCode(key)
        var current = tables[position].getHead()
        if (tables[position] !== undefined) {

            while (current.next) {
                if (current.element.key === key) {
                    tables[position].remove(current.element)
                    if (tables[position].isEmpty()) {
                        tables[position] = undefined
                    }
                    return true
                }

                current = current.next                
            }

            // 检查是否为第一个或最后一个元素
            if(current.element.key===key){
            	tables[position].remove(current.element)
            	if (tables[position].isEmpty()) {
                        tables[position] = undefined
                    }
                    return true
            }
        }

        return false
    }

    this.print = function() {
        for (let i = 0; i < tables.length; i++) {
            if (tables[i]) {
                console.log(i + ' - ' + tables[i])
            }

        }
    }


}

function LinkedList() {

    let Node = function(element) {

        this.element = element;
        this.next = null;
    };

    let length = 0;
    let head = null;

    this.append = function(element) {

        let node = new Node(element),
            current;

        if (head === null) { //first node on list
            head = node;
        } else {

            current = head;

            //loop the list until find last item
            while (current.next) {
                current = current.next;
            }

            //get last item and assign next to added item to make the link
            current.next = node;
        }

        length++; //update size of list
    };

    this.insert = function(position, element) {

        //check for out-of-bounds values
        if (position >= 0 && position <= length) {

            let node = new Node(element),
                current = head,
                previous,
                index = 0;

            if (position === 0) { //add on first position

                node.next = current;
                head = node;

            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }

            length++; //update size of list

            return true;

        } else {
            return false;
        }
    };

    this.removeAt = function(position) {

        //check for out-of-bounds values
        if (position > -1 && position < length) {

            let current = head,
                previous,
                index = 0;

            //removing first item
            if (position === 0) {
                head = current.next;
            } else {

                while (index++ < position) {

                    previous = current;
                    current = current.next;
                }

                //link previous with current's next - skip it to remove
                previous.next = current.next;
            }

            length--;

            return current.element;

        } else {
            return null;
        }
    };

    this.remove = function(element) {

        let index = this.indexOf(element);
        return this.removeAt(index);
    };

    this.indexOf = function(element) {

        let current = head,
            index = 0;

        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }

        return -1;
    };

    this.isEmpty = function() {
        return length === 0;
    };

    this.size = function() {
        return length;
    };

    this.getHead = function() {
        return head;
    };

    this.toString = function() {

        let current = head,
            string = '';

        while (current) {
            string += current.element + (current.next ? ', ' : '');
            current = current.next;
        }
        return string;

    };

    this.print = function() {
        console.log(this.toString());
    };
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