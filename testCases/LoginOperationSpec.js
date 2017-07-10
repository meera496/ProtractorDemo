describe('verify Sign-up Operation', function(){
//navigate url of  the application 
it ('to test Sign-up validation',function(){
	browser.ignoreSynchronization = true;
	  var LoginPage=require('../pages/LoginPage.js');
	browser.get("http://orangehrm.uftselenium.com/symfony/web/index.php/auth/login");
	var titleName= LoginPage.pageTitle();
	titleName.then(function(text){
		if(text=="OrangeHRM"){
		console.log("You have been navigated to correct url sucessfully.");
		}
	})
	browser.driver.manage().window().maximize();
      
	  
	  LoginPage.uNameField("sreekanth");
	  LoginPage.passwd("sreekanth@2015");
	 var HomePage= LoginPage.click();
	  browser.driver.sleep(5000);
       var welMessage=  HomePage.welText();
	   welMessage.then(function(text){
		   
		    console.log(text);
			 var data1=text.split(" ");
			if(data1[1]=="Sreekanth"){
			  console.log(data1[1]+" You'r a valid User");
			}
		   
	   });
      
});
});