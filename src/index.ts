'use strict';
import { ExpressApp } from './ExpressApp'

if (2 === process.argv.length) {
    const app = new ExpressApp();
    app.listen();
}
else {
    if("cron" === process.argv[2]) {
        console.log("xxx");
    }
}


