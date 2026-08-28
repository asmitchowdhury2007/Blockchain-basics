import {Block} from "./block.js"
import {createHash} from "crypto"
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
    static chain_validation(chain : Block[]) : boolean {
        if(JSON.stringify(chain[0])!==JSON.stringify(Block.genesis())){
            return false;
        }
        for(let i=1; i<chain.length;i++){
            const {timestamps,prevHash,data} = chain[i];
            if(chain[i-1].hash !== chain[i].prevHash){
                return false;
            }
            const validHash = createHash("sha256").update(timestamps+prevHash+data).digest("hex");
            if(validHash !== chain[i].hash){
                return false;
            }
        }
        return true;
    }
}
const blockchain = new BlockChain();
const block1 = blockchain.addBlock("Block1");
const block2 = blockchain.addBlock("Block2");
const block3 = blockchain.addBlock("Block3");
console.log(blockchain.chain)
console.log(BlockChain.chain_validation(blockchain.chain));
blockchain.chain[1].data = "Hacked Data";
console.log(blockchain.chain)
console.log(BlockChain.chain_validation(blockchain.chain));