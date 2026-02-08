import { parser } from "./parser";
import { commandRegistry } from "./registry";

export const terminal = document.getElementById("terminal")!;
const PROMPT = "DavidPortfolio@terminal:~$";
export function createPromptLine() {
  const line = document.createElement("div");
  line.className = "line";

  const prompt = document.createElement("span");
  prompt.className = "prompt";
  prompt.textContent = PROMPT;

  const input = document.createElement("input");

  line.appendChild(prompt);
  line.appendChild(input);

  terminal.appendChild(line);
  input.focus();
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const value = parser(input.value);
      const commandName = value[0];
      const command = commandRegistry[commandName];
      if (!command) {
        const div = document.createElement("div");
        div.textContent = "Unknown Command";
        terminal.appendChild(div);
        createPromptLine();
        return;
      }
      const result = command.execute();

      const div = document.createElement("div");
      div.textContent = result;
      terminal.appendChild(div);
      createPromptLine();
    }
  });
}

const BANNER = `
/$$$$$$$                       /$$       /$$       /$$$$$$$                       /$$      /$$$$$$          /$$ /$$          
| $$__  $$                     |__/      | $$      | $$__  $$                     | $$     /$$__  $$        | $$|__/          
| $$  \\ $$  /$$$$$$  /$$    /$$ /$$  /$$$$$$$      | $$  \\ $$ /$$$$$$   /$$$$$$  /$$$$$$  | $$  \\__//$$$$$$ | $$ /$$  /$$$$$$ 
| $$  | $$ |____  $$|  $$  /$$/| $$ /$$__  $$      | $$$$$$$//$$__  $$ /$$__  $$|_  $$_/  | $$$$   /$$__  $$| $$| $$ /$$__  $$
| $$  | $$  /$$$$$$$ \\  $$/$$/ | $$| $$  | $$      | $$____/| $$  \\ $$| $$  \\__/  | $$    | $$_/  | $$  \\ $$| $$| $$| $$  \\ $$
| $$  | $$ /$$__  $$  \\  $$$/  | $$| $$  | $$      | $$     | $$  | $$| $$        | $$ /$$| $$    | $$  | $$| $$| $$| $$  | $$
| $$$$$$$/|  $$$$$$$   \\  $/   | $$|  $$$$$$$      | $$     |  $$$$$$/| $$        |  $$$$/| $$    |  $$$$$$/| $$| $$|  $$$$$$/
|_______/  \\_______/    \\_/    |__/ \\_______/      |__/      \\______/ |__/         \\___/  |__/     \\______/ |__/|__/ \\______/ 
`;

export function printBanner() {
  const div = document.createElement("p");
  div.className = "banner";
  div.textContent = BANNER;
  terminal.appendChild(div);
}

export function printWelcome() {
  const title = document.createElement("div");
  title.className = "welcome-title";
  title.textContent = "Willkommen zu meinem Terminal.";

  const sub = document.createElement("div");
  sub.className = "welcome-sub";
  sub.textContent = "Gemacht von einem Dev für Devs.";

  const spacer = document.createElement("div");
  spacer.textContent = "";

  const hint = document.createElement("div");
  hint.className = "welcome-hint";
  hint.textContent = 'Type "help" to begin.';

  terminal.appendChild(title);
  terminal.appendChild(sub);
  terminal.appendChild(spacer);
  terminal.appendChild(hint);
}
