@WikiImdb
Feature: To validate country name and release date of a movie

  Scenario Outline: Extract country name and release date of a movie from Wikipedia and Imdb
    Given I want to launch both the websites with movie "<name>"
    When I extract country name and release date for the movie "<name>"
    Then I validate the country name and result date

    Examples: 
      | name    			| 
      | Pushpa   			|   
      | Om Shanti Om  |   
      | Sholay   			|
      | 3 Idiots 			| 
