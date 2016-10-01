"use strict";
var fs = require('fs');

function Rule() {
	
	this.predicate = "";
}

function Conclusion() {
	this.core = "";
}

function RuleManager() {
	
	this.rules = [];
	this.conclusion = null;

	this.setRules = function(rules) {
		this.rules = rules;
	}
  	this.getRules = function () { 
  		return this.rules;
  	}

	this.evaluateRule = function(rule) {
		console.log(rule)
	}

	this.fire = function() {
		this.rules.foreach(function(rule) {
			console.log(rule);
		})
	}
}

function RulesLoader(file_path) {
	
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

function main () {
	var settings =  {
		rulesPath: './rules.json'
	}
	var rulesLoader = new RulesLoader(settings.rulesPath);
	var rulesManager = new RuleManager();
	rulesLoader.loadRules();
	rulesManager.setRules(rulesLoader.getRules());
	console.log(rulesManager.getRules())



}

main();
