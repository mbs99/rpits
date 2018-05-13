
import { TemperatureService } from "./TemperatureService";

export class CronApp {

    private temperatureService = new TemperatureService();

    public updateWeatherUnderground() {
        this.temperatureService.getTemperature((err, data) => {
            if(err) {
                console.log(err);
            }
            else {
                
            }
        });
    }
}