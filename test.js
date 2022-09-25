var nodemailer = require("nodemailer");

var sender = nodemailer.createTransport({
service: 'gmail',
auth: {
	user: 'newsletterproject974@gmail.com',
	pass: 'gwrunayvradhcebg'
}
});

var mail = {
from: "newsletterproject974@gmail.com",
to: "hritikarya40@gmail.com",
subject: "Sending Email using Node.js",
text: "That was easy!"
};

sender.sendMail(mail, function(error, info) {
if (error) {
	console.log(error);
} else {
	console.log("Email sent successfully: "
				+ info.response);
}
});
