"use strict";
var fs = require('fs');

var RulesLoader = function () {
	
	this.data = null;
  this.initialKnowledgeBase = null;  
}

RulesLoader.prototype.loadRules = function(file_path){ 
    var contents = fs.readFileSync(file_path).toString();
    // TODO: chequear excepciones
    this.data = JSON.parse(contents);

}

RulesLoader.prototype.loadKnowledgeBase = function(file_path){
    var contents = fs.readFileSync(file_path).toString();
    // TODO: chequear excepciones
    this.initialKnowledgeBase = JSON.parse(contents);
} 

RulesLoader.prototype.getRules = function(){
    return this.data.rules;
}


RulesLoader.prototype.getInitialKnowledgeBase = function(){
    return this.initialKnowledgeBase;
}

RulesLoader.prototype.saveKnowledgeBase = function(filename, data){
    var knowledges = JSON.stringify(data.knowledges, null, "\t");
    fs.writeFile(filename, knowledges, 'utf8')
}


module.exports = RulesLoader;