///<reference path="../libs/jquery.d.ts" />
var NotificationPage;
(function (NotificationPage) {
    $("#notificationPage").on("pagecreate", null, function () {
        $("#clickLink").on("click", null, function () {
            var clickLink = $(this);
            alert(clickLink.text());
            clickLink.html("Clicked");
        });
    });
})(NotificationPage || (NotificationPage = {}));
//# sourceMappingURL=notification.js.map
