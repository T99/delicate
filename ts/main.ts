/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	10:53 PM -- June 11th, 2019.
 *	Project: @t99/delicate
 */

import readline from "readline";

/**
 * NPM main class used for exporting this package's contents.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */

export function prompt(): void;
export function prompt(exitCode: number): void;
export function prompt(callback: () => any): void;
export function prompt(exitCodeOrCallback?: number | (() => any)): void {
	
	let isCallback: boolean = !((typeof exitCodeOrCallback === "number") || (exitCodeOrCallback === undefined));

	readline.emitKeypressEvents(process.stdin);
	
	// let reader: readline.Interface = readline.createInterface({
	// 	input: process.stdin,
	// 	output: process.stdout
	// });
	//
	// reader.on("line", () => {
	//
	// 	console.log("Got data!");
	//
	// });
	
	if (process.stdin.isTTY) {

		process.stdin.setRawMode(true);
		console.log("Press any key to exit.");

	} else {

		process.stdout.write("Press ENTER to exit.");

	}
	
	process.stdin.on("data", () => {

		if (!isCallback) process.exit(exitCodeOrCallback as number ?? 0);
		else (exitCodeOrCallback as () => any)();

	});

}