class PointOfInterest {
    constructor(description, parent, chunkLocation, metadata) {
        this.description = description;
        this.parent = parent;
        this.chunkLocation = chunkLocation;
        this.metadata = metadata;
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
    
    getMetadata() {
        return this.metadata;
    }
}

export { PointOfInterest };