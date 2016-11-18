#!/usr/bin/env node
"use strict"

var
  byline= require( "byline"),
  Ping= require( "ping").sys.probe

function ping( opts){
	opts= Object.assign({}, module.exports.defaults, opts)
	return function( hostname){
		Ping(hostname, function(isAlive){
			if ( isAlive){
				console.log( hostname)
			}else{
				console.error( hostname)
			}
		}, opts)
	}
}

function main(){
	var timeout= process.argv[ 2]
	var opts= {}
	if( timeout){
		console.log("TIMEOUT", timeout)
		opts.timeout= parseInt( timeout)
	}
	var lines= byline( process.stdin, {encoding: "utf8"})
	lines.on( "data", ping( opts))
}

if( require.main=== module){
	main()
}

module.exports= ping
module.exports.ping= ping
module.exports.main= main
module.exports.defaults= {}
