package com.example;

import com.example.entities.Station;
import com.example.repositories.StationRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.Assert.*;
/**
 * Created by juan on 2017-02-09.
 */
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
@Transactional
public class StationTest {

    @Autowired
    private StationRepository repo;

    private Station testStation;

    @Before
    public void initTest() {
        testStation = new Station("test",11.2f,22.1f,false);
    }

    @Test
    public void testSaveStation() {
        Station returnedStation = repo.save(testStation);
        assertTrue("Stations doesn't match", returnedStation != null);
    }

    @Test
    public void testChangeStation() {
        float lat = 11.2f;
        float lng = 12.1f;
        String pass = "test";

        testStation.setAdmin(true);
        testStation.setLat(11.2f);
        testStation.setLng(12.1f);
        testStation.setPassword("test");
        repo.save(testStation);

        assertTrue("Admin rights not properly saved",testStation.isAdmin());
        assertTrue("Latitude not matching",testStation.getLat() == lat);
        assertTrue("Longitudes not matching", testStation.getLng() == lng);
        assertTrue("Passwords doesn't match",testStation.getPassword().equals(pass));
        assertNotNull(testStation.getId());
    }
}
