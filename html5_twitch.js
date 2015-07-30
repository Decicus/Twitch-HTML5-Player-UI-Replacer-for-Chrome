console.log( "** HTML5 Twitch Player Replacer has been loaded!" );

$( window ).load( function() {
    console.log( "** HTML5 Twitch Player Replacer has executed!" );
    $(".js-player").html($("<iframe>").attr("src", "http://player.twitch.tv/?branding=false&showInfo=false&channel="+window.location.pathname.substr(1)).attr("width", "100%").attr("height", "100%").css("border", 0));
});
