import { PointOfInterest } from 
    "https://johnmschneider.github.io/projects/rpg%20game%201/pointOfInterest.js";

class Settlement extends PointOfInterest {
    constructor(name, sizeModifier, size, chunkLocation) {
        super("the " + sizeModifier + " " + size + " of " + name, null, chunkLocation);
        
        this.name = name;
        this.sizeModifier = sizeModifier;
        this.size = size;
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

export { Settlement };