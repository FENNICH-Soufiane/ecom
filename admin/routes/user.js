const express = require('express');
const router = express.Router();


router.get("/usertest", (req, res) => {
    res.send("user test is successfull");
})

router.post("/postname", (req, res) => {
    const user = req.body.username;
    console.log(user);
    res.status(200).json({message: 'ok', user});
})

module.exports = router