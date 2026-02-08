import { commandRegistry } from "../registry";

export function help() {
  const header = "Verfugbare Commands:\n";

  const commands = Object.values(commandRegistry)
    .map(cmd => `  ${cmd.name.padEnd(10)} ${cmd.description}`)
    .join("\n");

  const footer = "\n\nSchreib ein Command und press Enter.";

  return header + commands + footer;
}