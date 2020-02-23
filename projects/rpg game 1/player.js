class Player {
    constructor(name){
        this.name = name;
        
        //x, z
        this.location = [0, 0];
    }
    
    getChunkLocation() {
        return this.location;
    }
}

export { Player };