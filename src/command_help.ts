import type { CLICommand } from "./state";
import type { State } from "./state";


export function helpCommand(state: State){
    

    console.log("Welcome to the Pokedex!");
    console.log("Usage:")

    for (const key in state.commandsRegistry){
        const command = state.commandsRegistry[key]
        console.log(`${command.name}: ${command.description}`)
    }
}