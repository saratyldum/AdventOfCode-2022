import { readFileSync } from "node:fs";

const lines = readFileSync("day02.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n") // Split on newline
  .map((line) => line.split(' '));


const rounds = [];


for (let i = 0; i < 1; i++) {
  lines.map((line) => {
   const  opponent = line[0];
   const you = line[1];
    rounds.push({ opponent, you });
  })
};

 
 let score = 0;
 
 for (let round of rounds) {
	let opponent = round.opponent;
	let you = round.you;
 
	let points = 0;
 
	if (opponent === "A") {
	  if (you === "Y") {
		 points = 8;
	  } else if (you === "X") {
		 points = 4;
	  } else if (you === "Z"){
		 points = 3;
	  }
	} else if (opponent === "B") {
	  if (you === "Y") {
		 points = 5;
	  } else if (you === "X") {
		 points = 1;
	  } else if (you === "Z"){
		 points = 9;
	  }
	} else if (opponent === "C"){ 
	  if (you === "Y") {
		 points = 2;
	  } else if (you === "X") {
		 points = 7;
	  } else if (you === "Z"){
		 points = 6;
	  }
	}
 
	score += points;
 }
 
 console.log(score); 
