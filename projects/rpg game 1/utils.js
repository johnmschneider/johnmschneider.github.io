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

export { Utils };