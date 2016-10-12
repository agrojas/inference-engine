"use strict";

var BackwardStrategy = require('./backward-chaining/BackwardStrategy');
var ForwardStrategy = require('./forward-chaining/ForwardStrategy');


var AlgorithmFactory = function(executionType) {	
	this.getAlgorithm = function (executionType)  {

		if (executionType == "b") {
			return new BackwardStrategy();
		} else if (executionType == "f") {
			return new ForwardStrategy();
		} 

		return null;
	}
}

module.exports = AlgorithmFactory;