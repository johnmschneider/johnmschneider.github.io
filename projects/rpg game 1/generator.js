import { Utils } from "https://johnmschneider.github.io/projects/rpg%20game%201/utils.js";

var Generator = {};
Generator.SETTLEMENT_NAME = 0;
Generator.SETTLEMENT_SIZE_MODIFIER = 1;
Generator.SETTLEMENT_SIZE = 2;
Generator.SETTLEMENT_CHUNK_LOCATION = 3;

Generator.genSettlement = function() {
    let nameFrags = [
        "la", "ri", "on", "ale", "gan", "dor", "er", "an", "ex", "'",
        "kesh", "esh", "en", "ygg", "dra", "sil", "val", "hal", "so", "vn", "gard"];

    let nameSyllableCount = Math.floor((Math.random() + 1) * 5);
    let maxSyllablesPerWord = 3;
    let name = Utils.capitalizefirstLetter(Utils.randomPick(nameFrags));

    //  Generate name
    for (let i = 0; i < nameSyllableCount - 1; i++) {
        var outputSyllable = Utils.randomPick(nameFrags);

        if (i == maxSyllablesPerWord) {
            outputSyllable = " " + Utils.capitalizefirstLetter(outputSyllable);
        }

        name = name + outputSyllable;
    }

    //  Generate size
    let sizeModifiers = ["small", "moderately-sized", "large"]
    let sizes = ["city", "town", "village", "camp"];

    let sizeModifier = Utils.randomPick(sizeModifiers);
    let size = Utils.randomPick(sizes);

    //  Generate location
    let location = [(Math.random() - Math.random()) * 500, 
                    (Math.random() - Math.random()) * 500];

    return [name, sizeModifier, size, location];
}

Generator.genMountainPass = function(isStartLocation) {
    let newSettlement = Generator.genSettlement();
    
    Utils.newParagraph("You are travelling through a mountain pass on your way " +
        "to the " + newSettlement[Generator.SETTLEMENT_SIZE_MODIFIER] + " " +
        newSettlement[Generator.SETTLEMENT_SIZE] + " of " + 
        newSettlement[Generator.SETTLEMENT_NAME] + ".");
}

Generator.genLocation = function(isStartLocation) {
    Generator.genMountainPass(isStartLocation);
}

Generator.genStartLocation = function() {
    Utils.newParagraph("You are " + window.player.name + ".");
    Generator.genLocation(true);
}

export { Generator };