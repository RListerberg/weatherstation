
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
export const loginURL = "/login/";


/***********************************************************************************************************************
 * STATES
 **********************************************************************************************************************/

export var loggedIn = false;
export var jwtToken = "";

/***********************************************************************************************************************
 * COMPONENT-DATA
 **********************************************************************************************************************/
export const windValues = [
    {id: 1, value: "North", text: "North"},
    {id: 2, value: "East", text: "East"},
    {id: 3, value: "South", text: "South"},
    {id: 4, value: "West", text: "West"},
    {id: 5, value: "Northeast", text: "Northeast"},
    {id: 6, value: "Northwest", text: "Northwest"},
    {id: 7, value: "Southeast", text: "Southeast"},
    {id: 8, value: "Southwest", text: "Southwest"},
];
export const cloudValues = [
    {id: 1, value: "Fibratus", text: "Fibratus"},
    {id: 2, value: "Capillatus", text: "Capillatus"},
    {id: 3, value: "Castellanus", text: "Castellanus"},
    {id: 4, value: "Lenticularis", text: "Lenticularis"},
    {id: 5, value: "Mediocris", text: "Mediocris"},
    {id: 6, value: "Spissatus", text: "Spissatus"},
    {id: 7, value: "Calvus", text: "Calvus"},
    {id: 8, value: "Nebulosus", text: "Nebulosus"},
    {id: 9, value: "Uncinus", text: "Uncinus"},
    {id:10, value: "Humilis", text: "Humilis"},
    {id:11, value: "Stratiformis", text: "Stratiformis"},
    {id:12, value: "Fractus", text: "Fractus"},
    {id:13, value: "Floccus", text: "Floccus"}
];
export const cloudCoverageValues = [
    {id: 1, value: 1, text: "1/8"},
    {id: 2, value: 2, text: "2/8"},
    {id: 3, value: 3, text: "3/8"},
    {id: 4, value: 4, text: "4/8"},
    {id: 5, value: 5, text: "5/8"},
    {id: 6, value: 6, text: "6/8"},
    {id: 7, value: 7, text: "7/8"},
    {id: 8, value: 8, text: "8/8"},
];