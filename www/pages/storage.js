$("#storagePage").on("pagecreate", function(event) {

    $(this).on( "pageshow", function() {
        var personName = window.localStorage.getItem("personName");
        if( personName != null ) {
            $("#name").val(personName);
        }
    } );

    $("#saveButton", this).on( "click", function() {
        var inputName = $("#name").val();
        window.localStorage.setItem("personName", inputName );
        $.mobile.changePage("../index.html");
    });

});
