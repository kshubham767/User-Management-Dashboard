require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;
const DBConnect = require('./db');
const bcrypt = require("bcrypt");
const salt = 10;
const UserModal = require('./UserModal');
app.use(express.json({ limit: '8mb' }));

const cors = require('cors');
app.use(cors());

DBConnect();

app.get("/", (req, res) => {
    res.send({ message: "Hello From Server" });
})

app.post("/user/signup", async (req, res) => {
    try {
        const { email, name, password, phone } = req.body;
        console.log(name, email, phone, password)
        let user;
        user = await UserModal.findOne({ email });
        if (user) {
            return res.status(409).send({ message: "User given email already exist" });
        }
        const hashPassword = await bcrypt.hash(password, salt);
        user = await UserModal.create({ email, name, password: hashPassword, phone });
        res.status(201).send({ user: user, token: token, message: "User created successfully" });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
})

app.get("/users", async (req, res) => {
    try {
        const users = await UserModal.find();
        return res.status(200).send({ users });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
})


app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT);
})