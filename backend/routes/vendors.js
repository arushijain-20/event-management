const express = require("express");
const Vendor = require("../models/vendor");
const router = express.Router();

// Create Vendor
router.post("/", async (req, res) => {
    try {
        const vendor = new Vendor(req.body);
        await vendor.save();
        res.status(201).json(vendor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get All Vendors
router.get("/", async (req, res) => {
    try {
        const vendors = await Vendor.find();
        res.json(vendors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
