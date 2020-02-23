import { Generator } from 
    "https://johnmschneider.github.io/projects/rpg%20game%201/generator.js";
import { Player } from 
    "https://johnmschneider.github.io/projects/rpg%20game%201/player.js";
import { Utils } from 
    "https://johnmschneider.github.io/projects/rpg%20game%201/utils.js";
import commandLineInputListener from 
    "https://johnmschneider.github.io/projects/rpg%20game%201/commandLineInput.js";

export default function main() {
    window.player = null;
    window.commandHandler =  null;
    
    document.getElementById("commandLine").addEventListener("keydown", 
        commandLineInputListener, true);
    
    Utils.newParagraph("What is your name?");
    
    commandHandler = function(event) {
        if (event.key === "Enter") {
            let inputText = document.getElementById("commandLine").value;
            document.getElementById("commandLine").value = "";
            
            Utils.newParagraph("> " + inputText);
            window.player = new Player(inputText);
            
            Generator.genStartLocation();
            
            window.commandHandler = null;
        }
    }
    
    Utils.newParagraph("mainScript.main: time to travel 5kms at 5km/h == " + 
        Utils.travelTime([0, 0], [5, 0]).toPrettyString());
}