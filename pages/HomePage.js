var  HomePage =function(){
	
	
	this.welText=function(){
		
	var txtval=	element(by.id("welcome")).getText();
		  return txtval;
		
	};



};

module.exports=new HomePage();