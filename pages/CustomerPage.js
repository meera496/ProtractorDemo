 var CustomerPage=function () {

      this.dropValue=function(){
          element(by.model("custId")).$("[value='1']").click()
      };

 };
 module.exports=new CustomerPage();