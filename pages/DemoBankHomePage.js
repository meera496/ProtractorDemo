var DemoBankPage=function(){
    require('../pages/CustomerPage.js');
    this.custLoginBtn=function(){

        element(by.buttonText("Customer Login")).click();
        return require('./CustomerPage.js');
    };


    this.pageTitle=function(pwd){

        var pTitle=browser.getTitle();


        return pTitle;
    };


}
module.exports=new DemoBankPage();