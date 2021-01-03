package automationFramework;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class DownloadFileConcept {
	public static void main(String[] args) throws InterruptedException {
//		System.out.println("Hi Google is launced !!");
//		 System.setProperty("webdriver.chrome.driver", "C:\\Users\\KUNDAN\\Desktop\\browserDrivers\\chromedriver.exe");
//		 ChromeOptions options = new ChromeOptions();
//		// WebDriver driver=new ChromeDriver();
//		
//		 Thread.sleep(3000);
//		// driver.quit();
//		 
		 String downloadFilepath = System.getProperty("user.dir")+File.separator+"kafka";
//		 HashMap<String, Object> chromePrefs = new HashMap<String, Object>();
//		 chromePrefs.put("profile.default_content_settings.popups", 0);
//		 chromePrefs.put("download.default_directory", downloadFilepath);		
//		 options.setExperimentalOption("prefs", chromePrefs);
//		 
//		 WebDriver driver = new ChromeDriver(options);
//		 driver.get("https://the-internet.herokuapp.com/download");
//		 Thread.sleep(3000);
//		 driver.findElement(By.xpath("//div//a[text()='some-file.txt']")).click();
		
		 File dir = new File(downloadFilepath+File.separator+"kafka");
		    File[] files = dir.listFiles();
		    if (files == null || files.length == 0) {
		       // return null;
		    	System.out.println("No file present !!");
		    }

		    File lastModifiedFile = files[0];
		    for (int i = 1; i < files.length; i++) {
		       if (lastModifiedFile.lastModified() < files[i].lastModified()) {
		           lastModifiedFile = files[i];
		       }
		    }
		    //return lastModifiedFile;
		    System.out.println(lastModifiedFile.getName());
		 
				 
	}
}
