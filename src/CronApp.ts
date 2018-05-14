
import { TemperatureService } from "./TemperatureService";
import request = require("request");
import { WeatherUndergroundUpdater } from "./WeatherUndergroundUpdater";

export class CronApp {

    private temperatureService = new TemperatureService();
    private updater = new WeatherUndergroundUpdater();

    public updateWeatherUnderground() {
        this.temperatureService.getTemperature((err, data) => {
            if(err) {
                console.log(err);
            }
            else {
                this.updater.update(data);
            }
        });
    }
}