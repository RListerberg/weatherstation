/**
 * Created by Johan on 2017-02-08.
 */
$(function () {

    var stations = [];
    var numStations = 0;

    $('#btn').click(function () {

        var apiUrl = "http://localhost:8080";
        var stationIndex = 0;

        $.getJSON("js/stations.json", function (data) {
            numStations = data.length;

            data.forEach(function (currData) {
                var addedStation;

                $.ajax({
                    type: "POST",
                    url: apiUrl + "/station",
                    data: JSON.stringify(currData),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                        stations.push(data);
                        addedStation = data;
                        var textInfo = "Added station " + JSON.stringify(addedStation) + " (total added: " + stationIndex + ")";
                        $('#output').text(textInfo);
                        stationIndex++;
                        console.log("Number of stations: " + stations.length);
                        finish(stationIndex)
                    }
                }, "json");
            });
            $('#output').append('... ALL DONE!')
        });

        var finish = function (stationIndex) {
            if (stationIndex === numStations) {
                var dataIndex = 0;
                $.getJSON("js/MOCK_DATA.json", function (data) {
                    data.forEach(function (currDataPoint) {
                        var addedData;
                        var currStation = stations[Math.floor(Math.random() * stations.length)];
                        currDataPoint.station = currStation;
                        currDataPoint.dataTime = currDataPoint.dataTime+":00";

                        $.ajax({
                            type: "POST",
                            url: apiUrl + "/weatherdata",
                            data: JSON.stringify(currDataPoint),
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function (data) {
                                dataIndex++;
                                var textInfo = "Added data: " + JSON.stringify(data) + " (total added: " + dataIndex + ")";
                                $('#dataoutput').text(textInfo);
                                console.log('Added data nr: '+dataIndex);
                            }
                        });
                    });
                   $('#dataoutput').text("Adding data...");
                });
            }
        };

    });
});