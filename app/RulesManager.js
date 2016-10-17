"use strict";
var AlgorithmFactory = require('./strategys/AlgorithmFactory');
var RuleSet = require('./RuleSet');
var KnowledgeBase = require('./KnowledgeBase');

var RulesManager = function (executionType) {

	this.algorithmFactory = new AlgorithmFactory(executionType);
	this.executionType = executionType;	
	this.ruleSet = new RuleSet();
	this.knowledgeBase = new KnowledgeBase();
	this.algorithm = undefined;
	this.hypothesis = undefined;
}

RulesManager.prototype.setRules = function(rules){ 
	for (var rule of rules) {
		this.ruleSet.addRule(rule);
	}
}

RulesManager.prototype.setKnowledgeBase = function(knowledgeBase){
	for (var knowledge of knowledgeBase) {
		this.knowledgeBase.addKnowledge(knowledge);
	}
}

RulesManager.prototype.setHypothesis = function(hypothesis){ 
	this.hypothesis = hypothesis;
}


RulesManager.prototype.getHypothesis = function(){ 
	return this.hypothesis;
}

RulesManager.prototype.getRuleSet = function(){ 
	return this.ruleSet;
}

RulesManager.prototype.getKnowledgeBase = function(){ 
	return this.knowledgeBase;
}

RulesManager.prototype.changeAlgorithmType = function(type){ 
	this.executionType = type;
	this.algorithm = this.algorithmFactory.getAlgorithm(type);
}

RulesManager.prototype.run = function(){ 
	this.algorithm.setRuleSet(this.ruleSet);
	this.algorithm.setKnowledgeBase(this.knowledgeBase);
	//TODO: Refactor
	console.log('this.executionType',this.executionType);
	if (this.executionType == "b") {
		this.algorithm.setHypothesis(this.hypothesis);
	}

	return this.algorithm.run();


}

module.exports = RulesManager;