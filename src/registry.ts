import { about } from "./commands/command_about";
type Command = {
  name: string;
  description: string;
  execute: (...args: string[]) => string;
};
export const commandRegistry: Record<string, Command> = {
  about: {
    name: "about",
    description: "description of who i am.",
    execute: about,
  },
};
