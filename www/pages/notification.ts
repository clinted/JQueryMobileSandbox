///<reference path="../lib/jquery.d.ts" />

$("#notificationPage").on( "pagecreate", null, function() {

    $("#clickLink").on( "click", null, function() {
        var clickLink = $(this);
        alert( clickLink.text() );
        clickLink.html("Clicked");
    });

});