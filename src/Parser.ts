export class Parser {

    public parse(buffer : String) {
        const lines = buffer.split('\n');
        const crcLineParts = lines[0].split(' ');
        const tempLineParts = lines[1].split(' ');
        const rawTemp = tempLineParts[9].split('=');

        return rawTemp[1];
    }
}