const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'hellen.gleichner@ethereal.email',
        pass: 'JHgaUYcrx3HNdVAscc'
    }
});

const mailOptions = {
    from: 'Servidor Node.js',
    to: ['facundolitterio7@gmail.com', 'hellen.gleichner@ethereal.email'],
    subject: 'Mail de prueba desde Node.js',
    html: '<h1 style="color: blue;">Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span></h1>'
}

transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
        console.log(err)
        return err
    }
    console.log(info)
})
