import { Parser } from "./Parser";
import { Reader } from "./Reader";
import { Temperature } from "./Temperature";
import { Settings } from "./Settings";

export interface TemperatureServiceCallback {
    ( error: Error, result?: Temperature ) : void;
}

export class TemperatureService {
    private reader : Reader;
    private parser = new Parser();

    constructor(settings : Settings) {
        this.reader = new Reader(settings.Device);
    }

    public getTemperature(callback : TemperatureServiceCallback) {
        this.reader.readFile(function (err, data) {
            if(err) {
                callback(err,null);
            }
            else {
                const parser = new Parser();
                const fTemp = parser.parse(new String(data));
                const temperatureResponse = new Temperature(Number(fTemp) / 1000.0);
                callback(null, temperatureResponse);
            }
        });
    }
}