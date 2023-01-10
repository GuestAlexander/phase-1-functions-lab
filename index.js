// Code your solution in this file!
let Hq = 42
function distanceFromHqInBlocks(distance) {
    return Math.abs(distance - Hq)
}

function distanceFromHqInFeet(distance) {
    const blocks = distanceFromHqInBlocks(distance)
    return (blocks * 264)
}

function distanceTravelledInFeet(begin, end) {
    let blocks = Math.abs(begin - end);
    let ft = blocks * 264;
    return ft
}

function calculatesFarePrice(start, destination) {
    let feetTravelled = distanceTravelledInFeet(start, destination)
    if (feetTravelled >= 400 && feetTravelled <= 2000) {
        return (feetTravelled - 400) * 0.02
    } else if (feetTravelled >= 2000 && feetTravelled <= 2500) {
        return 25
    } else if (feetTravelled > 2500) {
        return 'cannot travel that far'
    } else {
        return 0
    }
}





