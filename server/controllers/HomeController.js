
module.exports = {
	index(req, res){
		res.send( {
			status: true,
			message: 'Welcome to the Cashback Transaction API'
		})
	}
}