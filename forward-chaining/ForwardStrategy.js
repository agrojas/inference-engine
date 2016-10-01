"use strict";

function ForwardStrategy() {

	this.evaluateRule = function(rule) {
		console.log(rule)
	}

	this.searchRulesThatMatchHowInitialKnowledge = function() {

	}


	this.fire = function(rules) {
		// var selectedRules = this.searchRulesThatMatchHowInitialKnowledge();
		this.rules = rules;
		for (var rule of this.rules) {
			console.log(rule.name);
			console.log(rule.predicate.arguments.results);
			for (var act of rule.predicate.arguments.acts) {
				console.log(act);

			}
			
		}
	}
}



module.exports = ForwardStrategy;