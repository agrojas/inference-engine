"use strict";

var Predicate = require('./Predicate');

function Rule(data) {
	
	this.name = data.name;
	this.predicate = new Predicate(data.predicate);
}



module.exports = Rule;