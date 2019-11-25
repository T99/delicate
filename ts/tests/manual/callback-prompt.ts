/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	1:05 AM -- November 24th, 2019.
 *	Project: @t99/delicate
 */

import * as delicate from "../../main";

console.log("Testing #prompt with callback function...");
console.log("This process should output \"Hello, world!\" and then exit.");

delicate.prompt(() => {
	
	console.log("Hello, world!");
	
});