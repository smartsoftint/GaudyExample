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
	
	
	
})(jQuery);





