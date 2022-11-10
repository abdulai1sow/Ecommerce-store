const order = require('../../models/order');
const cart = require('../models/Cart');
const user = require('../models/User');
const config = require('config');

module.exports.get_orders = async (req, res) => {
  const userId = req.params.id;
  order.find({ userId }).sort({ date: -1 }).then(orders => res.json(orders));
}

module.exports.checkout = async (req, res) => {
  try {
    const userId = req.params.id;
    const { source } = req.body;
    let cart = await cart.findOne({ userId });
    let user = await user.findOne({ _id: userId });
    const email = user.email;
    if (cart) {
      const charge = await stripe.charges.create({
        amount: cart.bill,
        currency: 'inr',
        source: source,
        receipt_email: email
      })
      if (!charge) throw Error('Payment failed');
      if (charge) {
        const order = await order.create({
          userId,
          items: cart.items,
          bill: cart.bill
        });
        const data = await cart.findByIdAndDelete({ _id: cart.id });
        return res.status(201).send(order);
      }
    }
    else {
      res.status(500).send("You do not have items in cart");
    }
  }
  catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
}