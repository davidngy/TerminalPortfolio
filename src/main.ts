import { createPromptLine, printBanner, printWelcome } from "./createInputLine";

function init() {
  printBanner();
  printWelcome();
  createPromptLine();
}

init();
