"use strict";
var fs = require('fs');

var RulesLoader = function (file_path) {
	
	this.file_path = file_path;
	this.data = null;
  
	this.loadRules = function () {
    	var contents = fs.readFileSync(this.file_path).toString();
    	// TODO: chequear excepciones
    	this.data = JSON.parse(contents);
    }

  	this.getRules = function () { 
  		return this.data.rules;
  	}

  	this.saveSettings = function (settings) {
    	//TODO: implements
    	//fs.writeFileSync(this.file_path, JSON.stringify(settings));
  	}
}



module.exports = RulesLoader;