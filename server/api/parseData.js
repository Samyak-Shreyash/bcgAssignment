function parseData(jsonVal) {
    var newData = {};
    newData['Policy ID'] = jsonVal['Policy_id'];
    newData['Fuel'] = jsonVal['Fuel'];
    newData['Vehicle Segment'] = jsonVal['VEHICLE_SEGMENT'];
    newData['Premium'] = jsonVal['Premium'];
    newData['bodily injury liability'] = jsonVal['bodily injury liability'];
    newData['personal injury protection'] = jsonVal[' personal injury protection'];
    newData['property damage liability'] = jsonVal[' property damage liability'];
    newData['Customer Income group'] = jsonVal['Customer_Income group'];
    newData['Customer Region'] = jsonVal['Customer_Region'];
    newData['Customer Marital Status'] = jsonVal['Customer_Marital_status'];

    return newData;
}

module.exports = parseData;