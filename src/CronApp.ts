
import { TemperatureService } from "./TemperatureService";
import request = require("request");
import { WeatherUndergroundUpdater } from "./WeatherUndergroundUpdater";
import { Settings } from "./Settings";

export class CronApp {

    private temperatureService : TemperatureService;
    private updater : WeatherUndergroundUpdater;

    constructor(settings : Settings) {
        this.temperatureService = new TemperatureService(settings);
        this.updater = new WeatherUndergroundUpdater(settings);
    }

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