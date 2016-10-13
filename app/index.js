"use strict";
var RulesLoader = require('./RulesLoader');
var RulesManager = require('./RulesManager');

function main () {
	
	var settings =  {
		rulesPath: '../resources/rules.json',
		executionType: 'f'
	}

	var rulesLoader = new RulesLoader(settings.rulesPath);
	var rulesManager = new RulesManager(settings.executionType);
	/**/
	rulesLoader.loadRules();
	rulesManager.setRules(rulesLoader.getRules());
	/* */
	rulesManager.run();		

}

main();
