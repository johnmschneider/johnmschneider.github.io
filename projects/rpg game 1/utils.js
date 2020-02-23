class TravelTime {
    constructor(days, hours, minutes) {
        this.days = days;
        this.hours = hours;
        this.minutes = minutes;
    }
    
    getDays() {
        return this.days;
    }
    
    getHours() {
        return this.hours;
    }
    
    getMinutes() {
        return this.minutes;
    }
    
    toPrettyString() {
        return this.getDays() + " days, " + this.getHours() + " hours and " + 
            this.getMinutes() + " minutes";
    }
}

var Utils = {};
Utils.capitalizefirstLetter = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Pick a random element from an array
Utils.randomPick = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

Utils.newParagraph = function(text) {
    let newPara = document.createElement("P");

    newPara.textContent = text;
    document.getElementById("contentDiv").appendChild(newPara);
}

Utils.distance = function(pos1, pos2) {
    return Math.sqrt(
        Math.pow(pos1[0] - pos2[0], 2) +
        Math.pow(pos1[1] - pos2[1], 2));
}

Utils.travelTime = function(pos1, pos2) {
    let kilometersToTravel = Utils.distance(pos1, pos2);
    let kilometersPerHour = 5;
    let days = 0, hours = 0, minutes = 0;
    
    hours = kilometersToTravel/kilometersPerHour;
    
    if (hours > 24) {
        days = Math.floor(hours/24);
        hours = Math.floor(hours % 24);
        minutes = Math.floor((hours % 24) % 60);
    }
    
    return new TravelTime(days, hours, minutes);
}

export { Utils };