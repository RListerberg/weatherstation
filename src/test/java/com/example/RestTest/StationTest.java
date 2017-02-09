package com.example.RestTest;

import com.example.entities.Station;
import org.junit.*;
import org.junit.rules.ExpectedException;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.validation.ConstraintViolationException;
import java.util.List;

import static org.assertj.core.api.Java6Assertions.assertThat;
import static org.springframework.test.util.AssertionErrors.assertTrue;

/**
 * <h1>Created by Mattias on 2017-02-08.</h1>
 */
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
@RunWith(SpringJUnit4ClassRunner.class)
public class StationTest {

    private static String url;
    private Station station;

    @Autowired
    private TestRestTemplate restTemplate;

    @BeforeClass
    public static void setup() {
        url = "http://localhost:8080/station";
    }

    @Before
    public void setupBeforeEachMethod() {
        station = new Station("password", 12.21f, 21.12f, false);
        station = restTemplate.postForObject(url, station, Station.class);
    }

    @After
    public void cleanUpDb() {
        restTemplate.delete(url + "/" + station.getId());
    }

    @Test
    public void testToGetAllStations() {
        // Get all stations from db
        List<Station> stationList = restTemplate.getForObject(url, List.class);
        assertThat(stationList.size()).isGreaterThan(0);
    }

    @Test
    public void testToGetSpecificStation() {
        // Get a Station with id
        Station returnedStation = restTemplate.getForObject(url + "/" + station.getId(), Station.class);
        assertThat(returnedStation.getId()).isEqualTo(station.getId());
    }

    @Test
    public void testToUpdateStation() {
        // Get a Station with id
        Station returnedStation = restTemplate.getForObject(url + "/" + station.getId(), Station.class);

        // Change a field
        returnedStation.setLat(12.21f);

        // Put and assert that the field is updated in db
        restTemplate.put(url, returnedStation);
        assertThat(restTemplate.getForObject(url + "/" + returnedStation.getId(), Station.class).getLat()).isEqualTo(12.21f);
    }

    @Test
    public void testToFetchWrongStation() {
        // Fetch a Station with an id that doesn't exist
        assertThat(restTemplate.getForObject(url + "/100", Station.class)).isNull();
    }

    @Test
    public void testToPostANewStation() {
        // Post a new Station
        Station station = new Station("password", 11.1f, 12.2f, false);
        Station returnedStation = restTemplate.postForObject(url, station, Station.class);

        assertTrue("Failed to post new Station", returnedStation.getId() > 0);
    }

    @Test
    public void testToPostAnEmptyStation() {
        // Expect an exception when posting an entity with null fields
        final ExpectedException exception = ExpectedException.none();
        Station station = new Station();

        exception.expect(ConstraintViolationException.class);
        restTemplate.postForObject(url, station, Station.class);
    }

    @Test
    public void testToDeleteAStation() {
        // Post a Station
        Station station = new Station("password", 12.21f, 12.21f, false);
        Station returnedStation = restTemplate.postForObject(url, station, Station.class);

        // Get the number of stations in db
        int numberOfStations = restTemplate.getForObject(url, List.class).size();

        // Delete the station
        restTemplate.delete(url + "/" + returnedStation.getId());

        // Assert that the number of stations in db on less than before
        assertThat(restTemplate.getForObject(url, List.class).size()).isEqualTo(numberOfStations - 1);

    }
}
