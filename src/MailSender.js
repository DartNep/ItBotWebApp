import nodemailer from 'nodemailer';

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: '',
                pass: ''
            }
        });

        let subject = 'Тема'

        let mailOptions = {
            from: 'WebApp форма',
            to: 'ivandyseiko@gmail.com',
            subject: subject,
            html: <h1>Проверка</h1>
        };
        const send = () => {
            return new Promise((resolve, reject) => {
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(info);
                })
            })
        }
        //send()