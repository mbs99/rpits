export class Temperature {
    public dTemp :number;
    public fTemp: number;

    constructor(fTemp : number) {
        this.dTemp = ((fTemp / 1000.0) * 9 / 5.0) + 32;;
        this.fTemp = fTemp;
    }
}
