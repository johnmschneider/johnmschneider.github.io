function createNavButton(buttonText, link) {
    let button = document.createElement("INPUT");
    
    button.type = "button";
    button.value = buttonText;
    button.className = "navbar";
    button.addEventListener("click", function() {
        location.href = link;
        button.classList.add("currentPage");
        });
        //since we navigated to a new page we don't have to unbold the other buttons
    });
    
    document.getElementById("navbarButtons").appendChild(button);
    return button;
}

function createNavbar() {
    var homeButton = createNavButton("Home", 
        "https://johnmschneider.github.io/index.html");
    
    // the main index won't be able to use the click event to load itself (browser is
    //  directly navigating to the website)
    if (location.href.search("johnmschneider.github.io/index.html") != -1) {
        homeButton.classList.add("currentPage");
    } 
    
    createNavButton("Projects", "https://johnmschneider.github.io/projects/" +
        "projectIndex.html");
    //createNavButton("RPG game 1", "/projects/rpg game 1/rpgIndex.html");
}

createNavbar();