const express = require("express");
const Vendor = require("../models/vendor");
const Item = require("../models/item");
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

// Login Vendor
router.post("/login", async (req, res) => {
    
    const { email, password } = req.body;
  
    try {
      // Find vendor by username
      const vendor = await Vendor.findOne({ email });
      if (!vendor) {
        return res.status(401).json({ error: "Invalid username or password" });
      }
  
      // Check if password matches
      const isMatch = await vendor.comparePassword(password);
      if (!isMatch) {
        return res.status(401).json({ error: "Invalid username or password" });
      }
  
      // Successful login
      res.status(200).json({ message: "Login successful", vendorId: vendor._id });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
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

router.post("/:vendorId/items", async (req, res) => {
    try {
      const { vendorId } = req.params;
      const { name, price, description, quantity } = req.body;
  
      // Create new item
      const newItem = new Item({
        name,
        price,
        description,
        quantity
      });
      await newItem.save();
  
      // Find the vendor and add the item to their items array
      const vendor = await Vendor.findById(vendorId);
      if (!vendor) {
        return res.status(404).json({ message: "Vendor not found" });
      }
  
      vendor.items.push(newItem._id); // Add the new item's ID to the vendor's items array
      await vendor.save();
  
      res.status(201).json(newItem);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

module.exports = router;
