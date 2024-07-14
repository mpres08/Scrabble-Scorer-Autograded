// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");


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

function initialPrompt() {
   console.log("Let's play some scrabble!")
   let enteredWord = input.question("Enter a word: ")
   let oldScoreStructure = oldScrabbleScorer(enteredWord);
   console.log(oldScoreStructure);
   return enteredWord;
};

function transform(oldObject) {
   let newPointStructure = {};
   for (let key in oldObject) {
      let letters = oldObject[key];
      let value = Number(key); 
      for (let i = 0; i < letters.length; i++) {
         let letter = letters[i].toLowerCase();
         newPointStructure[letter] = value;
      }
   }
   return newPointStructure;
};

let newPointStructure = transform(oldPointStructure);

let simpleScorer = function(word) {
   word = word.toUpperCase();
   let simpleScore = 0;
   for (let i = 0; i < word.length; i++) {
      simpleScore += 1;
   }
   return simpleScore
};

let vowelBonusScorer = function(word) {
   word = word.toUpperCase();
   let vowelBonusScore = 0;
   let vowels = ["A", "E", "I", "O", "U"];
   for (let i = 0; i < word.length; i++) {
      if (vowels.indexOf(word[i]) !== -1) {
      vowelBonusScore += 3;
   } else {
      vowelBonusScore += 1;
   }
   }
   return vowelBonusScore;
};

let scrabbleScorer = function(word) {
   let letterValue = "";
   let scrabbleScore = 0;
   for (let i = 0; i < word.length; i++) {
      for (let i in newPointStructure) {
         transform()
         i = letterValue
      i += scrabbleScore
      }
   }
   return scrabbleScore;
};

const scoringAlgorithms = [
   {name: "Simple Score",
   description: "Each letter is worth 1 point.",
   scoreFunction: simpleScorer
   },

   {name: "Vowel Bonus",
   description: "Vowels are 3 points, consonants are 1 point.",
   scoreFunction: vowelBonusScorer 
   },

   {name: "Scrabble",
   description: "The traditional scoring algorithm.",
   scoreFunction: scrabbleScorer
   }
];

function scorerPrompt() {
   console.log("Which scoring algorithm would you like to use?");
   for (let i in scoringAlgorithms) {
      console.log(i + "—" + scoringAlgorithms[i].name + ": " + scoringAlgorithms[i].description);
   }
   let pickedAlgorithm = input.question("Enter 0, 1, or 2: ");
   return pickedAlgorithm;
};

function runProgram() {
   let word = initialPrompt();
   let pickedAlgorithm = scorerPrompt();
   let score = scoringAlgorithms[pickedAlgorithm].scoreFunction(word);
   console.log(`Score for '${word}': ${score}`);
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
