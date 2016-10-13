"use strict";
var AlgorithmFactory = require('./strategys/AlgorithmFactory');
var RuleSet = require('./RuleSet');
var KnowledgeBase = require('./KnowledgeBase');

var RulesManager = function (executionType) {

	var algorithmFactory = new AlgorithmFactory(executionType);	
	this.ruleSet = new RuleSet();
	this.knowledgeBase = new KnowledgeBase();
	this.algorithm = algorithmFactory.getAlgorithm();
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

RulesManager.prototype.getRuleSet = function(){ 
	return this.ruleSet;
}

RulesManager.prototype.getKnowledgeBase = function(){ 
	return this.knowledgeBase;
}

RulesManager.prototype.run = function(){ 
	this.algorithm.setRuleSet(this.ruleSet);
	this.algorithm.setKnowledgeBase(this.knowledgeBase);
	return this.algorithm.run();
}

module.exports = RulesManager;