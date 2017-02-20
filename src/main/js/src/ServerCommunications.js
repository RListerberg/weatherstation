/**
 * Server communications class
 */
import Request from "superagent";



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
                        resolve(res.body);
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
                        resolve(res.body);
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
                        resolve(res.body);
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
                        resolve(res.body);
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
                        resolve(res.body);
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
                        resolve(res.body);
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
                        resolve(res.body);
                    }
                });
        });
    }

    getOneStation(id) {
        return new Promise((resolve, reject) => {
            Request
                .get(serverUrl + stationURL + id)
                .end((err, res) => {
                    if (err || !res.ok) {
                        reject(err);
                    } else {
                        resolve(res.body);
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
                        resolve(res.body);
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
                        resolve(res.body);
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
                        resolve(res.body);
                    }
                });
        });
    }
}

export let serverCommunications = new ServerCommunications();