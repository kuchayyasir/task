const { Ruleset } = require('../models');

module.exports = {
	async index(req, res) {
		const rulesets = await Ruleset.find();
		res.send(rulesets);
	},
	async store(req, res) {
		const newRuleSet = new Ruleset(req.body);
		await newRuleSet.save();
		res.status(201).send(newRuleSet);
	},
	async show(req, res) {
		const ruleset = await Ruleset.findById(req.params.id);
		res.send(ruleset);
	},
	async update(req, res) {

	},
	async remove(req, res) {

	}

};