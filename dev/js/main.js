  /*_____ Add hover class _____ */

$( ".courses__item" ).hover(
	function(e) {
		$( this ).addClass( "hover" );
	}, function() {
		$( this ).removeClass( "hover" );
	}
);



  /*_____ Clickable Courses Item in order to fadeout and check the checkbox _____ */
  $ ( ".courses__item" ).click( function () {
    $(this).find(".checkbox").prop('checked', true);
    $( event.target ).closest( ".courses__item" ).fadeOut("400");
 });


/*_____ Overlay Complete Statement if all lis displayed none____ */
var ulempy = $('ul:empty');
if ulempy {
  alert("hey");
}