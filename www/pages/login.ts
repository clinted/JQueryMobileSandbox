///<reference path="../lib/jquery.d.ts" />
///<reference path="../lib/jquery.mobile.d.ts" />

$("#loginPage").on( "pagecreate", null, function() {
    var page = this;

    $("#loginButton", page).on( "click", null, function() {
//        var username = $("#userNameInput").val();
//        var password = $("#passwordInput").val();
//        alert( username + " : " + password );
//        $.mobile.changePage("../index.html");

        var url = "http://webopenauthtest.azurewebsites.net/api/products/1";
        $.getJSON( url )
            .done( function( data ) {
                // On success, 'data' contains a list of products.
                console.log( "Success!" );
                $.each( data, function (key, item) {
                    // Add a list item for the product.
                    $('<li>', { text: formatItem(item) }).appendTo($('#products'));
                });
            })
            .fail( function(result)
            {
                console.log( "Failed!" );
                console.log( result.toString());
            });

        function formatItem(item) {
            return item.Name + ': $' + item.Price;
        }
    } );
} );
