$(document).ready(function(){
	$('.bt-menu-responsivo').click(function(){
		target  = $(this).attr('objeto-alvo');
		ulClass = $(target).attr('class');
		
		if(ulClass == "escondido"){
			$(target).css('display', 'initial');
			$(target).removeClass('escondido');
			return false;
		} else {
			$(target).css('display', 'none');
			$(target).addClass('escondido');
			return false;
		}
	});
});