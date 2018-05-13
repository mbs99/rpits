
'use strict';
import { Reader } from './Reader'
import { Parser } from './Parser';
import { Temperature } from './Temperature';
import { TemperatureService } from './TemperatureService';

export class ExpressApp {
    private process = require('process');
    private port = this.process.env.PORT || 3000
    private expressLib = require('express');
    private express = this.expressLib();

    constructor() {
    }

    public listen() {
        this.mountRoutes()
        this.express.listen(this.port, (err) => {
            if (err) {
              return console.log(err)
            }
          
            return console.log(`server is listening on ${this.port}`)
          })
    }

    private mountRoutes(): void {
        const router = this.expressLib.Router()
        router.get('/', (req, res) => {
            const temperatureService = new TemperatureService();
            temperatureService.getTemperature((err, data) => {
                if(err) {
                    res.status(500).json(err);
                }
                else {
                    res.json(data);
                }
            });
        })
        this.express.use('/', router)
    }
}