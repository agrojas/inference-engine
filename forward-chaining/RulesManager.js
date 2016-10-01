"use strict";


var RuleManager = function () {
	
	this.rules = [];
	this.conclusion = null;

	this.setRules = function(rules) {
		this.rules = rules;
	}
  	this.getRules = function () { 
  		return this.rules;
  	}

	this.evaluateRule = function(rule) {
		console.log(rule)
	}

	this.fire = function() {
		this.rules.foreach(function(rule) {
			console.log(rule);
		})
	}
}

module.exports = RuleManager;