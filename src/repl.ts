import { createInterface } from "node:readline";

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


export function startREPL() {
    
    rl.prompt()
    rl.on("line",(input) =>{
        const inputData = cleanInput(input)
        if (!inputData.length){
            rl.prompt()
            return 
        }
        console.log(`Your command was: ${inputData[0]}`)
        rl.prompt()
    })
}