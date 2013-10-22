///<reference path="../lib/jquery.d.ts" />
///<reference path="../lib/jquery.mobile.d.ts" />

$("#storagePage").on("pagecreate", null, function() {

    $(this).on( "pageinit", null, function() {
        var personName = window.localStorage.getItem("personName");
        if( personName != null ) {
            $("#name").val(personName);
        }
    } );

    $("#saveButton", this).on( "click", null, function() {
        var inputName = $("#name").val();
        window.localStorage.setItem("personName", inputName );
        $.mobile.changePage("../index.html");
    });
});
