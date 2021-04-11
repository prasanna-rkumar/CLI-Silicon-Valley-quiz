const chalk = require('chalk');
const rs = require('readline-sync')

var score = 0;
const questions = [
  {
    q: "What is the current engine size of MotoGP bikes?",
    options: "a: 600cc, b: 500cc, c: 1000cc",
    a: "c",
  },
  {
    q: "Which MotoGP circuit is known as ‘The Cathedral’?",
    options: "a: Assen, b: Mugello, c: Motegi",
    a: "a",
  },
  {
    q: "Who was the last Japanese rider to win the MotoGP title?",
    options: "a: Naoki Matsudo, b: Tetsuya Harada, c: None",
    a: "c",
  },
  {
    q: "Which sweet company famously sponsored Jorge Lorenzo?",
    options: "a: Chupa Chups, b: Cadbury's, c: Haribo",
    a: "a",
  },
  {
    q: "Valentino Rossi shocked MotoGP fans by winning his first race for Yamaha after switching over from Honda. What year was that?",
    options: "a: 1999, b: 2010, c: 2004",
    a: "c",
  },
  {
    q: "Which of these riders has never driven a Formula One car?",
    options: "a: Valentino Rossi, b: Casey Stoner, c: Giacomo Agostini",
    a: "c",
  },
  {
    q: "Who’s the most successful Grand Prix rider of all time in terms of wins?",
    options: "a: Giacomo Agostini, b: VAlentino Rossi, c: Marc Márquez",
    a: "a",
  },
  {
    q: "What ritual does Valentino Rossi always perform before he gets on his bike?",
    options: "a: Holds right footpeg, b: Kisses brake lever, c: walks around it thrice",
    a: "a",
  },
  {
    q: "Who was the youngest ever MotoGP world champion?",
    options: "a: Marc Márquez, b: Valentino Rossi, c: Maverick Viñales",
    a: "c",
  },
  {
    q: "Casey Stoner was a two-time MotoGP champion in 2007 and 2010. But what discipline had he competed in prior to taking up road racing?",
    options: "a: Australian V8, b: Formula Three, c: Dirt track",
    a: "c",
  },
];

const validOptions = ['a', 'b', 'c'];

function askQuestion(question) {
  console.log(chalk.yellow(question.q));
  const answer = rs.question(chalk.cyan(question.options));
  if (validOptions.includes(answer)) {
    if (answer == question.a) {
      console.log(chalk.green("That is correct!!"));
      console.log(chalk.cyan("Your score is "), chalk.bold.yellow(++score));
    } else {
      console.log(chalk.redBright("Wrong answer :("));
    }
  } else {
    console.log(chalk.red("Please select one of the valid options", validOptions));
    askQuestion(question);
  }
  console.log("\n")
}

console.log(chalk.green("Welcome to MotoGP quiz!!"));

var userName = rs.question("What's Your name? ");

console.log("Hi " + userName + ", Let's get started\n");
console.log("We will ask you a set of 10 questions about MotoGP.", chalk.cyan(" \nType the correct option E.g: ", chalk.hex('#ff00ff').bold("'a, b or c'")));

for (var i = 0; i < questions.length; i++) {
  askQuestion(questions[i]);
}

console.log("------------------\n\n------------------")
console.log(chalk.cyan("That's it. You made it to the end"))
console.log("Your score is ", chalk.bold.green(score))
