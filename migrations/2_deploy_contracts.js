const StarNotary = artifacts.require("StarNotaryv3");

module.exports = function(deployer) {
  deployer.deploy(StarNotary);
};
