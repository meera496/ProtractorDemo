
var  LoginPage=function(){
	require('../pages/HomePage.js')
	this.uNameField=function(uname){
		
		  element(by.id("txtUsername")).sendKeys(uname);
		  
		
	};
	
	this.passwd=function(pwd){
		
		  element(by.name("txtPassword")).sendKeys(pwd);
		  
		
	};
	
	this.pageTitle=function(pwd){
		
	var pTitle=	  browser.getTitle();
		  
		return pTitle;
	};
	
	
	this.click=function(){
		
		 element(by.id("btnLogin")).click();
		 return require('./HomePage.js');
		
	};
	
	 
};
module.exports=new LoginPage();