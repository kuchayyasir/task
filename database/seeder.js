require('./index');
const mongoose = require('mongoose');
const { Transaction,Ruleset } = require('../server/models');

async function seedTransactions() {
 await Transaction.deleteMany();

  console.log('Seeding Transactions to ' + mongoose.connection.name + '...');
  const transactions = [
    { id: 1, date: "2021-04-16" },
    { id: 2, date: "2021-04-17" },
    { id: 3, date: "2021-04-18" },
    { id: 4, date: "2021-04-19" },
    { id: 5, date: "2021-04-20" },
    { id: 6, date: "2021-04-21" },
    { id: 7, date: "2021-04-22" },
    { id: 8, date: "2021-04-23" },
    { id: 9, date: "2021-04-24" },
    { id: 10, date: "2021-04-25" },
    { id: 11, date: "2021-04-26" },
  ];

  for (transaction of transactions) {
    const newtransaction = new Transaction(transaction);
    await newtransaction.save();
  }

  const a = await Transaction.find();
  console.log('Transaction: ', a);
}

async function seedRuleSet() {
  await Ruleset.deleteMany();
  console.log('Seeding RuleSet to ' + mongoose.connection.name + '...');
  const rulesets = [
    {
      startDate: "2021-04-01",
      endDate: "2021-04-30",
      cashback: 3.00,
      redemptionLimit: 10
      }
  ];

  for (ruleset of rulesets) {
    const newruleset = new Ruleset(ruleset);
    await newruleset.save();
  }

  const a = await Ruleset.find();
  console.log('Ruleset: ', a);
  process.on('exit', function(code) {
    return console.log(`About to exit with code ${code}`);
});
}
seedTransactions();
seedRuleSet();

