"use strict";

var Rule = require('./Rule');
var Conclusion = require('./Conclusion');
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


var RulesManager = function (executionType) {

	var algorithmFactory = new AlgorithmFactory();
	
	this.algorithm = algorithmFactory.getAlgorithm(executionType);
	this.rules = [];
	this.initialKnowledge = [];
	this.conclusion = new Conclusion();

	this.setRules = function(rules) {
		for (var rule of rules) {
			this.rules.push(new Rule(rule))
		}
	}

  	this.getRules = function () { 
  		return this.rules;
  	}

	this.fire = function() {
		return this.algorithm.fire(this.rules);
	}
}

module.exports = RulesManager;