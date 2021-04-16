const { Transaction } = require('../models');

const TransactionController = {
  async index(req, res){
   
  },
  async store(req, res){ 
    try{
      var newTransaction = new Transaction(req.body);
      let data =await newTransaction.save();
      console.log(data)
      res.status(201).send(newTransaction);
    }catch(exeception){
      if (exeception.code == 11000) {
        res.status(400).send('Id already exists');
      }
      else{
        res.status(500).send('Internal Server Error');
      }
    
    }
   
  },
  async show(req, res){
  	const objective = await Transaction.findById(req.params.id);
  	res.send(objective);
  },
  async update(req, res){

  },
  async remove(req, res){

  }
};

module.exports = TransactionController;