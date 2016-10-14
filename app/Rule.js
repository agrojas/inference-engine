"use strict";

var Condition = require('./Condition');
var Consecuence = require('./Consecuence');

function Rule(data) {
	
	this.name = data.rule.name;
	this.conditionObject = data.rule.conditionObject;
	this.fields = data.rule.fields;
	this.condition = new Condition(data.condition.subjectName,data.condition.equalsTo);
	this.consecuence = new Consecuence(data.consecuence.fieldName,data.consecuence.value);

}

Rule.prototype.evaluate = function(subject) {
	var ruleSuccess = this.condition.evaluate(subject);

	if (ruleSuccess) {
		this.consecuence.apply(subject);
	}

	return ruleSuccess;
}

Rule.prototype.validateFields = function(subject) {
	for (var field of this.fields) {
		if (subject[field] == undefined)
			throw new Error("Rule does not apply to subject");
	}
}

Rule.prototype.hasConsequence = function(testConsequence) {
    var currentConsequence = {};
	this.consecuence.apply(currentConsequence);
	return currentConsequence == testConsequence
}


module.exports = Rule;