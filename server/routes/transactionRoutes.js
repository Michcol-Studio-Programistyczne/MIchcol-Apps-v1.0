// server/routes/transactionRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  getTransactions,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} = require('../controllers/transactionController');

// wszystkie ścieżki chronione middlewarem auth
router.get('/', auth, getTransactions);
router.post('/', auth, createTransaction);
router.put('/:id', auth, updateTransaction);
router.delete('/:id', auth, deleteTransaction);

module.exports = router;
