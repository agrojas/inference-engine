"use strict";

var express = require('express');
var app = express();

var RulesLoader = require('./RulesLoader');
var RulesManager = require('./RulesManager');


function main () {
	
	var settings =  {
		rulesPath: './rules.json',
		executionType: 'f'
	}

	var rulesLoader = new RulesLoader(settings.rulesPath);
	var rulesManager = new RulesManager(settings.executionType);
	
	rulesLoader.loadRules();
	rulesManager.setRules(rulesLoader.getRules());

	rulesManager.fire();		


}

main();
