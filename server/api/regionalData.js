function getRegionalData(jsonVal) {
    const monthName = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    newData = {};
    console.log(jsonVal.length)
    for (var i = 0; i < jsonVal.length; i++) {
        var month;
        if ((jsonVal[i]['Date of Purchase']).includes('/')) {
            var month = parseInt((jsonVal[i]['Date of Purchase']).split('/')[0])
        } else {
            var month = parseInt((jsonvfcd...Val[i]['Date of Purchase']).split('-')[0])
        }
        // console.log(jsonVal[i]['Date of Purchase'], month);
        if (newData[(monthName[month])] === undefined || newData[(monthName[month])] === null) {
            newData[(monthName[month])] = 1;
        } else {
            newData[(monthName[month])] = (newData[(monthName[month])]) + 1;
        }
    }
    return newData;
}

module.exports = getRegionalData;