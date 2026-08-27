import GENESIS_BLOCK from "./config.js"
class Block{
    timestamps : string;
    prevHash : string;
    hash : string;
    data : string;
    constructor(timestamps : string,prevHash : string,hash : string,data: string){
        this.timestamps = timestamps;
        this.prevHash = prevHash;
        this.hash = hash;
        this.data = data;
    }
    static genesis() : Block{
        return new Block(
            GENESIS_BLOCK.timestamps,
            GENESIS_BLOCK.prevHash,
            GENESIS_BLOCK.hash,
            GENESIS_BLOCK.data
        )
    }
}

const block1 = new Block("27/8","ex567","qwer456","Hi Asmit");
const genesis = Block.genesis();
console.log(genesis);
console.log(block1);
