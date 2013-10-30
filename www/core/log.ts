
module Log
{
	export enum LogLevel {
		ERROR,
		WARNING,
		INFO,
		VERBOSE,
	}

	var currentLogLevel = LogLevel.VERBOSE;

	export function setLogLevel( level : LogLevel )
	{
		currentLogLevel = level;
	}

	export function verbose( message : string ) {
		if( currentLogLevel >= LogLevel.VERBOSE ) {
			console.log( message );
		}
	}

	export function info( message : string ) {
		if( currentLogLevel >= LogLevel.INFO ) {
			console.log( message );
		}
	}

	export function warning( message : string ) {
		if( currentLogLevel >= LogLevel.WARNING ) {
			console.log( message );
		}
	}

	export function error( message : string ) {
		if( currentLogLevel >= LogLevel.ERROR ) {
			console.log( message );
		}
	}

}