export class Temperature {
    public dTemp :number;
    public fTemp: number;

    constructor(dTemp : number) {
        this.dTemp = dTemp
        this.fTemp = dTemp * 1.8 +32;
    }
}
