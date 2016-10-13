"use strict";

var BackwardStrategy = require('./backward-chaining/BackwardStrategy');
var ForwardStrategy = require('./forward-chaining/ForwardStrategy');


var AlgorithmFactory = function(executionType) {	
	this.executionType = executionType;
}

AlgorithmFactory.prototype.getAlgorithm = function(){
	if (this.executionType == "b") {
		return new BackwardStrategy();
	} else if (this.executionType == "f") {
		return new ForwardStrategy();
	} 
	return null;
}

module.exports = AlgorithmFactory;