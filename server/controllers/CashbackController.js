const { Ruleset } = require('../models');
const CashbackController = {
  async index(req, res){
  const pipeline = [
      {
          "$lookup": {
              "from": "transactions",
              "let": {
                  "startDate": "$startDate",
                  "endDate": "$endDate",
                  "amount": "$cashback",
                  "redemptionLimit": "$redemptionLimit"
              },
              "pipeline": [
                  {
                      "$match": {
                          "$expr": {
                              "$and": [
                                  {
                                      "$gte": [
                                          "$date",
                                          "$$startDate"
                                      ]
                                  },
                                  {
                                      "$lt": [
                                          "$date",
                                          "$$endDate"
                                      ]
                                  }
                              ]
                          }
                      }
                  },
                  {
                      "$addFields": {
                          "transactionId": "$id",
                          "amount": "$$amount"
                      }
                  }
              ],
              "as": "transactions"
          }
      }, 
      {
          "$project": {
              "transactions": {
                  "$slice": [
                      "$transactions",
                      "$redemptionLimit"
                  ]
              }
          }
      }, 
      {
          "$unwind": {
              "path": "$transactions"
          }
      }, 
      {
          "$replaceRoot": {
              "newRoot": {
                  "$mergeObjects": [
                      {
                          "transactionId": "",
                          "amount": ""
                      },
                      "$transactions"
                  ]
              }
          }
      }, 
      {
          "$project": {
              "_id": 0.0,
              "transactionId": 1.0,
              "amount": 1.0
          }
      }
  ];
  const cashbacks = await Ruleset.aggregate(pipeline);
		res.status(200).send(cashbacks);
  },
  async store(req, res){
  
  },
  async show(req, res){

  },
  async update(req, res){

  },
  async remove(req, res){

  }
};

module.exports = CashbackController;