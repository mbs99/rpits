import { ExpressApp } from "./ExpressApp";
import { CronApp } from "./CronApp";

if (2 === process.argv.length) {
    const app = new ExpressApp();
    app.listen();
}
else {
    if("cron" === process.argv[2]) {
        const app = new CronApp();
        app.updateWeatherUnderground();
    }
}
