/*class InferenceEngine:
    def __init__(self, knowledge_base=None, rule_set=None):

        if knowledge_base is None:
            self.knowledge_base = KnowledgeBase()
        else:
            self.knowledge_base = knowledge_base

        if rule_set is None:
            self.rule_set = RuleSet()
        else:
            self.rule_set = rule_set

    @abstractmethod
    def run_engine(self):
        pass*/
"use strict";

var RuleSet = require('../RuleSet');
var KnowledgeBase = require('../KnowledgeBase');

function InferenceEngine() {
    /* RuleSet */
    this.ruleSet = null;
    /*KnowledgeBase*/ 
    this.knowledgeBase = null; 
}

InferenceEngine.prototype.setRuleSet = function(ruleSet){ 
    this.ruleSet = ruleSet;
} 

InferenceEngine.prototype.setKnowledgeBase = function(knowledgeBase){ 
    this.knowledgeBase = knowledgeBase;
} 

module.exports = InferenceEngine;