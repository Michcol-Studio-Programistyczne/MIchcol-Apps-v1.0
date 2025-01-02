// server/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
// ewentualnie noteRoutes, taskRoutes itp.

const app = express();

// Połączenie z MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Trasy
app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);
// i tak dalej...
// app.use('/api/notes', noteRoutes);
// app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
