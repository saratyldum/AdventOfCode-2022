
//import data from text-file
import { readFileSync } from "node:fs";

const lines = readFileSync("day02.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n") // Split on newline
  .map((line) => line.split(' '));

 // Return a new object to avoid side effects between part 1 and 2
function getInput() {
  return [...lines];
} 

function part1() {
  const lines = getInput();

  const rounds = [];

  //loops through the lines and creates objects with the opponent and you move and pushes it to the rounds array
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
   
    //if opponent does rock
    if (opponent === "A") {
      if (you === "Y") { //paper = 2 points + 6 points for winning
       points = 8; 
      } else if (you === "X") { // rock = 1 point + 3 points for draw
       points = 4;
      } else if (you === "Z"){ // scissor = 3 points + 0 points for losing
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
}

function part2() {
  const lines = getInput();

  let rounds = [];

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

    // X, =lose (0), Y = draw(3), Z = win(6);
    // X, = 1, Y = 2 Z = 3;

   
    if (opponent === "A") {
      if (you === "Y") {
       points = 4;
      } else if (you === "X") {
       points = 3;
      } else if (you === "Z"){
       points = 8;
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
       points = 6;
      } else if (you === "X") {
       points = 2;
      } else if (you === "Z"){
       points = 7;
      }
    }
   
    score += points;
   }
   console.log(score);
}

// part1();
part2();

