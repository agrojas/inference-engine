# inference-engine

Implementation of an inference engine


# Start

### Install node 

Instalar node.js así como su manejador de paquetes, [npm](https://www.npmjs.com/)

``` 
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
```

### Install project dependencies

``` 
sudo npm install
```

### Run project

``` 
sudo node index -t <executionType> <options>
```
```
optionDefinitions = [
	  { name: "help", alias: 'h' },
	  { name: 'rulesPath', alias: 'r', type: String ,defaultValue:'../resources/rules.json'},
	  { name: 'KnowledgeBasePath', alias: 'k', type: String ,defaultValue:'../resources/KnowledgeBase.json'},
	  { name: 'executionType', alias: 't', type: String },
	  { name: 'resultPath', alias: 's', type: String ,defaultValue:'../resources/result.json'},
	  { name: 'hypothesisPath', alias: 'p', type: String ,defaultValue:'../resources/hypothesis.json'}
	];
```
