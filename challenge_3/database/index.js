const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/checkout', { useNewUrlParser: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', ()=> console.log('DB connected'));

var checkoutSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    zipCode: String,
    creditCardNumber: Number,
    expiryDate: Number,
    CVV: Number,
    billingZipCode: String
})

var Checkout = mongoose.model('Checkout', checkoutSchema);

module.exports.Checkout = Checkout;