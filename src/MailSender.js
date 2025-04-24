const nodemailer = require('nodemailer');

async function sendEmail() {
    let transporter = nodemailer.createTransport({
        host: undefined,
        port: 587,
        secure: false,
        auth: {
            user: undefined,
            pass: undefined
        }
    });

    let mailOptions = {
        from: undefined,
        to: undefined,
        subject: undefined,
        text: undefined,
        html: undefined
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Письмо отправлено: %s', info.messageId);
    } catch (error) {
        console.log('Ошибка отправки: ', error);
    }
}