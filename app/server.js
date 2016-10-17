"use strict";
var express = require('express');
var app = express();
var bodyParser = require('body-parser')

var RulesLoader = require('./RulesLoader');
var RulesManager = require('./RulesManager');

var rulesLoader = new RulesLoader();
var rulesManager = new RulesManager();

var settings =  {
	rulesPath: "../resources/rules.json",
	KnowledgeBasePath: "../resources/KnowledgeBase.json",
	executionType: "f",
	resultPath: "../resources/result.json",
	hypothesisPath: "../resources/hypothesis.json"
}

// parse application/json
app.use(bodyParser.json());

app.post('/forward', function (req, res) {
	/* */
	console.log('POST - forward');
	rulesManager.changeAlgorithmType("f");
	rulesManager.run();
  	res.send(rulesManager.getKnowledgeBase());
  	return res.sendStatus(200)
});

app.post('/backward', function (req, res) {
	/* */
	console.log('POST - backward');
	rulesManager.changeAlgorithmType("b");
  	res.send(rulesManager.run());
  	return res.sendStatus(200)
});

app.get('/rules', function (req, res) {
	console.log('GET - rules');
	res.status(200).send(rulesManager.getRuleSet());
});

app.get('/knowledgeBase', function (req, res) {
	console.log('GET - knowledgeBase');
  	res.status(200).send(rulesManager.getKnowledgeBase());
});

app.get('/hypothesis', function (req, res) {
	console.log('GET - hypothesis');
  	res.status(200).send(rulesManager.getHypothesis());
});

app.post('/rules', function (req, res) {
	console.log(req.body);
	var rules = req.body;
  	rulesManager.setRules(rules);
  	res.status(200).send();
});

app.post('/knowledgeBase', function (req, res) {
	console.log(req.body);
	var knowledgeBase = req.body;
	rulesManager.setKnowledgeBase(knowledgeBase);
  	res.status(200).send();
});

app.post('/hypothesis', function (req, res) {
	console.log(req.body);
	var hypothesis = req.body;
	rulesManager.setHypothesis(hypothesis);
  	res.status(200).send();
});


app.listen(3000, function () {
  	console.log('app listening on port 3000!');
	
});
