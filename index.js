const chalk = require('chalk');
const rs = require('readline-sync')

var score = 0;
const questions = [
  {
    q: "What is Pied Piper?",
    options: "a: Lossless Compression software, b: A song, c: A scary story",
    a: "a",
  },
  {
    q: "Gavin Belson originally offered how much to buy Pied Piper?",
    options: "a: $600,000, b: $1,000,000, c: $150,000,000",
    a: "a",
  },
  {
    q: "At TechCrunch Disrupt, Jared was on what drug?",
    options: "a: Weed, b: Adderall, c: Opiates",
    a: "b",
  },
  {
    q: "What bank chain was Carver notorious for hacking in the past?",
    options: "a: Bank of America, b: Chase Bank, c: Standard Bank",
    a: "a",
  },
  {
    q: "How did Erlich originally come to own 10% of Pied Piper?",
    options: "a: Incubation policy, b: He bought it, c: He tricked Richard",
    a: "a",
  },
  {
    q: "People often incorrectly believe Jared has what type of health issue?",
    options: "a: Wasting disease, b: Substance use disorder, c: Thyroid",
    a: "a",
  },
  {
    q: "Gilfoyle was an undocumented immigrant from what country?",
    options: "a: Mexico, b: Canada, c: Germany",
    a: "b",
  },
  {
    q: "Gavin said he hired which famous singer to preform at TechCrunch?",
    options: "a: Taylor Swift, b: Shakira, c: Justin Beiber",
    a: "b",
  },
  {
    q: "Where did Richard first meet Peter Gregory?",
    options: "a: Outside Ted Talk, b: Coffee Shop, c: At Hooli",
    a: "a",
  },
  {
    q: "What is the name of the test that measures the performance of lossless compression software?",
    options: "a: Weissman, b: The Compressor, c: Disruptor",
    a: "a",
  },
];

const validOptions = ['a', 'b', 'c'];

function askQuestion(question) {
  console.log(chalk.yellow(question.q), "\n");
  const answer = rs.question(chalk.cyan(question.options + "\n"));
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

console.log(chalk.green("Welcome to Silicon Valley quiz!!"));

var userName = rs.question("What's Your name? ");

console.log("Hi " + userName + ", Let's get started\n");
console.log("We will ask you a set of 10 questions about Silicon Valley.", chalk.cyan(" \nType the correct option E.g: ", chalk.hex('#ff00ff').bold("'a, b or c'")));

for (var i = 0; i < questions.length; i++) {
  askQuestion(questions[i]);
}

console.log("------------------\n\n------------------")
console.log(chalk.cyan("That's it. You made it to the end"))
console.log("Your score is ", chalk.bold.green(score))
