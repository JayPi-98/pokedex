import { createInterface } from "node:readline";
import { getCommands } from "./command_registry";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Pokedex > "
});


export function cleanInput(input: string): string[] {
  return input
    .split(" ")
    .map(string => string.trim().toLowerCase())
    .filter(string => string !== "");
}

const commands = getCommands()

export function startREPL() {
    rl.prompt()
    rl.on("line",(input) =>{
        const inputData = cleanInput(input)
        if (!inputData.length){
            rl.prompt()
            return 
        }
        const commandName = inputData[0]
        const selectedCommand = commands[commandName]

        if (selectedCommand){
            try {
                selectedCommand.callback(commands)
            } catch (error) {
                console.log(`Error: ${error}`)
            }
        } else{
            console.log("Unknown command")
        }


        rl.prompt()
    })
}