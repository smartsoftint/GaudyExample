(function($) {
	
	//Main Menu handle
    $(".menu-main").tapend(function(e){
		
        //e.stopPropagation();
		$('#menuAppriz').css({"display" : "block"});
		$('.allMenu').velocity({"width" : "80%" },{ duration: 500 });
		
  
    });
	
    $('.bgModal').tapend(function(e){
        $('#menuAppriz').fadeOut(300);
		$('.allMenu').css({"width" : "0px"});
		
    });
	
	
	
})(jQuery);





