import { helpCommand } from "./command_help";
import { exitCommand } from "./command_exit";

export type CLICommand = {
  name: string;
  description: string;
  callback: (commands: Record<string, CLICommand>) => void;
};

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: exitCommand,
    },
    help: {
        name: "help",
        description: "Displays a help message",
        callback: helpCommand,
    }
  };
}

