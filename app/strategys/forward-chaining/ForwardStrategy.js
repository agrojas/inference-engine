"use strict";

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
        console.log('Result: ',result)
        console.log('Partial Knowledge: ',this.knowledgeBase.getKnowledgeBase())
        appliedRules.push(firstRule);
        applyingRules = this.ruleSet.getApplyingRules(this.knowledgeBase.getKnowledgeBase()).diff(appliedRules);
        iterations++
    }
    console.log('Forward chaining algorithm took ',iterations - 1,' iterations')

}   

module.exports = ForwardStrategy;