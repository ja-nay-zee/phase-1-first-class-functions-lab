
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplyValue) {
    return function (value) {
        return multiplyValue * value;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

// function selectDifferentDrivers(arrayOfDrivers, function) {
//     console.log(returnFirstTwoDrivers);
//     console.log(returnLastTwoDrivers);
// }

const selectDifferentDrivers = function (drivers,driversToReturn) {
    return driversToReturn(drivers);
}

// function selectDifferentDrivers(arrayOfDrivers, selection) {
//     return function(arrayOfDrivers) {
//         return [drivers.slice(0,2),drivers.slice(-2)];
//     }
// }