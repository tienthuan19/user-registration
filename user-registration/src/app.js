const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Cấu hình view engine
app.set('view engine', 'ejs');
app.set('views', './views'); // Đảm bảo đường dẫn đúng

// Routes
app.get('/', (req, res) => {
    res.render('register'); // Hiển thị file register.ejs
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
