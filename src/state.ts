import { createInterface, type Interface } from "readline";
import { exitCommand } from "./command_exit";
import { helpCommand } from "./command_help";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};

export type State = {
  readline: Interface,
  commandsRegistry: Record<string,CLICommand>
}


export function initState(): State{
  
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > "
  });

  const commandRegistry: Record<string,CLICommand> = {
    
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
    }

  
  
  return {
    readline: rl,
    commandsRegistry: commandRegistry
  }
}