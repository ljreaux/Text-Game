import chalk from "chalk";

const introText = `
As you awaken from a restless slumber, your surroundings feel unfamiliar. The air is thick with an eerie silence, broken only by the faint humming of machinery. Blinking away the haze of confusion, you find yourself in a dimly lit chamber adorned with intricate symbols and mysterious devices.

A sense of disorientation washes over you as you realize that you are not where you should be. Memories flood back in disjointed fragments, a daring experiment, a flash of blinding light, and then... this.

Before you stretches a machine unlike any you've seen before, its metallic frame pulsating with an otherworldly energy. It dawns on you with a sinking feeling: you have activated a time machine.

Gathering your wits, you understand the gravity of your situation. You stand at the threshold of an adventure that spans the annals of time itself. With the fabric of reality at your fingertips, the choices you make will shape the course of history.
`;

const standardColors = {
  colors: {
    message: "greenBright",
    choices: ["cyan", "yellow"],
  },
};

export const scenarios = [
  {
    name: "intro",
    message: introText,
    choices: [{ name: "start game", nextScenario: "startGame" }],
  },
  {
    name: "startGame",
    message: `Will you unravel the mysteries of time and space, or be lost amidst the echoes of eternity? The journey begins now. Adventure awaits, time traveler.`,
    choices: [
      { name: "investigate the time machine", nextScenario: "investigate" },
      { name: "explore the surroundings", nextScenario: "explore" },
    ],
    ...standardColors,
  },
  {
    name: "investigate",
    message:
      "You approach the time machine, its metallic surface cool to the touch despite the pulsating energy emanating from within. As you examine the intricate controls, you notice an array of buttons, levers, and cryptic symbols etched into the console.",
    choices: [
      { name: "examine the controls", nextScenario: "examineControls" },
      { name: "inspect exterior", nextScenario: "inspectExterior" },
    ],
    ...standardColors,
  },
  {
    name: "explore",
    message:
      "You step away from the time machine, your gaze sweeping across the dimly lit chamber. Shadows dance along the walls, casting eerie shapes amidst the flickering light. Beyond the confines of the chamber lie corridors shrouded in darkness, beckoning you to venture forth into the unknown.",
    choices: [
      { name: "venture into the corridors", nextScenario: "venture" },
      { name: "study symbols and artifacts", nextScenario: "study" },
    ],
    ...standardColors,
  },
  {
    name: "venture",
    message: `
    Driven by curiosity and the need for answers, you decide to venture cautiously into the adjacent corridors, the dimly lit passageways stretching out before you like tendrils of darkness. With each step, the echoes of your footsteps reverberate through the silent expanse, heightening your senses as you navigate the labyrinthine maze.
    `,
    choices: [{ name: "continue", nextScenario: "ventureContinued" }],
    colors: {
      message: "greenBright",
    },
  },
  {
    name: "ventureContinue",
    message: `
    As you delve deeper into the corridors, your surroundings seem to shift and morph, the boundaries between reality and illusion becoming increasingly blurred. Strange symbols adorn the walls, their meanings elusive yet tantalizingly familiar, hinting at a deeper significance that eludes your grasp.

    Suddenly, you come upon a fork in the path, two diverging routes leading into the unknown. Each passage beckons with its own mysteries and dangers, presenting you with a crucial decision:
    `,
    choices: [
      { name: "follow the dimly lit path", nextScenario: "dimPath" },
      { name: "traverse the shadowy corridor", nextScenario: "corridor" },
    ],
    ...standardColors,
  },
  {
    name: "examineControls",
    message:
      "You shift your focus to the intricate controls of the time machine, its array of buttons, levers, and cryptic symbols beckoning your attention. With a sense of determination, you begin to decipher the functions of each element, hoping to unravel the mysteries concealed within the console.",
    choices: [{ name: "continue", nextScenario: "continueExamine" }],
    colors: {
      colors: ["greenBright"],
    },
  },
  {
    name: "continueExamine",
    message: `As you study the controls, you gradually piece together the layout and purpose of each component. The buttons seem to correspond to different temporal parameters, allowing for adjustments in time and space coordinates. The levers appear to control the intensity and direction of temporal displacement, offering the potential for precise navigation through the corridors of time.

    ${chalk.redBright(`However, just as you begin to grasp the fundamentals of the controls, a sudden surge of energy pulses through the console, illuminating the chamber in a blinding flash of light. Alarms blare, echoing through the chamber as the time machine's systems spring to life, indicating an imminent temporal jump.
    
    Caught off guard by the unexpected activation, you are faced with a split-second decision:`)}`,
    choices: [
      { name: "attempt to stabilize time machine", nextScenario: "stabilize" },
      { name: "embrace the temporal jump", nextScenario: "jump" },
    ],
    colors: {
      choices: ["redBright", "redBright"],
    },
  },
];
