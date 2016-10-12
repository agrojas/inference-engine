"use strict";
var express = require('express');
var app = express();

var RulesLoader = require('./RulesLoader');
var RulesManager = require('./RulesManager');

var rulesLoader = null;
var rulesManager = null;

var settings =  {
	rulesPath: './rules.json',
	executionType: 'f'
}

app.get('/fire', function (req, res) {
  	res.send('fire');
	rulesManager.fire();		
});

app.get('/rules', function (req, res) {
  	res.send(rulesLoader.getRules());
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  	console.log('app listening on port 3000!');
	rulesLoader = new RulesLoader(settings.rulesPath);
	rulesManager = new RulesManager(settings.executionType);
	rulesLoader.loadRules();
	rulesManager.setRules(rulesLoader.getRules());
});
