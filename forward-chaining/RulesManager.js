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

	this.searchRulesThatMatchHowInitialKnowledge = function() {

	}

	this.fire = function() {

		// var selectedRules = this.searchRulesThatMatchHowInitialKnowledge();

		for (var rule of this.rules) {
			console.log(rule.name);
			console.log(rule.predicate.arguments.results);
			for (var act of rule.predicate.arguments.acts) {
				console.log(act);

			}
			
		}
	}
}

module.exports = RulesManager;