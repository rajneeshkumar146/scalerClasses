const nodemailer = require("nodemailer");

const fs = require("fs");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();

const { SENDGRID_API_KEY } = process.env;
console.log("sendgrid key: ", SENDGRID_API_KEY);


function replaceContent(content, creds) {
    // creds: {name: "Sauditya", otp: 1234}
    const allKeysArr = Object.keys(creds);
    allKeysArr.forEach(function (key) {
        content = content.replace(`#{${key}}`, creds[key]);   // #{name}, #{otp}
    });

    return content;
};

async function EmailHelper(templateName, receiverEmail, creds) {
    try {
        console.log("Email Helper backend debugging pointer: ", templateName, receiverEmail, creds);
        const templatePath = path.join(__dirname, "email_templates", templateName);
        let content = await fs.promises.readFile(templatePath, "utf-8");
        const emailDetails = {
            to: receiverEmail,
            from: "jasbir.singh@scaler.com",
            subject: "Mail From Scaler Show",
            text: `Hi ${creds.name} this is your reset otp  ${creds.otp}`,
            html: replaceContent(content, creds)
        };

        const transportDetails = {
            host: "smtp.sendgrid.net",
            port: 465,
            auth: {
                user: "apikey",
                pass: SENDGRID_API_KEY,
            },
        };

        const transporter = nodemailer.createTransport(transportDetails);
        await transporter.sendMail(emailDetails);
        console.log("email is sent");

    } catch (err) {
        console.log("Error: ", err);
    }

}

module.exports = EmailHelper;