///<reference path="../libs/jquery.d.ts" />

module NotificationPage {

    $("#notificationPage").on( "pagecreate", null, function() {

        $("#clickLink").on( "click", null, function() {
            var clickLink = $(this);
            alert( clickLink.text() );
            clickLink.html("Clicked");
        });

    });

}
