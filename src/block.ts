class block{
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
}

const block1 = new block("27/8","ex567","qwer456","Hi Asmit");
console.log(block1);
