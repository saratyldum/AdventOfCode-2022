import nodeCluster from "node:cluster";
import { readFileSync } from "node:fs";

const lines = readFileSync("day03.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

// Return a new object to avoid side effects between part 1 and 2
function getInput() {
  return [...lines];
}

function letterToPriority(letter) {
	if (/[a-z]/.test(letter)) {
		//lowercase
		return letter.charCodeAt(0)-96;
	} else if(/[A-Z]/.test(letter)) {
		return letter.charCodeAt(0)-65 + 27;
	}
}

let arrayOfPriorities = [];

function part1() {
  const lines = getInput();
  for (const line of lines) {
		const part1 = [...line.slice(0, line.length/2)];
		const part2 = [... line.slice(line.length/2)];

		const intersection = part1.filter(element => part2.includes(element));
		const intersectingLetters = [...new Set(intersection)]

		const lettersToArray = [... intersectingLetters];
		const string = lettersToArray.toString();

		const number = letterToPriority(string);
		arrayOfPriorities.push(number)
	}

	const sum = arrayOfPriorities.reduce((a, b) => a + b, 0);
	console.log(sum);
}


function part2() {
  const lines = getInput();

	let sum = 0;

	for (let i = 0; i < lines.length; i+=3) {
		const backpacks = [[... lines[i]], [... lines[i + 1]], [...lines[i + 2]]];

		//finds common letter in backpack 1 og 2
		let set = new Set(backpacks[0]);
		let intersection = backpacks[1].filter((x) => set.has(x));

		//compares the last backpack with the others
		set = new Set(intersection);
		intersection = backpacks[2].filter((x) => set.has(x));

		//deduplication
		const dedup = [... new Set(intersection)];

		sum +=letterToPriority(dedup[0])
	}
	console.log(sum);
}

// part1();
part2();

// FOR Å RUNNE SKRIV NODE 03.MJS I TERMINAL