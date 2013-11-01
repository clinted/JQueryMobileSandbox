///<reference path="../libs/jquery.d.ts" />
///<reference path="../libs/jquery.mobile.d.ts" />
///<reference path="../services/authservice.ts" />

module LoginPage {
    var page,
        $userNameInput,
        $passwordInput,
        $loginButton,
        $loginResetButton,
        $resultDiv;

    $("#loginPage").on( "pagecreate", null, function() {
        // Get controls
        page = this;
        $userNameInput = $("#userNameInput", page);
        $passwordInput = $("#passwordInput", page);
        $loginButton = $("#loginButton", page);
        $loginResetButton = $("#loginResetButton", page);
        $resultDiv = $("#result", page);

           // Attach event handlers
        $loginButton.on( "click", null, loginClick );
        $loginResetButton.on( "click", null, loginResetClick );
    } );

    function loginClick() {
        var username = $userNameInput.val().trim();
        var password = $passwordInput.val().trim();
        var url = "http://webopenauthtest.azurewebsites.net/api/products/1";
        AuthService.Login();
        var retVal = AuthService.CallServer();
        $.getJSON( url )
            .done( function( data ) {
                // On success, 'data' contains a list of products.
                $resultDiv.html( "Success!" );
                //        $.mobile.changePage("../index.html");
            })
            .fail( function(result) {
                $resultDiv.html( "Logon Failed!" );
            });
    }

    function loginResetClick() {
        $userNameInput.val("");
        $passwordInput.val("");
        $(page).focus();
    }

}
