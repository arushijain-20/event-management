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
router.get("/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findOne({ userId });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update membership_duration of a User
router.patch("/:id/update_membership", async (req, res) => {
    try {
        const userId = req.params.id;
        const { membership_duration } = req.body;

        if (typeof membership_duration !== "number" || membership_duration <= 0) {
            return res.status(400).json({ error: "Invalid membership_duration value" });
        }

        const user = await User.findByIdAndUpdate(
            userId,
            { membership_duration },
            { new: true, runValidators: true }
        );

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete a User
router.delete("/:id", async (req, res) => {
    try {
        const userId = req.params.id;

        const user = await User.findByIdAndDelete(userId);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({ message: "User deleted successfully", user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
