// $( "#js" ).click
// 	(function() {
// 	$( 'courses__item' ).fadeOut( '500' );
// });


$( ".courses__item" ).hover(
	function(e) {
		$( this ).addClass( "hover" );
	}, function() {
		$( this ).removeClass( "hover" );
		// body...
	}
);