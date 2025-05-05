const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const crypto = require('crypto');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function verifyTelegramWebAppInitData(initData, botToken) {
    const secretKey = crypto.createHmac('sha256', 'Telegram').update(botToken).digest();
    const dataCheckString = Object.keys(initData)
        .sort()
        .map(key => `${key}=${initData[key]}`)
        .join('\n');
    const hash = crypto.createHmac('sha256', secretKey).update(dataCheckString).digest('hex');

    return hash === initData.hash;
}

app.post('/verify-init-data', (req, res) => {
    const initData = req.body;

    if (!initData || Object.keys(initData).length === 0) {
        return res.status(400).json({ success: false, error: 'Пустой initData.' });
    }

    const isValid = verifyTelegramWebAppInitData(initData, "YOUR_BOT_TOKEN"); // Replace with your bot token

    if (isValid) {
        res.json({ success: true, userId: initData.user.id });
    } else {
        res.status(400).json({ success: false, error: 'Неверный initData.' });
    }
});

const port = 3000; // Choose a port
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
