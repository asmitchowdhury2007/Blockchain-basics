import {createHash} from "crypto"

const secret = "abc";
function CreateHash(inputs) : string{
    let hash = createHash("sha256", secret).update(inputs.timestamps.toString() + inputs.prevHash + inputs.nonce.toString() + inputs.difficulty.toString() + inputs.data).digest("hex");
    return hash;
}
function CheckHash(inputs) : Object{
    let nonce = 0;
    let timestamps = inputs.timestamps;
    let hash = CreateHash({timestamps,prevHash:inputs.prevHash,nonce,difficulty:inputs.difficulty,data : inputs.data});
    while(!hash.startsWith("0".repeat(inputs.difficulty))){
        nonce++;
        timestamps = Date.now();
        hash =CreateHash({timestamps,prevHash:inputs.prevHash,nonce,difficulty:inputs.difficulty,data : inputs.data});

    }
    return {timestamps,nonce,hash}
}
export {CheckHash}
