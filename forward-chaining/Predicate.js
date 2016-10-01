"use strict";

function Predicate(data) {

	function processArguments(data) {

		var separators = {
			principal: '=>',
			logics: [
				'&&', 
				'||', 
				'!'
			]
		}

		var dataSplit = data.split(separators.principal);

		var args = {
			acts: [],
			results: dataSplit[1]
		};

		var acts = dataSplit[0];   	
		for (var separator of separators.logics) {
			var act = acts.split(separator);
				console.log(act);
			if (act[1] != undefined) {
				args.acts.push(act)
				// console.log(separator);
			}
		}
		console.log('*********************************');
		return args;
	}

	this.arguments = processArguments(data);
}

module.exports = Predicate;