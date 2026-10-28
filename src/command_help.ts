import { CLICommand } from "./command_registry";

export function helpCommand(commands: Record<string, CLICommand>){
    

    console.log("Welcome to the Pokedex!");
    console.log("Usage:")

    for (const key in commands){
        const command = commands[key]
        console.log(`${command.name}: ${command.description}`)
    }
}