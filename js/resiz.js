$(function(){
	
	      
    var image_is_loaded = false;
	$('img[usemap]').each(
	function() {
		 image_is_loaded = true;
        $(this).data('width', $(this).attr('width')).data('height', $(this).attr('height'));
        $($(this).attr('usemap')+" area").each(function(){
        $(this).data('coords', $(this).attr('coords'));
        });
        $(this).css('width', '100%').css('height','auto').show();
        $(window).trigger('resize');
    });


    function ratioCoords (coords, ratio)
	{
        coord_arr = coords.split(",");
        for(i=0; i < coord_arr.length; i++) 
		{
            coord_arr[i] = Math.round(ratio * coord_arr[i]);
        }
        return coord_arr.join(',');
    }
   
	
        if (image_is_loaded) 
		{
				
            var img = $('#ima');
            var ratio = (parseFloat(img.css('width'))/parseFloat(img.data('width')));

            $(img.attr('usemap')+" area").each(function(){
              
                $(this).attr('coords', ratioCoords($(this).data('coords'), ratio));
            });
        }
  
});
