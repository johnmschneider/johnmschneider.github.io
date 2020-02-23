import { Generator } from "/generator.js";
import { Player } from "/player.js";
import { Utils } from "/utils.js";
import commandLineInputListener from "/commandLineInput.js";

class PointOfInterest {
    constructor(description, parent, chunkLocation, metadata){
        this.description = description;
        this.parent = parent;
        this.chunkLocation = chunkLocation;
        this.metadata = metadata;
    }
}

export default function main() {
    window.player = null;
    window.commandHandler =  null;
    
    document.getElementById("commandLine").addEventListener("keydown", 
        commandLineInputListener, true);
    
    Utils.newParagraph("What is your name?");
    
    commandHandler = function(event) {
        if (event.key === "Enter"){
            let inputText = document.getElementById("commandLine").value;
            
            Utils.newParagraph("> " + inputText);
            window.player = new Player(inputText);
            
            Generator.genStartLocation();
            
            window.commandHandler = null;
        }
    }
}