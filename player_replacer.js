function replacePlayer() {
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

$( document ).ready( function() {
    setTimeout( function() { // Without a slight delay, it sometimes doesn't replace the player.
        replacePlayer();
    }, 500 );

    var exitTheaterBtn = '<div class="exit-theatre" id="exit-theatre"><a>Exit Theater Mode</a></div>';
    $( document ).on( 'click', '.theatre-button', function( e ) {
        $( '.js-player iframe' ).before( exitTheaterBtn );
    } );

    $( document ).on( 'click', '.exit-theatre', function( e ) {
        App.__container__.lookup('controller:channel').send('toggleTheatre');
        $( '.exit-theatre' ).remove();
    } );
} );

chrome.runtime.onMessage.addListener( function( request, sender, callback ) {
    if( request == "replacePlayer" ) {
        replacePlayer();
    }
} );