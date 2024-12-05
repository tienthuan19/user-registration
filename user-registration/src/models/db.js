const mongoose = require('mongoose'); // Import mongoose
require('dotenv').config(); // Import dotenv để đọc biến môi trường

// Kết nối đến MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// Định nghĩa Schema cho User
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Tạo Model cho User
const User = mongoose.model('User', userSchema);

// Xuất cả mongoose và User
module.exports = { mongoose, User };
