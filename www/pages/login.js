///<reference path="../lib/jquery.d.ts" />
///<reference path="../lib/jquery.mobile.d.ts" />
var LoginPage;
(function (LoginPage) {
    var page, $userNameInput, $passwordInput, $loginButton, $loginResetButton, $resultDiv;

    $("#loginPage").on("pagecreate", null, function () {
        // Get controls
        page = this;
        $userNameInput = $("#userNameInput", page);
        $passwordInput = $("#passwordInput", page);
        $loginButton = $("#loginButton", page);
        $loginResetButton = $("#loginResetButton", page);
        $resultDiv = $("#result", page);

        // Attach event handlers
        $loginButton.on("click", null, loginClick);
        $loginResetButton.on("click", null, loginResetClick);
    });

    function loginClick() {
        //        var username = $("#userNameInput").val();
        //        var password = $("#passwordInput").val();
        //        alert( username + " : " + password );
        //        $.mobile.changePage("../index.html");
        var url = "http://webopenauthtest.azurewebsites.net/api/products/1";
        $.getJSON(url).done(function (data) {
            // On success, 'data' contains a list of products.
            $resultDiv.html("Success!");
        }).fail(function (result) {
            $resultDiv.html("Logon Failed!");
        });
    }

    function loginResetClick() {
        $userNameInput.val("");
        $passwordInput.val("");
        $(page).focus();
    }
})(LoginPage || (LoginPage = {}));
//# sourceMappingURL=login.js.map
