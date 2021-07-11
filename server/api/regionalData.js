function getRegionalData(jsonVal) {

    newData = {};
    console.log(jsonVal.length)
    for (var i = 0; i < jsonVal.length; i++) {
        var month;
        if ((jsonVal[i]['Date of Purchase']).includes('/')) {
            var month = parseInt((jsonVal[i]['Date of Purchase']).split('/')[0])
        } else {
            var month = parseInt((jsonVal[i]['Date of Purchase']).split('-')[0])
        }
        // console.log(jsonVal[i]['Date of Purchase'], month);
        if (newData[month] === undefined || newData[month] === null) {
            newData[month] = 1;
        } else {
            newData[month] = (newData[month]) + 1;
        }
    }
    return newData;
}

module.exports = getRegionalData;