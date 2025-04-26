const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());

// CORS configuration (allow all origins or specify your frontend URL for security)
app.use(cors({
    origin: process.env.FRONTEND_URL || '*', // optional: replace * with your frontend URL if needed
}));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
const studentRoutes = require('./routes/students');
app.use('/students', studentRoutes);

// Basic route
app.get('/', (req, res) => {
    res.send('Student Management System API is running 🚀');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
