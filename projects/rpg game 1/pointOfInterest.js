class PointOfInterest {
    constructor(description, parent, chunkLocation) {
        this.description = description;
        this.parent = parent;
        this.chunkLocation = chunkLocation;
    }
    
    getDescription() {
        return this.description;
    }
    
    getParent() {
        return this.parent;
    }
    
    getChunkLocation() {
        return this.chunkLocation;
    }
}

export { PointOfInterest };