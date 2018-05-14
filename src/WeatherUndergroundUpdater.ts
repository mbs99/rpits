import { Temperature } from "./Temperature";
import request = require("request");
import { Settings } from "./Settings";

export class WeatherUndergroundUpdater {

    private fs = require('fs');
    private settings: Settings;

    constructor(settings: Settings) {
        this.settings = settings;
    }

    public update(temperature: Temperature) {

        let updateUrl = this.settings.UpdateUrl + "?dateutc=now";
        updateUrl = updateUrl + "&action=updateraw";
        updateUrl = updateUrl + "&ID=" + this.settings.ID;
        updateUrl = updateUrl + "&PASSWORD=" + this.settings.PWD;
        updateUrl = updateUrl + "&tempf=";
        updateUrl = updateUrl + temperature.fTemp.toString();

        console.log('updateUrl:', updateUrl);

        request(encodeURI(updateUrl), function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
        });
    }
}