(function($) {
	
	//Main Menu handle
    $(".menu-main").tapend(function(e){
		
        //e.stopPropagation();
		$('.allMenu').css({"width" : "80%" });
		$('#menuAppriz').css({"display" : "block"});
		$('.allMenu').velocity({"right" : "0px" },{ duration: 500 });
		
  
    });
	
    $('.bgModal').tapend(function(e){
        $('#menuAppriz').fadeOut(300);
		$('.allMenu').css({"right" : "-80%"});
		
    });
	
	//MSG Swipped 
	$( document ).on("swipe", ".Message" ,function(a,b,c){
			console.log(JSON.stringify(b));
	
	if(b["startEvnt"]["position"]["x"] > b["endEvnt"]["position"]["x"]){
		if(b["xAmount"] > 150){
				$(this).css({"transform" : "translateX(-150px)"});
		}else{
					$(this).css({"transform" : "translateX("+(b["xAmount"]*-1)+"px)"});
		}
	}
	else{
		
	}
	});
	
	
	
})(jQuery);




/*
{	"startEvnt":{"position":{"x":538,"y":341},"offset":{"x":441,"y":228},"time":1425930563806,"target":{}}
,"endEvnt":{"position":{"x":481,"y":336},"offset":{"x":384,"y":223},"time":1425930563917,"target":{}},"direction":"left","xAmount":57,"yAmount":5,"duration":111}*/