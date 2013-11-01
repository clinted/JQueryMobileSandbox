///<reference path="../libs/jquery.d.ts" />
var RemoteDataPage;
(function (RemoteDataPage) {
    $("#remoteDataPage").on("pagecreate", null, function () {
        var page = this;

        $("#getDataButton").on("click", null, function () {
            // Disable the button before making the call
            var getDataButton = $(this);
            getDataButton.prop("disabled", true);

            // Make the call to server
            var statusDiv = $("#status", page);
            $.post("http://www.coldfusionjedi.com/demos/phonegap/remote.cfc?method=getrandom&returnformat=plain").done(function (res) {
                statusDiv.html("Result from remote server was: " + res);
            }).fail(function (res) {
                statusDiv.html("Call to server failed.");
            });

            // Enable the button again
            getDataButton.prop("disabled", false);
        });
    });
})(RemoteDataPage || (RemoteDataPage = {}));
//# sourceMappingURL=remotedata.js.map
