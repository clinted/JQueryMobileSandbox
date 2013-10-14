
$("#remoteDataPage").on("pagecreate", function(event) {
    var page = this;

    $("#getDataLink").on( "click", function() {
        var clickLink = $(this);
        alert( clickLink.text() );
        $.post("http://www.coldfusionjedi.com/demos/phonegap/remote.cfc?method=getrandom&returnformat=plain", {}, function(res,code) {
            $("#status", page).html("Result from remote server was: " + res);
        });
    });

});

