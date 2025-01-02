// server/controllers/transactionController.js
const Transaction = require('../models/Transaction');

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.id }).sort({ createdAt: -1 });
    return res.json(transactions);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

exports.createTransaction = async (req, res) => {
  try {
    const { type, amount, category, date, description } = req.body;
    const newTransaction = new Transaction({
      user: req.user.id,
      type,
      amount,
      category,
      date,
      description,
    });
    await newTransaction.save();
    return res.status(201).json(newTransaction);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

exports.updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );
    if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
    return res.json(transaction);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id
    });
    if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
    return res.json({ message: 'Transaction deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};
