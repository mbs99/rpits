export class Reader {
    private fs = require('fs');

    public readFile(callback) {

        this.fs.readFile('file.txt', callback);
    }
}