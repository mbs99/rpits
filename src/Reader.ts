export class Reader {
    private fs = require('fs');
    private path : string;

    constructor(path : string)  {
        this.path = path;
    }

    public readFile(callback) {
        this.fs.readFile(this.path, callback);
    }
}