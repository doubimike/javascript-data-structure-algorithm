/*
 * @Author: mike.zhang
 * @Date:   2018-02-23 15:58:37
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-23 16:07:08
 */
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
// Example:
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.

/**
 * initialize your data structure here.
 */
var MinStack = function() {
	this.items = []

};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
	this.items.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
	this.items.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
	return this.items[this.items.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
	if (this.items.length === 0) {
		return null
	}

	var min = this.items[0]
	for (var i = 1; i < this.items.length; i++) {
		if (this.items[i] < min) {
			min = this.items[i]
		}
	}
	return min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */