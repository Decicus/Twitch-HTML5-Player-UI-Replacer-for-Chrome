function replacePlayer() {
    console.log( "** HTML5 Twitch Player Replacer - Executed" );
    var path = window.location.pathname.split( '/' );
    var channel = path[ 1 ];
    var optional = path[ 2 ]; // Secondary parameter, specifically to replace it in the dashboard.
    var playerFrame = $( "<iframe>" ).attr( "src", "http://player.twitch.tv/?branding=false&showInfo=false&channel=" + channel ).attr( "width", "100%" ).attr( "height", "100%" ).css( "border", 0 );
    if( optional == "dashboard" ) {
        $( '.live_site_player_container' ).html( playerFrame );
    } else if( optional === undefined ) {
        $( ".js-player" ).html( playerFrame );
    }
}

$( window ).load( function() {
    replacePlayer();
} );

chrome.runtime.onMessage.addListener( function( request, sender, callback ) {
    if( request == "replacePlayer" ) {
        replacePlayer();
    }
} );