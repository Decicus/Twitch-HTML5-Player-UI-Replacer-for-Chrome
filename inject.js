var s = document.createElement( 'script' );
s.src = chrome.extension.getURL( 'player_replacer.js' );
( document.head || document.documentElement ).appendChild( s );