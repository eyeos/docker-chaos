var Docker = require('./Docker');

function ScenarioExecutor (docker) {
    this.docker = docker || new Docker();
}

ScenarioExecutor.prototype.exec = function(composeFile, scenario, callback) {
    var containers = scenario.getContainers();

    this.docker.modify(composeFile, containers, function (){

    });
};


module.exports = ScenarioExecutor;



