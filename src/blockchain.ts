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
    longest_chain(chain : Block[]) : string {
        if(chain.length < this.chain.length){
            return "This chain is not longer than the previous one";
          
        }
        else if(!BlockChain.chain_validation(chain)){
            return "This chain is not valid";
           
     
        }
        else{
            this.chain = chain;
            return "Everything is ok";
            
        }
    }
}
const blockchain = new BlockChain();
const block1 = blockchain.addBlock("Block1");
const block2 = blockchain.addBlock("Block2");
const block3 = blockchain.addBlock("Block3");

console.log(blockchain.chain)
console.log(BlockChain.chain_validation(blockchain.chain));
console.log(blockchain.longest_chain([
  {
    timestamps: '1',
    prevHash: '00000x000',
    hash: 'asbcns34x',
    data: 'GENESIS'
  },
   {
    timestamps: 1788011754451,
    prevHash: 'asbcns34x',
    hash: 'e0c69598ca398cf8ce4201cf6e15cfa71ea4ff0552bd7a5bb871539b5838809c',
    data: 'Block1'
  },
  {
    timestamps: 1788011754451,
    prevHash: 'e0c69598ca398cf8ce4201cf6e15cfa71ea4ff0552bd7a5bb871539b5838809c',
    hash: 'e6d3e3a0010fedf2d5f18f2c0afbc004c3c1b3797c3d4254c1194bd1ea0535a5',
    data: 'Block2'
  },
  {
    timestamps: 1788011754451,
    prevHash: 'e6d3e3a0010fedf2d5f18f2c0afbc004c3c1b3797c3d4254c1194bd1ea0535a5',
    hash: 'a652d7e0948e3befd3b0f6610e83b92d0be04c0a6972ced6878a3ba01fc53b57',
    data: 'Block4'
  }
]))