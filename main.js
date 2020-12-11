const nodemailer = require("nodemailer");
const express = require("express");

const app = express();

app.post("/send", async(req, res) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "tate.torp27@ethereal.email",
            pass: "NS13Rmpxm5gvpvt8FH",
        },
    });

    let mailOptions = {
        from: '"Odin" <russel36@ethereal.email>',
        to: "web@h2ocoatings.com",
        subject: "Enviado desde nodemailer",
        text: "Hello mate",
    };

    let info = await transporter.sendMail(mailOptions, (error, info) => {
        console.log("hola?")
        if(error) {
            console.log(error.message);
        } else {
            console.log("Email enviado")
            console.log("mesage id: ", info.messageId)
            res.status(200).jsonp(req.body)
        }
    });

});

app.listen(3000, () => {
    console.log("Server open")
});