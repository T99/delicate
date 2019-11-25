/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	1:05 AM -- November 24th, 2019.
 *	Project: @t99/delicate
 */

import * as delicate from "../../main";

console.log("Testing #prompt with exit code function...");
console.log("This process should quit with an exit code of 25.");

delicate.prompt(25);