/**
 * Server communications class
 */
import Request from "superagent";

import {serverUrl} from './Constants';
import {loginURL} from './Constants';
import {weatherDataURL} from './Constants';
import {stationURL} from './Constants';
import {statisticsAVGURL} from './Constants';
import {statisticsURL} from './Constants';

import {jwtToken} from './Constants';

//const serverUrl = "http://localhost:8080/";
//const loginURL = "login";
//const weatherDataURL = "weatherdata/";
//const stationURL = "station/";
//const statisticsURL = "statistics/"


class ServerCommunications {

    // LOGIN ===========================================================================================================

    doLogin(id, password) {
        return new Promise((resolve, reject) => {
            Request
                .post(serverUrl + loginURL)
                .send({
                    id: id,
                    password: password
                })
                .end((err, res) => {
                    if (err || !res.ok) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
        });
    }

    // WEATHERDATA =====================================================================================================

    getAllWeatherData() {
        return new Promise((resolve, reject) => {
            Request
                .get(serverUrl + weatherDataURL)
                .end((err, res) => {
                    if (err || !res.ok) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
        });
    }

    getOneWeatherData(id) {
        return new Promise((resolve, reject) => {
            Request
                .get(serverUrl + weatherDataURL + id)
                .end((err, res) => {
                    if (err || !res.ok) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
        });
    }

    addWeatherData(data) {
        return new Promise((resolve, reject) => {
            Request
                .post(serverUrl + weatherDataURL)
                .set("Authorization", jwtToken)
                .send(data)
                .end((err, res) => {
                    if (err || !res.ok) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
        });
    }

    updateWeatherData(data) {
        return new Promise((resolve, reject) => {
            Request
                .put(serverUrl + weatherDataURL + data.id)
                .set("Authorization", jwtToken)
                .send(data)
                .end((err, res) => {
                    if (err || !res.ok) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
        });
    }

    deleteWeatherData(id) {
        return new Promise((resolve, reject) => {
            Request
                .delete(serverUrl + weatherDataURL + id)
                .set("Authorization", jwtToken)
                .end((err, res) => {
                    if (err || !res.ok) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
        });
    }

    // STATION =========================================================================================================

    getAllStation() {
        return new Promise((resolve, reject) => {
            Request
                .get(serverUrl + stationURL)
                .end((err, res) => {
                    if (err || !res.ok) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
        });
    }

    getOneStation(id) {
        return new Promise((resolve, reject) => {
            Request
                .get(serverUrl + stationURL + id)
                .set("Authorization",jwtToken)
                .end((err, res) => {
                    if (err || !res.ok) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
        });
    }

    addStation(data) {
        return new Promise((resolve, reject) => {
            Request
                .post(serverUrl + stationURL)
                .send(data)
                .set("Authorization", jwtToken)
                .end((err, res) => {
                    if (err || !res.ok) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
        });
    }

    updateStation(data) {
        return new Promise((resolve, reject) => {
            Request
                .put(serverUrl + stationURL + data.id)
                .send(data)
                .set("Authorization", jwtToken)
                .end((err, res) => {
                    if (err || !res.ok) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
        });
    }

    deleteStation(id) {
        return new Promise((resolve, reject) => {
            Request
                .delete(serverUrl + stationURL + id)
                .set("Authorization", jwtToken)
                .end((err, res) => {
                    if (err || !res.ok) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
        });
    }

    // STATISTICS ======================================================================================================

    getStats(statsString) {
        return new Promise((resolve, reject) =>{
           Request
               .get(serverUrl+statisticsURL+statsString)
               .end((err, res) => {
                    if (err || !res.ok) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
               });
        });
    }

    getAvgTemp() {
        return new Promise((resolve, reject) => {
            Request
                .get(serverUrl+statisticsAVGURL+"temp")
                .end((err, res) => {
                    if (err || !res.ok) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
        });
    }

    getAvgRainfall() {
        return new Promise((resolve, reject) => {
            Request
                .get(serverUrl+statisticsAVGURL+"rainfall")
                .end((err, res) => {
                    if (err || !res.ok) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
        });
    }

    getAvgWindVelocity() {
        return new Promise((resolve, reject) => {
            Request
                .get(serverUrl+statisticsAVGURL+"wind_velocity")
                .end((err, res) => {
                    if (err || !res.ok) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
        });
    }

    getAvgCloudCoverage() {
        return new Promise((resolve, reject) => {
            Request
                .get(serverUrl+statisticsAVGURL+"cloud_coverage")
                .end((err, res) => {
                    if (err || !res.ok) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
        });
    }

    getAvgHumidity() {
        return new Promise((resolve, reject) => {
            Request
                .get(serverUrl+statisticsAVGURL+"humidity")
                .end((err, res) => {
                    if (err || !res.ok) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
        });
    }

    getAvgPressure() {
        return new Promise((resolve, reject) => {
            Request
                .get(serverUrl+statisticsAVGURL+"pressure")
                .end((err, res) => {
                    if (err || !res.ok) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
        });
    }
}

export let serverCommunications = new ServerCommunications();