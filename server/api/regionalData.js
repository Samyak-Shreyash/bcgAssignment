function getRegionalData(jsonVal) {

    newData = {};
    for (var i = 0; i < jsonVal.length; i++) {
        var month;
        if ((jsonVal[i]['Date of Purchase']).includes('/')) {
            var month = (jsonVal[i]['Date of Purchase']).split('/')[1]
        } else {
            var month = (jsonVal[i]['Date of Purchase']).split('-')[1]
            if (newData[month] === undefined || newData[month] === null) {
                newData[month] = 1;
            } else {
                newData[month] = int(newData[month]) + 1;
            }
            console.log(month)
        }
    }

    return newData;
}

module.exports = getRegionalData;