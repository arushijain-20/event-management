const express = require("express");
const User = require("../models/user");
const router = express.Router();



// Create User
router.post("/", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get All Users
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create User
router.post("/", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get particular User
router.get("/:user", async (req, res) => {
    const username=req.params.user
    const user = DUMMY_USERS.find(u=>{
        return u.username === username
    })
    res.json({user})
});

module.exports = router;
