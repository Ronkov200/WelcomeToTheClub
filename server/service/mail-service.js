import nodemailer from 'nodemailer'
class MailService {

        constructor() {
            console.log('SMTP_HOST:', process.env.SMTP_HOST);
            console.log('SMTP_PORT:', process.env.SMTP_PORT);
            console.log('SMTP_USER:', process.env.SMTP_USER);
            console.log('SMTP_PASSWORD:', process.env.SMTP_PASSWORD);

            this.transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                secure: false,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASSWORD
                }
            })
        }

    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Активация аккаунта на ' + process.env.API_URL,
            text: '',
            html:
                `
                <div>
                    <h1>Для активации перейдите по ссылке</h1>
                    <a href="${link}">${link}</a> 
                </div>
                `
        })
        console.log('SMTP_HOST:', process.env.SMTP_HOST);
    }
}

export default new MailService() // При использовании ES-модулей синтаксис отличается от Common JS