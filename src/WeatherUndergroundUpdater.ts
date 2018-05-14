import { Temperature } from "./Temperature";
import request = require("request");

export class WeatherUndergroundUpdater {

    private fs = require('fs');

    public update(temperature: Temperature) {

        this.readFile(function (err, data) {
            if (err) {
                console.log('error:', err);
            }
            else {
                const settings = JSON.parse(data);
                let updateUrl = settings.UpdateUrl + "?dateutc=now";
                updateUrl = updateUrl + "&action=updateraw";
                updateUrl = updateUrl + "&ID=" + settings.ID;
                updateUrl = updateUrl + "&PASSWORD=" + settings.PWD;
                updateUrl = updateUrl + "&tempf=";
                updateUrl = updateUrl + temperature.fTemp.toString();

                request(encodeURI(updateUrl), function (error, response, body) {
                    console.log('error:', error); // Print the error if one occurred
                    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                    console.log('body:', body); // Print the HTML for the Google homepage.
                });
            }
        });
    }

    private readFile(callback) {

        this.fs.readFile('cfg/settings.json', callback);
    }
}