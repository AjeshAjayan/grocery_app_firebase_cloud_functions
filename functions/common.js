const nodemailer = require("nodemailer");

const sendPasswordThruMail = async (toMail, newUserPassword) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtpout.secureserver.net",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'chinthuraj.p@avials.com', // generated ethereal user
            pass: 'Avials@2020', // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Avials 👻" chinthuraj.p@avials.com', // sender address
        to: toMail, // list of receivers
        subject: "Welcome to Avials ✔", // Subject line
        text: "Congratulation to our new manager, Your password to access our service is \'" + newUserPassword + "\' use your e-mail to login",
        html: "<b>Congratulation to our new manager, Your password to access our service is \'" + newUserPassword + "\' use your e-mail to login</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = { sendPasswordThruMail }