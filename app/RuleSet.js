/*

class RuleSet:
    class DuplicatedRuleException(Exception):
        pass

    def __init__(self):
        self.rules = {}
        self.rules_tree = {}

    def add_rule(self, rule):
        if self.rules.get(rule.name) is None:
            self.rules[rule.name] = rule
            logger.debug('Added new rule: "{}"'.format(rule.name))
        else:
            raise RuleSet.DuplicatedRuleException

        if self.rules_tree.get(rule.fields) is None:
            self.rules_tree[rule.fields] = [rule]
        else:
            self.rules_tree[rule.fields].append(rule)

    def get_applying_rules(self, subject):
        def rule_applies(rule):
            try:
                rule.validate_fields(subject)
                return True
            except Rule.RuleNotApplyException:
                return False

        return filter(rule_applies, self.rules.values())*/
"use strict";

var Rule = require('./Rule');

function RuleSet() {
    this.rules = {};
    this.rulesTree = {};
}

RuleSet.prototype.addRule = function(data){
    
    if (this.rules[data.rule.name] != undefined) {
        throw new Error("Duplicate Rule Exception")
    }
    this.rules[data.rule.name] = new Rule(data);

    //TODO: Chequear esto
    if (this.rulesTree[data.rule.fields] == undefined) {
        this.rulesTree[data.rule.fields] = data; // ???
    } else {
        this.rulesTree[data.rule.fields].push(data);
    }
}

Object.values = function (obj) {
    var vals = [];
    for( var key in obj ) {
        if ( obj.hasOwnProperty(key) ) {
            vals.push(obj[key]);
        }
    }
    return vals;
}

RuleSet.prototype.getApplyingRules = function(subject){
    //TODO: Chequear esto
    return Object.values(this.rules).filter(function(rule){
        return rule.validateFields(subject);
    });
}


module.exports = RuleSet;