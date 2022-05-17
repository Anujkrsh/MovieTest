$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("movieTest.feature");
formatter.feature({
  "line": 2,
  "name": "To validate country name and release date of a movie",
  "description": "",
  "id": "to-validate-country-name-and-release-date-of-a-movie",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@WikiImdb"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Extract country name and release date of a movie from Wikipedia and Imdb",
  "description": "",
  "id": "to-validate-country-name-and-release-date-of-a-movie;extract-country-name-and-release-date-of-a-movie-from-wikipedia-and-imdb",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I want to launch both the websites with movie \"\u003cname\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I extract country name and release date for the movie \"\u003cname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I validate the country name and result date",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "to-validate-country-name-and-release-date-of-a-movie;extract-country-name-and-release-date-of-a-movie-from-wikipedia-and-imdb;",
  "rows": [
    {
      "cells": [
        "name"
      ],
      "line": 10,
      "id": "to-validate-country-name-and-release-date-of-a-movie;extract-country-name-and-release-date-of-a-movie-from-wikipedia-and-imdb;;1"
    },
    {
      "cells": [
        "Pushpa"
      ],
      "line": 11,
      "id": "to-validate-country-name-and-release-date-of-a-movie;extract-country-name-and-release-date-of-a-movie-from-wikipedia-and-imdb;;2"
    },
    {
      "cells": [
        "Om Shanti Om"
      ],
      "line": 12,
      "id": "to-validate-country-name-and-release-date-of-a-movie;extract-country-name-and-release-date-of-a-movie-from-wikipedia-and-imdb;;3"
    },
    {
      "cells": [
        "Sholay"
      ],
      "line": 13,
      "id": "to-validate-country-name-and-release-date-of-a-movie;extract-country-name-and-release-date-of-a-movie-from-wikipedia-and-imdb;;4"
    },
    {
      "cells": [
        "3 Idiots"
      ],
      "line": 14,
      "id": "to-validate-country-name-and-release-date-of-a-movie;extract-country-name-and-release-date-of-a-movie-from-wikipedia-and-imdb;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9106104900,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Extract country name and release date of a movie from Wikipedia and Imdb",
  "description": "",
  "id": "to-validate-country-name-and-release-date-of-a-movie;extract-country-name-and-release-date-of-a-movie-from-wikipedia-and-imdb;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@WikiImdb"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I want to launch both the websites with movie \"Pushpa\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I extract country name and release date for the movie \"Pushpa\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I validate the country name and result date",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Pushpa",
      "offset": 47
    }
  ],
  "location": "StepDefinitions.i_want_to_launch_both_the_websites_with_movie(String)"
});
formatter.result({
  "duration": 82809328300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pushpa",
      "offset": 55
    }
  ],
  "location": "StepDefinitions.i_extract_country_name_and_release_date_for_the_movie(String)"
});
formatter.result({
  "duration": 853400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_validate_the_country_name_and_result_date()"
});
formatter.result({
  "duration": 2800500,
  "status": "passed"
});
formatter.after({
  "duration": 1560469000,
  "status": "passed"
});
formatter.before({
  "duration": 5838835800,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Extract country name and release date of a movie from Wikipedia and Imdb",
  "description": "",
  "id": "to-validate-country-name-and-release-date-of-a-movie;extract-country-name-and-release-date-of-a-movie-from-wikipedia-and-imdb;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@WikiImdb"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I want to launch both the websites with movie \"Om Shanti Om\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I extract country name and release date for the movie \"Om Shanti Om\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I validate the country name and result date",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Om Shanti Om",
      "offset": 47
    }
  ],
  "location": "StepDefinitions.i_want_to_launch_both_the_websites_with_movie(String)"
});
formatter.result({
  "duration": 62746795100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Om Shanti Om",
      "offset": 55
    }
  ],
  "location": "StepDefinitions.i_extract_country_name_and_release_date_for_the_movie(String)"
});
formatter.result({
  "duration": 235900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_validate_the_country_name_and_result_date()"
});
formatter.result({
  "duration": 74900,
  "status": "passed"
});
formatter.after({
  "duration": 1558827600,
  "status": "passed"
});
formatter.before({
  "duration": 6376668100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Extract country name and release date of a movie from Wikipedia and Imdb",
  "description": "",
  "id": "to-validate-country-name-and-release-date-of-a-movie;extract-country-name-and-release-date-of-a-movie-from-wikipedia-and-imdb;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@WikiImdb"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I want to launch both the websites with movie \"Sholay\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I extract country name and release date for the movie \"Sholay\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I validate the country name and result date",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sholay",
      "offset": 47
    }
  ],
  "location": "StepDefinitions.i_want_to_launch_both_the_websites_with_movie(String)"
});
formatter.result({
  "duration": 62031038800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sholay",
      "offset": 55
    }
  ],
  "location": "StepDefinitions.i_extract_country_name_and_release_date_for_the_movie(String)"
});
formatter.result({
  "duration": 289800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_validate_the_country_name_and_result_date()"
});
formatter.result({
  "duration": 73500,
  "status": "passed"
});
formatter.after({
  "duration": 1244475300,
  "status": "passed"
});
formatter.before({
  "duration": 5627186600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Extract country name and release date of a movie from Wikipedia and Imdb",
  "description": "",
  "id": "to-validate-country-name-and-release-date-of-a-movie;extract-country-name-and-release-date-of-a-movie-from-wikipedia-and-imdb;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@WikiImdb"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I want to launch both the websites with movie \"3 Idiots\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I extract country name and release date for the movie \"3 Idiots\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I validate the country name and result date",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3 Idiots",
      "offset": 47
    }
  ],
  "location": "StepDefinitions.i_want_to_launch_both_the_websites_with_movie(String)"
});
formatter.result({
  "duration": 78902140400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3 Idiots",
      "offset": 55
    }
  ],
  "location": "StepDefinitions.i_extract_country_name_and_release_date_for_the_movie(String)"
});
formatter.result({
  "duration": 209700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_validate_the_country_name_and_result_date()"
});
formatter.result({
  "duration": 62200,
  "status": "passed"
});
formatter.after({
  "duration": 1359705600,
  "status": "passed"
});
});