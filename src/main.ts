
import { startREPL } from "./repl";
import { initState } from "./state";

function main() {

   const state = initState();
    startREPL(state);

}

main();