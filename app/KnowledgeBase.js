"use strict";

/*

class KnowledgeBase:
    class DuplicatedKnowledgeException(Exception):
        pass

    def __init__(self):

        self.knowledge = {}

    def add_knowledge(self, new_knowledge):
        if self.knowledge.get(new_knowledge.keys()[0]) is None:
            self.knowledge.update(new_knowledge)
            logger.debug('Added new knowledge: {}'.format(new_knowledge))
        else:
            raise KnowledgeBase.DuplicatedKnowledgeException

    def get_subject(self):
        return self.knowledge
*/

function KnowledgeBase() {
	this.knowledge = {};
}
//TODO: REVISAR
KnowledgeBase.prototype.addKnowledge = function(newKnowledge) {
	if (this.knowledge[new_knowledge] == undefined) {
		Object.assign(knowledge, newKnowledge);
	} else {
        throw new Error("Duplicated KnowledgeException")
    }

}

KnowledgeBase.prototype.getSubject = function() {
	return this.knowledge;
}


module.exports = KnowledgeBase;