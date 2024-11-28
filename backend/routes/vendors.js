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

// Update Vendor Membership
router.patch("/:id/membership_duration", async (req, res) => {
    try {
        const vendorId = req.params.id;
        const { membership_duration } = req.body;

        if (!membership_duration || typeof membership_duration !== "number") {
            return res.status(400).json({ error: "Invalid membership value" });
        }

        const vendor = await Vendor.findByIdAndUpdate(
            vendorId,
            { membership_duration },
            { new: true, runValidators: true }
        );

        if (!vendor) {
            return res.status(404).json({ error: "Vendor not found" });
        }

        res.json(vendor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete Vendor
router.delete("/:id", async (req, res) => {
    try {
        const vendorId = req.params.id;

        const vendor = await Vendor.findByIdAndDelete(vendorId);

        if (!vendor) {
            return res.status(404).json({ error: "Vendor not found" });
        }

        res.json({ message: "Vendor deleted successfully", vendor });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
