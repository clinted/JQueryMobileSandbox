///<reference path="../lib/jquery.d.ts" />
///<reference path="../lib/jquery.mobile.d.ts" />

module StoragePage {

    // Control references
    var $page,
        $saveButton,
        $nameInput;

    $("#storagePage").on("pagecreate", null, function() {
        // Get controls
        $page = $( this );
        $nameInput = $( "#name" );
        $saveButton = $( "#saveButton", this );

        // Attach event handlers
        $page.on( "pageinit", null, pageInit );
        $saveButton.on( "click", null, saveClick );
    });

    function pageInit() {
        var personName = window.localStorage.getItem("personName");
        if( personName != null ) {
            $nameInput.val( personName );
        }
    }

    function saveClick() {
        var inputName = $nameInput.val();
        window.localStorage.setItem( "personName", inputName );
        $.mobile.changePage( "../index.html" );
    }

}
