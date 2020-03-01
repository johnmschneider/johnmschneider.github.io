import { PointOfInterest } from 
    "https://johnmschneider.github.io/projects/rpg%20game%201/pointsOfInterest/pointOfInterest.js";
import { Utils } from 
    "https://johnmschneider.github.io/projects/rpg%20game%201/utils.js";

class Settlement extends PointOfInterest {
    constructor(name, sizeModifier, size, chunkLocation) {
        super("the " + sizeModifier + " " + size + " of " + name, null, chunkLocation);
        
        this.name = name;
        this.sizeModifier = sizeModifier;
        this.size = size;
    }
    
    static genSettlement() {
        let nameSyllableCount = Math.floor((Math.random() + 1) * 4);
        let maxSyllablesPerWord = 3;
        let name = Utils.capitalizefirstLetter(Utils.randomPick(Settlement.nameFrags));

        //  Generate name
        //
        // (-1 to account for one syllable already created)
        for (let i = 0; i < nameSyllableCount - 1; i++) {
            var outputSyllable = Utils.randomPick(Settlement.nameFrags);

            // (-1 to account for one syllable already created)
            if (i == maxSyllablesPerWord - 1) {
                outputSyllable = " " + Utils.capitalizefirstLetter(outputSyllable);
            }

            name = name + outputSyllable;
        }

        //  Generate size
        let sizeModifier = Utils.randomPick(Settlement.sizeModifiers);
        let size = Utils.randomPick(Settlement.sizes);

        //  Generate location
        let location = [(Math.random() - Math.random()) * 500, 
                        (Math.random() - Math.random()) * 500];

        return new Settlement(name, sizeModifier, size, location);
    }

    getName() {
        return this.name;
    }
    
    getSizeModifier() {
        return this.sizeModifier;
    }
    
    getSize() {
        return this.size;
    }
}

//static vars
Settlement.nameFrags = [
        "la", "ri", "on", "ale", "gan", "dor", "er", "an", "ex", "'", "tal", "lis",
        "kesh", "esh", "en", "ygg", "dra", "sil", "val", "hal", "so", "vn", "gard"];
Settlement.sizeModifiers = ["small", "moderately-sized", "large"];
Settlement.sizes = ["city", "town", "village", "camp"];

export { Settlement };