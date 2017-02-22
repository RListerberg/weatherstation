
/***********************************************************************************************************************
 * URLS
 **********************************************************************************************************************/

// Base API URL
export const serverUrl = "http://localhost:8080";

// Endpoints
export const weatherDataURL = "/weatherdata/";
export const stationURL = "/station/";
export const statisticsAVGURL = "/statistics/avg/";
export const statisticsURL = "/statistics";
export const loginURL = "/login";


/***********************************************************************************************************************
 * STATES
 **********************************************************************************************************************/

export var loggedIn = false;
export var jwtToken = "";

export function setToken(string) {
    jwtToken = string;
}

export function setLoggedIn(logged) {
    loggedIn = logged;
}