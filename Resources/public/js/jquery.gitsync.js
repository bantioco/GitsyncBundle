$(function(){

	$( "li" ).each(function( index ) {
		var inli = $( this ).text();
		var n = inli.substr(2, 6)
		
		if (n.match("^commit")) {
			$( this ).css({
		      "font-weight": "bold",
		      "font-size": "16px",
		      "text-transform": "capitalize"
		    });
		}

		if (n.match("^Author")) {
			$( this ).css({
		      "font-weight": "300",
		      "font-size": "14px",
		      "color": "#555"
		    });
		}

		if (n.match("^Date:")) {
			$( this ).css({
		      "font-weight": "300",
		      "font-size": "11px",
		      "color": "#BABABA"
		    });
		}

	});

});


