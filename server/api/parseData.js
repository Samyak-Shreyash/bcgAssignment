function parseData(jsonVal) {
    var newData = {};
    newData['Policy_id'] = jsonVal['_id'];
    newData['Cust_id'] = jsonVal['Customer_id'];
    newData['date_of_purchase'] = jsonVal['Date of Purchase'];
    newData['Fuel'] = jsonVal['Fuel'];
    newData['VehicleSegment'] = jsonVal['VEHICLE_SEGMENT'];
    newData['Premium'] = jsonVal['Premium'];
    newData['Cust_Inc_group'] = jsonVal['Customer_Income group'];
    newData['Cust_gender'] = jsonVal['Customer_Gender'];
    newData['Cust_region'] = jsonVal['Customer_Region'];
    newData['Cust_Marital_Status'] = jsonVal['Customer_Marital_status'];

    return newData;
}

module.exports = parseData;