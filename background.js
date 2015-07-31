chrome.browserAction.onClicked.addListener( function( t ) {
    chrome.tabs.sendMessage( t.id, "replacePlayer" );
} );