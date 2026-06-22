import { CLICommand } from "./command.js";
export function commandHelp(commands: Record<string, CLICommand>) {
  console.log("Welcome to the Pokedex!");
  console.log("Usage: \n");
  for (const commandName in commands) {
    const command = commands[commandName];
    console.log(`${commandName}: ${command.description}`);
  }
}
