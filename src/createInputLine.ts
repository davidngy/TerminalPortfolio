import { parser } from "./parser";
import { commandRegistry } from "./registry";

const terminal = document.getElementById("terminal")!;
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
