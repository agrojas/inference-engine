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

function RuleSet() {
}


module.exports = RuleSet;