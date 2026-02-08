import { about } from "./commands/command_about";
import { help } from "./commands/command_help";
import { clear } from "./commands/command_clear";
import { banner } from "./commands/command_banner";
import { renderProjects } from "./commands/command_projects";
type Command = {
  name: string;
  description: string;
  execute: () => string;
};
export const commandRegistry: Record<string, Command> = {
  about: {
    name: "about",
    description: "Kurze Info zu wer ich bin",
    execute: about,
  },
  projects: {
    name: "projects",
    description: "Prokete die ich gebaut habe.",
    execute: renderProjects,
  },
  help: {
    name: "help",
    description: "Anzeigen von Verfugbaren Commands",
    execute: help,
  },
  clear: {
    name: "clear",
    description: "Konsole clearen",
    execute: clear,
  },
  banner: {
    name: "banner",
    description: "Zeigt Banner an.",
    execute: banner
  }
};
