const item = require('../../models/item');

const get_items = (req, res) => {
  item.find().sort({ date: -1 }).then(items => res.json(items));
}

const post_item = (req, res) => {
  const newItem = new item(req.body);
  newItem.save().then(item => res.json(item));
}

const update_item = (req, res) => {
  item.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function (item) {
    item.findOne({ _id: req.params.id }).then(function (item) {
      res.json(item);
    });
  });
}

const delete_item = (req, res) => {
  item.findByIdAndDelete({ _id: req.params.id }).then(function (item) {
    res.json({ success: true });
  });
}

module.exports = { delete_item, update_item, post_item, get_items }