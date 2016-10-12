"use strict";

var Rule = require('./Rule');
var AlgorithmFactory = require('./strategys/AlgorithmFactory');


var RulesManager = function (executionType) {

	var algorithmFactory = new AlgorithmFactory();
	
	this.algorithm = algorithmFactory.getAlgorithm(executionType);
	this.rules = [];
	this.knowledgeBase = [];

	this.setRules = function(rules) {
		for (var rule of rules) {
			this.rules.push(new Rule(rule));
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