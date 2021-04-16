const express = require('express'),
	path = require('path'),
	rootPath = path.normalize(__dirname + '/../'),
	router = express.Router(),
	{ TransactionController,HomeController,RulesetController,CashbackController } = require('./controllers');

module.exports = function (app) {
	router.get('/', HomeController.index);
	router.get('/transaction', TransactionController.index);
	router.post('/transaction', TransactionController.store);
	router.get('/transaction/:id', TransactionController.show);
	router.put('/transaction/:id', TransactionController.update);
	router.delete('/transaction/:id', TransactionController.remove);
	router.get('/ruleset', RulesetController.index);
	router.post('/ruleset', RulesetController.store);
	router.get('/ruleset/:id', RulesetController.show);
	router.put('/ruleset/:id', RulesetController.update);
	router.delete('/ruleset/:id', RulesetController.remove);
	router.get('/cashback', CashbackController.index);
	router.post('/cashback', CashbackController.store);
	router.get('/cashback/:id', CashbackController.show);
	router.put('/cashback/:id', CashbackController.update);
	router.delete('/cashback/:id', CashbackController.remove);

	app.use(router);
};