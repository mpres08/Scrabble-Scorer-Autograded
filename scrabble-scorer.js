// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

let enteredWord = " ";

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt(enteredWord) {
   console.log("Let's play some scrabble!")
   enteredWord = input.question("Enter a word: ")
   let score = oldScrabbleScorer(enteredWord)
   return score;
};
console.log(initialPrompt());

let newPointStructure;

let simpleScorer = function(word){
   word = word.toUpperCase();
   let letterPoints = "";
   for (let i = 0; i < word.length; i++) {
      letterPoints += 1;
      letterPoints = simpleScore
   }
   return simpleScore
};

let vowelBonusScorer = function (word){
   word = word.toUpperCase();
   let letterPoints = "";
   let vowels = ["a", "e", "i", "o", "u"]
   for (let i = 0; i < word.length; i++) {
      if (vowels.indexOf(word[i]) !== -1) {
      letterPoints += 3;
   } else {
      letterPoints += 1;
      letterPoints = vowelBonusScore;
   }
   return vowelBonusScore;
}
};

let scrabbleScorer;

const scoringAlgorithms = [
   { name: "Simple Score",
   description: "Each letter is worth 1 point.",
   scoreFunction: "A function with a parameter for user input that returns a score." 
   },

   { name: "Vowel Bonus",
   descripton: "Vowels are 3 points, consonants are 1 point.",
   scoreFunction: "A function that returns a score based on the number of vowels and consonants." 
   },

   { name: "Scrabble",
   description: "The traditional scoring algorithm.",
   scoreFunction: "Uses the oldScrabbleScorer() function to determine the score for a given word."
   }
];

function scorerPrompt() {}

function transform() {};

function runProgram() {
   initialPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
