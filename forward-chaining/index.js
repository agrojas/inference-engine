"use strict";

var RulesLoader = require('./RulesLoader');
var RulesManager = require('./RulesManager');

function main () {
	var settings =  {
		rulesPath: './rules.json'
	}

	var rulesLoader = new RulesLoader(settings.rulesPath);
	var rulesManager = new RulesManager();
	
	rulesLoader.loadRules();
	rulesManager.setRules(rulesLoader.getRules());
	
	console.log(rulesManager.getRules())


}

main();
