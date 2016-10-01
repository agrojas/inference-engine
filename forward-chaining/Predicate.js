"use strict";

function Predicate(data) {

	function processArguments(data) {

		var separators = {
			principal: '=>',
			and: '&&', 
			or: '||', 
			not: '!' 
		}

		var dataSplit = data.split(separators.principal);

		var args = {
			acts: null,
			results: dataSplit[1]
		};

		// args.acts = dataSplit[0].split(separators.and).split(separators.or).split(separators.not);   	
		args.acts = dataSplit[0].split(separators.and);   	

		return args;
	}

	this.arguments = processArguments(data);
}

module.exports = Predicate;