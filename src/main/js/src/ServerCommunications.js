/**
 * Server communications class
 */
import Request from "superagent";

const serverUrl = "http://localhost:8080/";
const loginURL = "login";
const weatherDataURL = "weatherdata/";
const stationURL = "station/";


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
            //TODO set JWT header
            Request
                .post(serverUrl + weatherDataURL)
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
            //TODO set JWT header
            Request
                .put(serverUrl + weatherDataURL + data.id)
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
            //TODO set JWT header
            Request
                .delete(serverUrl + weatherDataURL + id)
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

    getOneStation(id, token) {
        return new Promise((resolve, reject) => {
            Request

                .get(serverUrl + stationURL + id)
                .set("Authorization",token)
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
            //TODO set JWT header
            Request
                .post(serverUrl + stationURL)
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

    updateStation(data) {
        return new Promise((resolve, reject) => {
            //TODO set JWT header
            Request
                .put(serverUrl + stationURL + data.id)
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

    deleteStation(id) {
        return new Promise((resolve, reject) => {
            //TODO set JWT header
            Request
                .delete(serverUrl + stationURL + id)
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