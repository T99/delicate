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

	readline.emitKeypressEvents(process.stdin);
	
	let isCallback: boolean = !((typeof exitCodeOrCallback === "number") || (exitCodeOrCallback === undefined));
	
	if (process.stdin.isTTY) {

		process.stdin.setRawMode(true);
		process.stdout.write("Press any key to exit. ");

	} else process.stdout.write("Press ENTER to exit.");
	
	process.stdin.on("data", () => {
		
		process.stdin.unref();
		
		if (!isCallback) process.exit(exitCodeOrCallback as number ?? 0);
		else (exitCodeOrCallback as () => any)();

	});

}