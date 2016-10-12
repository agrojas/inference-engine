"use strict";

function KnowledgeBase() {
	this.knowledge = {};
}


/*
if self.knowledge.get(new_knowledge.keys()[0]) is None:
            self.knowledge.update(new_knowledge)
            logger.debug('Added new knowledge: {}'.format(new_knowledge))
        else:
            raise KnowledgeBase.DuplicatedKnowledgeException
*/
//TODO: REVISAR
KnowledgeBase.prototype.addKnowledge = function(newKnowledge) {
	if (this.knowledge[new_knowledge]) {
		Object.assign(knowledge, newKnowledge);
	}
}

KnowledgeBase.prototype.getSubject = function() {
	return this.knowledge;
}


module.exports = KnowledgeBase;