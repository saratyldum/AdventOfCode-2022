import { on } from "node:events";
import { readFileSync } from "node:fs";

const lines = readFileSync("day04.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n") // Split on newline
	// .map((line) => line.split(','));


// Return a new object to avoid side effects between part 1 and 2
function getInput() {
  return [...lines];
}

function part1() {
  const lines = getInput();
	
	const result = lines.map((line) => {
		const [interval1, interval2] = line
		.split(',')
		.map((interval) => interval.split('-').map(Number))
		.sort((a, b) => {
			const oneSize = a[1] - a[0];
			const twoSize = b[1] - b[0];
			return twoSize - oneSize;
		});

		const checkContaining = interval1[0] <= interval2[0] && interval1[1] >= interval2[1];

		console.log({ interval1, interval2, checkContaining})

		return checkContaining ? 1 : 0;
	});
	console.log(result.reduce((a, b) => a + b, 0));

}

function part2() {
  const lines = getInput();
	
	const result = lines.map((line) => {
		const [first, second] = line
		.split(',')
		.map((interval) => interval.split('-').map(Number))
		.sort((a, b) => {
			const oneSize = a[1] - a[0];
			const twoSize = b[1] - b[0];
			return twoSize - oneSize;
		});

		const overlap = first[1] >= second[0] && second[1] >= first[0] ;

		return overlap ? 1 : 0;
	});
	console.log(result.reduce((a, b) => a + b, 0));
}

part1();
part2();