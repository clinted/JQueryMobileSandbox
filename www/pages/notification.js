$("#notificationPage").on("pagecreate", function(event) {

    $("#clickLink").on( "click", function() {
        var clickLink = $(this);
        alert( clickLink.text() );
        clickLink.html("Clicked");
    });

});