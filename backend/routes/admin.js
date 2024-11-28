const express = require("express");
const Admin = require("../models/admin");
const router = express.Router();

// Create Admin
router.post("/", async (req, res) => {
    try {
        const admin = new Admin(req.body);
        await admin.save();
        res.status(201).json(admin);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get All Admins
router.get("/", async (req, res) => {
    try {
        const admins = await Admin.find();
        res.json(admins);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a User
router.delete("/:id", async (req, res) => {
    try {
        const adminId = req.params.id;

        const admin = await Admin.findByIdAndDelete(adminId);

        if (!admin) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({ message: "Admin deleted successfully", admin });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
