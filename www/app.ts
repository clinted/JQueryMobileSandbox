/// <reference path="core/log.ts" />

//function onDeviceReady()
//{
//    console.log("onDeviceReady called.");
//	App.run();
//}
//document.addEventListener( "ready", onDeviceReady, false );

module App
{

	export function run()
	{
		Log.setLogLevel( Log.LogLevel.ERROR );

		Log.error( "This is an error message." );

		Log.info( "This is an info message" );
	}

}

App.run();
