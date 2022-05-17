package com.movie.demo.stepdefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitions {
	
	WebDriver driver;
	String c1,c2,r1,r2;

	@Before
	public void initialSetup() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "src//test//resources//drivers//chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		Thread.sleep(3000);
	}
	
	@Given("^I want to launch both the websites with movie \"([^\"]*)\"$")
	public void i_want_to_launch_both_the_websites_with_movie(String arg1) throws Throwable {
		System.out.println("Launching url and collecting data...");
		driver.get("https://www.wikipedia.org/");
		driver.findElement(By.xpath("//*[@id=\"searchInput\"]")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[@id=\"searchInput\"]")).clear();
	    Thread.sleep(2000);
	    driver.findElement(By.xpath("//*[@id=\"searchInput\"]")).sendKeys(arg1);
	    Thread.sleep(2000);
	    driver.findElement(By.xpath("//*[@id=\"searchInput\"]")).sendKeys(Keys.ARROW_DOWN);
	    Thread.sleep(2000);
	    driver.findElement(By.xpath("//*[@id=\"searchInput\"]")).sendKeys(Keys.ENTER);
	    Thread.sleep(2000);
	    WebElement country1 = driver.findElement(By.xpath("//th[text()='Country']/following::td[1]"));
		c1 = country1.getText();
		WebElement releaseDate1 = driver.findElement(By.xpath("//div[text()='Release date']/following::td[1]"));
		r1 = releaseDate1.getText();
	    Thread.sleep(2000);
	    driver.get("https://www.imdb.com/");
	    driver.findElement(By.xpath("//*[@id=\"suggestion-search\"]")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[@id=\"suggestion-search\"]")).clear();
	    Thread.sleep(2000);
	    driver.findElement(By.xpath("//*[@id=\"suggestion-search\"]")).sendKeys(arg1);
	    Thread.sleep(2000);
	    driver.findElement(By.xpath("//*[@id=\"suggestion-search\"]")).sendKeys(Keys.ARROW_DOWN);
	    Thread.sleep(2000);
	    driver.findElement(By.xpath("//*[@id=\"suggestion-search\"]")).sendKeys(Keys.ENTER);
	    Thread.sleep(2000);
	    WebElement country2 = driver.findElement(By.xpath("//span[text()='Country of origin']/following::ul[1]"));
	    c2 = country2.getText();
	    driver.findElement(By.xpath("//a[text()=\"Release date\"]")).click();
	    WebElement releaseDate2 = driver.findElement(By.xpath("(//a[contains(., 'India')])[3]/following::td[1]"));
	    r2 = releaseDate2.getText();
	  
	}

	
	
	@When("^I extract country name and release date for the movie \"([^\"]*)\"$")
	public void i_extract_country_name_and_release_date_for_the_movie(String arg1) throws Throwable {
	    System.out.println("Country Name and Release Date for the movie "+"\""+arg1+"\""+" on Wikipedia :-");
	    System.out.println(c1);
	    if(r1.contains("(India)")) {
	    	int index = r1.indexOf("(India)");
	    	r1 = r1.substring(0, index);
	    	r1 = r1.trim();
	    }
	    System.out.println(r1);
	    System.out.println("Country Name and Release Date for the movie "+"\""+arg1+"\""+" on IMDB :-");
	    System.out.println(c2);
	    System.out.println(r2);
	}

	@Then("^I validate the country name and result date$")
	public void i_validate_the_country_name_and_result_date() throws Throwable {
		System.out.println("Validation begins..");
	    try {
	    	Assert.assertEquals(c1, c2);
	    	Assert.assertEquals(r1, r2);
	    	System.out.println("Country Name and Release Date on Wikipedia and IMDB are same");
	    }catch(AssertionError e) {
	    	System.out.println("Country Name and Release Date on Wikipedia and IMDB doesn't match");
	    	throw e;
	    }
	    
	}
	
	@After
	public void closing() {
		driver.quit();
	}

}
