"use strict";
/*
class BackwardChainingInferenceEngine(InferenceEngine):
    def __init__(self, knowledge_base=None, rule_set=None):
        InferenceEngine.__init__(self, knowledge_base, rule_set)
        self.hypothesis = {}

    def set_hypothesis(self, hypothesis):
        self.hypothesis = hypothesis

    def can_prove_hypothesis(self):
        if self.knowledge_base.knowledge.get(self.hypothesis.keys()[0]) is not None:
            return self.knowledge_base.knowledge.get(self.hypothesis.keys()[0]) == self.hypothesis.values()[0]
        return False

    def run_engine(self):
        logger.info('STARTING backward chaining algorithm')
        logger.debug('Initial Knowledge: {}\n'.format(self.knowledge_base.get_subject()))

        result = self.engine_iteration()

        logger.info('Backward chaining algorithm finish with result {}'.format(result))
        return result

    def engine_iteration(self):
        logger.info('Backward chaining algorithm current hypothesis {}'.format(self.hypothesis))

        can_prove = self.can_prove_hypothesis()
        if can_prove:
            logger.debug('The current Knowledge base CAN prove the hypothesis\n')
            return True
        else:
            logger.debug('The current Knowledge base CAN\'T prove the hypothesis\n')

        for ruleName in self.rule_set.rules:
            current_rule = self.rule_set.rules[ruleName]

            # If the rule has the consequence of the hypothesis
            logger.debug('Evaluating rule {} : {}'.format(current_rule.name, current_rule.condition_object))
            if current_rule.has_consequence(self.hypothesis):
                self.hypothesis = current_rule.condition_object
                # Repeat for the condition of the rule
                logger.debug('Current rule has relevant consequence\n')
                result = self.engine_iteration()
                if result:
                    return True
            else:
                logger.debug('Current rule has not relevant consequence\n')

        return False
*/
var InferenceEngine = require('../InferenceEngine');

BackwardStrategy.prototype = new InferenceEngine();

function BackwardStrategy(){ 
    this.hypothesis = null;
} 

BackwardStrategy.prototype.setHypothesis = function(hypothesis){ 
    this.hypothesis = hypothesis;
}

BackwardStrategy.prototype.canProveHypothesis = function(){ 
    for (var knowledge of this.knowledgeBase.getKnowledgeBase()) {
        if (knowledge[Object.keys(this.hypothesis)[0]] != undefined) {
                return (knowledge[Object.keys(this.hypothesis)[0]] == Object.values(this.hypothesis)[0]);
        }
    }
    return false;
}

BackwardStrategy.prototype.engineIteration = function(){ 
    console.log("BackwardStrategy run");
    console.log('Current hypothesis',this.hypothesis)
    var canProve = this.canProveHypothesis()
    if (canProve) {
        console.log('The current Knowledge base CAN prove the hypothesis\n')
        return true
    }else{
        console.log('The current Knowledge base CAN\'T prove the hypothesis\n')
    }
    for (var rule of Object.values(this.ruleSet.getRules())){
        // If the rule has the consequence of the hypothesis
        console.log('Evaluating rule',rule.name, rule.conditionObject);

        if (rule.hasConsequence(this.hypothesis)) {
            this.hypothesis = rule.conditionObject;
            // # Repeat for the condition of the rule
            console.log('Current rule has relevant consequence\n')
            var result = this.engineIteration()
            if (result) {
                return true
            }
        } else {
            console.log('Current rule has not relevant consequence\n')
        }
    }
    return false
}

BackwardStrategy.prototype.run = function(){ 
    console.log('STARTING backward chaining algorithm')
    console.log('Initial Knowledge: ',this.knowledgeBase.getKnowledgeBase())

    var result = this.engineIteration();
    console.log('Backward chaining algorithm finish with result ',result)
    return result;

} 

module.exports = BackwardStrategy;