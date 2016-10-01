"use strict";

var Rule = require('./Rule');
var Conclusion = require('./Conclusion');


var RulesManager = function () {
	
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

	this.evaluateRule = function(rule) {
		console.log(rule)
	}

	this.fire = function() {
		for (var rule of this.rules) {
			console.log(rule);
		}
	}
}

module.exports = RulesManager;