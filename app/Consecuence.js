"use strict";

function Consecuence(fieldName, value) {
	this.fieldName = fieldName;
	this.value = value;
}

Consecuence.prototype.apply = function(subject) {
	console.log('subject',subject);
	subject[this.fieldName] = this.value;
	console.log('subject',subject);
}

module.exports = Consecuence;