const nodemailer = require('nodemailer');

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'ivandyseiko@gmail.com',
                pass: ''
            }
        });

        let subject = 'Тема'

        let mailOptions = {
            from: 'WebApp форма',
            to: 'ivandyseiko@gmail.com',
            subject: subject,
            html: '<h1>Проверка</h1>'
        };
        export const send = () => {
            return new Promise((resolve, reject) => {
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(info);
                })
            })
        }