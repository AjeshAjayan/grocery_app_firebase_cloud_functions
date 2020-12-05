const express = require('express');
const router = express.Router();
const { sendPasswordThruMail } = require('../common');

router.post('/', async (req, res) => {

    try {
        const newUserPassword = req.body.newUserPassword;
        const toMail = req.body.toMail;

        await sendPasswordThruMail(toMail, newUserPassword)

        res.statusCode = 200;

        res.send({ message: "Email send" }) // ok
    } catch (e) {
        console.log(e);
        res.sendStatus(500) // internal server error
    }
})

module.exports = router;
