import GENESIS_BLOCK from "./config.js"
import {CheckHash} from "./hash.js"

class Block{
    timestamps : number;
    prevHash : string;
    nonce : number;
    difficulty : number;
    data : string;
    hash : string;

    constructor(timestamps : number,prevHash : string,nonce : number,difficulty : number, data : string,hash : string,){
        this.timestamps = timestamps;
        this.prevHash = prevHash;
        this.nonce = nonce;
        this.difficulty = difficulty;
        this.data = data;
        this.hash = hash;
    }
    static genesis() : Block{
        return new Block(
            GENESIS_BLOCK.timestamps,
            GENESIS_BLOCK.prevHash,
            GENESIS_BLOCK.nonce,
            GENESIS_BLOCK.difficulty,
            GENESIS_BLOCK.data,
            GENESIS_BLOCK.hash,
        )
    }
    static Mineblock(prevBlock, data) : Block {
        let timestamps = Date.now();
        let prevHash = prevBlock.hash;
        let difficulty = prevBlock.difficulty;
        let check_hash_validation = CheckHash({timestamps,prevHash,difficulty,data});
        
        return new this(
            check_hash_validation.timestamps,
            prevHash,
            check_hash_validation.nonce,
            difficulty,
            data,
            check_hash_validation.hash,
        )
    }
}

const genesis = Block.genesis();
const mineblock1 = Block.Mineblock(genesis, "Block2");
const mineblock2 = Block.Mineblock(mineblock1, "Block3");
console.log(genesis)
console.log(mineblock1)
console.log(mineblock2);

export {Block}
