import { createInterface } from "node:readline";
import { getCommands } from "./command_registry";
import { State } from "./state";


export function cleanInput(input: string): string[] {
  return input
    .split(" ")
    .map(string => string.trim().toLowerCase())
    .filter(string => string !== "");
}

const commands = getCommands()

export function startREPL(state: State) {
    state.readline.prompt()
    state.readline.on("line",(input) =>{
        const inputData = cleanInput(input)
        if (!inputData.length){
            state.readline.prompt()
            return 
        }
        const commandName = inputData[0]
        const selectedCommand = state.commandsRegistry[commandName]

        if (selectedCommand){
            try {
                selectedCommand.callback(state)
            } catch (error) {
                console.log(`Error: ${error}`)
            }
        } else{
            console.log("Unknown command")
        }


        state.readline.prompt()
    })
}