import { State } from "./state.js";

export function commandHelp(state: State) {
  console.log("Welcome to the Pokedex!");
  console.log("Usage: \n");
  for (const commandName in state.commands) {
    const command = state.commands[commandName];
    console.log(`${commandName}: ${command.description}`);
  }
}
