  /*_____ Add hover class _____ */

$( ".courses__item" ).hover(
	function(e) {
		$( this ).addClass( "hover" );
	}, function() {
		$( this ).removeClass( "hover" );
	}
);



  /*_____ Clickable Courses Item in order to fadeout and check the checkbox _____ */
var clickedElements = [];
  $( ".courses__item" ).click( function () {
    $( this ).find(".checkbox").prop("checked", true);
    $( this ).children( ".courses__item-overlay" ).fadeIn("slow");
    $( this ).closest( ".courses__item" ).delay(300).fadeOut("slow");
    clickedElements.push(1);
    if (clickedElements.length == 6) {
        $( ".title__area--none" ).delay(300).fadeOut("slow");
        $( ".courses__complete").delay(800).fadeIn("slow");
      } 
 });


/*_____ Overlay Complete Statement if all lis displayed none____ */


