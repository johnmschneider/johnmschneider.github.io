import { Utils } from 
    "https://johnmschneider.github.io/projects/rpg%20game%201/utils.js";
import { Settlement } from 
    "https://johnmschneider.github.io/projects/rpg%20game%201/pointsOfInterest/settlement.js";
   
var Generator = {};

Generator.genMountainPass = function(isStartLocation) {
    if (isStartLocation) {
        let newSettlement = Settlement.genSettlement();
        let travelTimeToSettlement = Utils.travelTime(window.player.getChunkLocation(), 
            newSettlement.getChunkLocation());
        
        Utils.newParagraph("You are travelling through a mountain pass on your way " +
            "to the " + newSettlement.getSizeModifier() + " " +
            newSettlement.getSize() + " of " + 
            newSettlement.getName() + ". You are about " + 
                travelTimeToSettlement.toPrettyString() + " away.");
    }
}

Generator.genDesert = function(isStartLocation) {
    if (isStartLocation) {
        let newSettlement = Generator.genSettlement();
        let travelTimeToSettlement = Utils.travelTime(window.player.getChunkLocation(), 
            newSettlement.getChunkLocation());
        
        let sizes = ["small", "large", "vast"];
        let size = Utils.randomPick(sizes);
        
        Utils.newParagraph("You are travelling through a " + size + " desert on your " +
            "way to the " + newSettlement.getSizeModifier() + " " +
            newSettlement.getSize() + " of " + 
            newSettlement.getName() + ". You are about " + 
            travelTimeToSettlement.toPrettyString() + " away.");
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