import {CheckHash} from "./hash.js"

let timestamps = Date.now();
const prevHash = "0000x000";
let nonce = 0;
const difficulty = 4;
const data = "GENESIS"
let check_hash_validation = CheckHash({timestamps,prevHash,difficulty,data});

const GENESIS_BLOCK = {
    timestamps : check_hash_validation.timestamps,
    prevHash ,
    nonce : check_hash_validation.nonce,
    difficulty,
    data ,
    hash : check_hash_validation.hash,
}

export default GENESIS_BLOCK;