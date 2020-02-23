import { Utils } from "https://johnmschneider.github.io/projects/rpg%20game%201/utils.js";

function doCommand(inputText){
    
}

export default function commandLineInputListener(){
    if (window.commandHandler == null) {
        if (event.key === "Enter") {

            let inputText = document.getElementById("commandLine").value;
            document.getElementById("commandLine").value = "";
            Utils.newParagraph("> " + inputText);

            doCommand(inputText);
        }
    }
    else
    {
        window.commandHandler(event);
    }
}
