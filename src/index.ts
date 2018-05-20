import { ExpressApp } from "./ExpressApp";
import { CronApp } from "./CronApp";
import { Settings } from "./Settings";

const fs = require('fs');

fs.readFile("cfg/settings.json", function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        const settings : Settings = JSON.parse(data);
        if (2 === process.argv.length) {
            const app = new ExpressApp(settings);
            app.listen();
        }
        else {
            if ("cron" === process.argv[2]) {

                const app = new CronApp(settings);
                app.updateWeatherUnderground();
            }
        }
    }
});

