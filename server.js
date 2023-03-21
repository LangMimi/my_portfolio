const express = require("express");
const nodemailer = require("nodemailer");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());

//ROUTES
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/home.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/about.html");
});

app.get("/project", (req, res) => {
    res.sendFile(__dirname + "/public/project.html");
});

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/public/contact.html");
});

app.post("/contact", (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "practicecode2023@gmail.com",
            pass: "Lace143**",
        },
    });

    const mailOptions = {
        from: req.body.email,
        to: "practicecode2023@gmail.com",
        subject: req.body.subject,
        text: req.body.message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent" + info.response);
            res.send("success");
        }
    });
});

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});
