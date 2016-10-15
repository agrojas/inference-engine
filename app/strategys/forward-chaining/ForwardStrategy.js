"use strict";

/*class ForwardChainingInferenceEngine(InferenceEngine):
    def run_engine(self):
        applying_rules = set(self.rule_set.get_applying_rules(self.knowledge_base.get_subject()))
        applied_rules = set()

        iterations = 1

        logger.info('STARTING forward chaining algorithm')
        logger.debug('Initial Knowledge: {}\n'.format(self.knowledge_base.get_subject()))
        while len(applying_rules) > 0:
            logger.debug('ITERATION {}'.format(iterations))
            logger.debug('There are {} rules to apply. Using the first one'.format(len(applying_rules)))
            first_rule = list(applying_rules)[0]

            logger.debug('Evaluating rule {} : {}'.format(first_rule.name, first_rule.condition_object))
            result = first_rule.evaluate(self.knowledge_base.get_subject())
            logger.debug('Result: {}'.format(result))
            logger.debug('Partial Knowledge: {}\n'.format(self.knowledge_base.get_subject()))

            applied_rules.add(first_rule)

            applying_rules = set(self.rule_set.get_applying_rules(self.knowledge_base.get_subject())).difference(
                applied_rules)
            iterations += 1

        logger.info('Forward chaining algorithm took {} iterations'.format(iterations - 1))
        return True
*/
var InferenceEngine = require('../InferenceEngine');

ForwardStrategy.prototype = new InferenceEngine();

function ForwardStrategy(){ 
} 

Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};

ForwardStrategy.prototype.run = function(){ 
    console.log("ForwardStrategy run");
    var applyingRules = this.ruleSet.getApplyingRules(this.knowledgeBase.getKnowledgeBase());
    var appliedRules = [];
    var iterations = 1;
    
    // console.log('applyingRules',applyingRules);
    console.log('STARTING forward chaining algorithm')
    console.log("Initial Knowledge:",this.knowledgeBase.getKnowledgeBase());
    
    console.log()
    console.log()
    console.log()

    while (applyingRules.length > 0) {
        console.log('******************')
        console.log('ITERATION ', iterations);
        console.log('******************')
        console.log("There are " ,applyingRules.length, " rules to apply. Using the first one");
        var firstRule = applyingRules[0];
        console.log('Evaluating rule ',firstRule.name,' : ' ,firstRule.conditionObject)
        var result = firstRule.evaluate(this.knowledgeBase.getKnowledgeBase());
        if (result) {
            this.knowledgeBase.addKnowledge(firstRule.conditionObject)
        }
        console.log('Result: ',result)
        console.log('Partial Knowledge: ',this.knowledgeBase.getKnowledgeBase())
        appliedRules.push(firstRule);
        applyingRules = this.ruleSet.getApplyingRules(this.knowledgeBase.getKnowledgeBase()).diff(appliedRules);
        iterations++
    }
    console.log('Forward chaining algorithm took ',iterations - 1,' iterations')

}   

module.exports = ForwardStrategy;