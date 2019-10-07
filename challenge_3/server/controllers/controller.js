const mongoose = require('../../database/index.js');

module.exports = {
    addInfo: (req, res) => {
        var newCheckout = new mongoose.Checkout(req.body);
        // console.log(req.body)
        newCheckout.save((err, documents)=>{
            if(err){
                console.log(err)
            } else {
                res.sendStatus(200);
            }
        })

    }
}