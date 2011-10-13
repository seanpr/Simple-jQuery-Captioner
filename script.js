$(document).ready(function(){
	$('.caption').each(function(){
		var	element = $(this),
			inputCaption = element.attr('title'),
			width = (element.outerWidth() - 40);
			
			console.log(width);
			
		if ( inputCaption !== '' )
			_setupImage(element, inputCaption, width);
		
		function _setupImage ( object, string, width ) {
			
			if ( object ){
				object
					.wrap('<span class="image captioned" />')
					.after('<span class="text" style="max-width:' + width + 'px;">' + string + '</span>');
					
			}else{
				return false;
			}
			
		}
		
	});
});