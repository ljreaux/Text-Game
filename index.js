// thanks to https://dev.to/shawn2208/simple-text-based-adventure-game-in-nodejs-490j for the original idea

import inquirer from "inquirer";
import chalk from "chalk";
import { scenarios} from "./scenarios.js";

const handleColors = (scenario) => {
  const { colors, message, choices } = scenario;

  if (colors) {
    if (colors.message) scenario.message = chalk[colors.message](message);

    colors.choices?.forEach((choice, i) => {
      if (choice[i]) choices[i].name = chalk[choice](choices[i].name);
    });
  }
  delete scenario.colors;
  return scenario;
};

// Function to present a scenario and get player choice
const presentScenario = async (scenario) => {

  handleColors(scenario);

  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: scenario.message,
      choices: scenario.choices.map((choice) => choice.name),
    },
  ]);

  return answers.choice;
};

// Function to start the game
const startGame = async () => {
  // Start with the 'intro' scenario
  let currentScenario = scenarios.find((scenario) => scenario.name === "intro");

  // Continue looping through scenarios as long as there's a current scenario
  while (currentScenario) {
    // Present the current scenario to the player and get their choice
    const playerChoice = await presentScenario(currentScenario);

    // Find the next scenario based on the player's choice and update the current scenario
    currentScenario = scenarios.find(
      (scenario) =>
        scenario.name ===
        currentScenario.choices.find((choice) => choice.name === playerChoice)
          .nextScenario
    );
  }

  // Print a thank-you message when the game ends
  console.log(chalk.greenBright("Thanks for playing! Goodbye."));
};

// Start the game by calling the startGame function
startGame();
