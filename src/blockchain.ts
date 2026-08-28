import {Block} from "./block.js"

class BlockChain {
    chain : Block[];
    constructor(){
        this.chain = [Block.genesis()];
    }
    addBlock(data : string) : Block{
        const newBlock = Block.Mineblock(this.chain[this.chain.length-1],data);
        this.chain.push(newBlock);
        return newBlock;
    }
}
const blockchain = new BlockChain();
console.log(blockchain.addBlock("Block1"));
console.log(blockchain.addBlock("Block2"));
console.log(blockchain.addBlock("Block3"));
