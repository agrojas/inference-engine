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


ForwardStrategy.prototype.run = function(){ 
	console.log("ForwardStrategy run");
	console.log(this.ruleSet)
} 

module.exports = ForwardStrategy;