"use strict";
var RulesLoader = require('./RulesLoader');
var RulesManager = require('./RulesManager');
const commandLineArgs = require('command-line-args')
 
function validateArgs(args) {
	if (args.executionType == undefined || args.executionType == '')
		throw new Error('Invalid executionType')
}

function main () {
	
	const optionDefinitions = [
	  { name: 'rulesPath', alias: 'r', type: String ,defaultValue:'../resources/rules.json'},
	  { name: 'KnowledgeBasePath', alias: 'k', type: String ,defaultValue:'../resources/KnowledgeBase.json'},
	  { name: 'executionType', alias: 't', type: String },
	  { name: 'resultPath', alias: 's', type: String ,defaultValue:'../resources/result.json'},
	  { name: 'hypothesisPath', alias: 'h', type: String ,defaultValue:'../resources/hypothesis.json'}
	];
	
	const options = commandLineArgs(optionDefinitions)
	validateArgs(options);

	var rulesLoader = new RulesLoader();
	var rulesManager = new RulesManager(options.executionType);
	/**/

	rulesLoader.loadRules(options.rulesPath);
	rulesLoader.loadKnowledgeBase(options.KnowledgeBasePath);
	rulesLoader.loadHypothesis(options.hypothesisPath);
	
	rulesManager.setRules(rulesLoader.getRules());
	rulesManager.setKnowledgeBase(rulesLoader.getInitialKnowledgeBase());
	rulesManager.setHypothesis(rulesLoader.getHypothesis());
	/* */
	rulesManager.run();		
	/* */
	rulesLoader.saveKnowledgeBase(options.resultPath, rulesManager.getKnowledgeBase());
}

main();
