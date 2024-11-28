const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    serviceType: { type: String, required: true }, // e.g., Catering, Photography
    contact: { type: String, required: true },
    events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }], // Events they are part of
}, { timestamps: true });

module.exports = mongoose.model("Vendor", VendorSchema);
