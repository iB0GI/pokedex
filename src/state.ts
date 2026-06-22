import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI, Pokemon } from "./pokeapi.js";
export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
  apiClient: PokeAPI;
  nextLocationUrl: string;
  prevLocationUrl: string;
  pokedex: Record<string, Pokemon>;
};

export function initState(cacheInterval: number): State {
  const rl_interface = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });
  return {
    readline: rl_interface,
    commands: getCommands(),
    apiClient: new PokeAPI(cacheInterval),
    nextLocationUrl: "",
    prevLocationUrl: "",
    pokedex: {},
  };
}
