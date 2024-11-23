const express = require('express');
const router = express.Router();
var nodemailer = require("nodemailer");

var mailSender = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'newsletterproject974@gmail.com',
        pass: 'gwrunayvradhcebg'
    }
});

// var mail = {
// from: "newsletterproject974@gmail.com",
// to: "hritikarya40@gmail.com",
// subject: "Sending Email using Node.js",
// text: "That was easy!"
// };

router.post('/sendmail', (req, res) => {
    mailSender.sendMail(req.body, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent successfully: "
                        + info.response);
        }
        });
})

module.exports = router;