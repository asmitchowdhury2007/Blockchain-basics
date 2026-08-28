import {createHash} from "crypto"

const secret = "abc";
function CreateHash({...inputs}) : string{
    const hash = createHash("sha256", secret).update(inputs.timestamps + inputs.prevHash + inputs.data).digest("hex");
    return hash;
}

export {CreateHash}
