"use strict";

function Consecuence(fieldName, value) {
	this.fieldName = fieldName;
	this.value = value;
}

Consecuence.prototype.apply = function(subject) {
	subject[this.fieldName] = this.value;
}

module.exports = Consecuence;