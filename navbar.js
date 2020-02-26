function createNavButton(buttonText, link) {
    let button = document.createElement("INPUT");
    
    button.type = "button";
    button.value = buttonText;
    button.className = "navbar";
    button.addEventListener("click", function(){ location.href = link; });
    
    document.getElementById("navbar").appendChild(button);
}

function createNavbar() {
    createNavButton("Home", "index.html");
    createNavButton("Projects", "/projects/");
    //createNavButton("RPG game 1", "/projects/rpg game 1/rpgIndex.html");
}

createNavbar();