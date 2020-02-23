import { Utils } from 
    "https://johnmschneider.github.io/projects/rpg%20game%201/utils.js";

var Generator = {};
Generator.SETTLEMENT_NAME = 0;
Generator.SETTLEMENT_SIZE_MODIFIER = 1;
Generator.SETTLEMENT_SIZE = 2;
Generator.SETTLEMENT_CHUNK_LOCATION = 3;

Generator.genSettlement = function() {
    let nameFrags = [
        "la", "ri", "on", "ale", "gan", "dor", "er", "an", "ex", "'", "tal", "lis",
        "kesh", "esh", "en", "ygg", "dra", "sil", "val", "hal", "so", "vn", "gard"];

    let nameSyllableCount = Math.floor((Math.random() + 1) * 4);
    let maxSyllablesPerWord = 3;
    let name = Utils.capitalizefirstLetter(Utils.randomPick(nameFrags));

    //  Generate name
    //
    // (-1 to account for one syllable already created)
    for (let i = 0; i < nameSyllableCount - 1; i++) {
        var outputSyllable = Utils.randomPick(nameFrags);
        
        // (-1 to account for one syllable already created)
        if (i == maxSyllablesPerWord - 1) {
            outputSyllable = " " + Utils.capitalizefirstLetter(outputSyllable);
        }

        name = name + outputSyllable;
    }

    //  Generate size
    let sizeModifiers = ["small", "moderately-sized", "large"];
    let sizes = ["city", "town", "village", "camp"];

    let sizeModifier = Utils.randomPick(sizeModifiers);
    let size = Utils.randomPick(sizes);

    //  Generate location
    let location = [(Math.random() - Math.random()) * 500, 
                    (Math.random() - Math.random()) * 500];
    
    return [name, sizeModifier, size, location];
}

Generator.genMountainPass = function(isStartLocation) {
    if (isStartLocation) {
        let newSettlement = Generator.genSettlement();

        Utils.newParagraph("You are travelling through a mountain pass on your way " +
            "to the " + newSettlement[Generator.SETTLEMENT_SIZE_MODIFIER] + " " +
            newSettlement[Generator.SETTLEMENT_SIZE] + " of " + 
            newSettlement[Generator.SETTLEMENT_NAME] + ".");
    }
}

Generator.genDesert = function(isStartLocation) {
    if (isStartLocation) {
        let newSettlement = Generator.genSettlement();
        
        let sizes = ["small", "large", "vast"];
        let size = Utils.randomPick(sizes);
        
        Utils.newParagraph("You are travelling through a " + size + " desert on your " +
            "way to the " + newSettlement[Generator.SETTLEMENT_SIZE_MODIFIER] + " " +
            newSettlement[Generator.SETTLEMENT_SIZE] + " of " + 
            newSettlement[Generator.SETTLEMENT_NAME] + ".");
    }
}

Generator.genLocation = function(isStartLocation) {
    let location = Math.random();
    let numOfChoices = 2;
    
    if (location < 1/numOfChoices) {
        Generator.genMountainPass(isStartLocation);
    } 
    else {
        Generator.genDesert(isStartLocation);
    }
}

Generator.genStartLocation = function() {
    Utils.newParagraph("You are " + window.player.name + ".");
    Generator.genLocation(true);
}

export { Generator };