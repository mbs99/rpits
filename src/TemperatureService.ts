import { Parser } from "./Parser";
import { Reader } from "./Reader";
import { Temperature } from "./Temperature";

export interface TemperatureServiceCallback {
    ( error: Error, result?: Temperature ) : void;
}

export class TemperatureService {
    private reader = new Reader();
    private parser = new Parser();

    public getTemperature(callback : TemperatureServiceCallback) {
        this.reader.readFile(function (err, data) {
            if(err) {
                callback(err,null);
            }
            else {
                const parser = new Parser();
                const fTemp = parser.parse(new String(data));
                const temperatureResponse = new Temperature(Number(fTemp));
                callback(null, temperatureResponse);
            }
        });
    }
}