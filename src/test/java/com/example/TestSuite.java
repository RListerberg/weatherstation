package com.example;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

/**
 * Created by juan on 2017-02-09.
 */


@RunWith(Suite.class)

@Suite.SuiteClasses({
        WeatherDataTest.class,
        StationTest.class
})
public class TestSuite {
    public TestSuite() {
    }
}
