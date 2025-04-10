const pricing = {
    car: {
        firstHour: 5000,
        nextHour: 3000,
        oneDay: 50000,
    },
    bike: {
        firstHour: 2000,
        nextHour: 1000,
        oneDay: 20000,
    },
};

function calculateTotal(vehicleType, duration) {
    let oneDay = 24
    const vehiclePricing = pricing[vehicleType.toLowerCase()];
    if (duration <= 1) {
        return vehiclePricing.firstHour;
    } else if (duration <= oneDay) {
        return vehiclePricing.firstHour + ((duration - 1) * vehiclePricing.nextHour);
    }
    return vehiclePricing.firstHour + ((duration - 1) * vehiclePricing.nextHour) + vehiclePricing.oneDay;
}

module.exports = calculateTotal