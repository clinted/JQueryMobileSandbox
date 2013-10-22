///<reference path="../lib/jquery.d.ts" />

$("#remoteDataPage").on("pagecreate", null, function() {
    var page = this;

    $("#getDataLink").on( "click", null, function() {
        var clickLink = $(this);
        $.post("http://www.coldfusionjedi.com/demos/phonegap/remote.cfc?method=getrandom&returnformat=plain", {}, function(res,code) {
            $("#status", page).html("Result from remote server was: " + res);
        });
    });

});

