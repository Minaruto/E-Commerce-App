const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User.js');
const app = express ();
const bcrypt = require('bcryptjs');
const bcryptSalt = bcrypt.genSaltSync(10);

require('dotenv').config();

app.use(express.json());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'

}));

mongoose.connect(process.env.MONGO_URL);

app.get('/test', (req, res) => {
    res.json('test ok');
})

app.post('/register', async (req, res) => {
    const {name, email, password} = req.body;
    try{
        const userCred = await User.create({
        name, 
        email, 
        passsword: bcrypt.hashSync(password, bcryptSalt)
    });
    res.json(userCred)
    } catch (e) {
        res.status(422).json(e);
    }


})

app.listen(4000);