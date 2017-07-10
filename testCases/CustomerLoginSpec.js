/**
 * Created by Meera496 on 7/7/2017.
 */


describe('verify customer login Operation',function(){

    it('customer Login Operation',function(){

        var DemoBankPage=require('../pages/DemoBankHomePage.js');
        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        var titleName= DemoBankPage.pageTitle();

        titleName.then(function(text){
            if(text=="Protractor practice website - Banking App"){
                console.log("You have been navigated to correct Banking-Site url sucessfully.");
            }

        });
        browser.driver.manage().window().maximize();
        var CustomerPage = DemoBankPage.custLoginBtn();
               CustomerPage.dropValue();
          browser.driver.sleep(3000);
    });
});


