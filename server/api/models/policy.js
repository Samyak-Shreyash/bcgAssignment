const mongoose = require('mongoose');

const policySchema = mongoose.Schema({
    "_id": Number,
    "Date of Purchase": String,
    "Customer_id": Number,
    "Fuel": String,
    "VEHICLE_SEGMENT": String,
    "Premium": String,
    "bodily injury liability": String,
    "personal injury protection": String,
    "property damage liability": String,
    "collision": String,
    "comprehensive": String,
    "Customer_Gender": String,
    "Customer_Income group": String,
    "Customer_Region": String,
    "Customer_Marital_status": String
}, { collection: 'policy' });

module.exports = mongoose.model('policy', policySchema);