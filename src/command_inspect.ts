import { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error("you must provide a pokemon name");
  }
  const pokemonName = args[0];
  console.log(
    `Inspecting ${pokemonName}... ${state.pokedex[pokemonName] ? "found" : "not found"}`,
  );
  if (!state.pokedex[pokemonName]) {
    console.log("you have not caught that pokemon");
    return;
  }
  const pokemon = state.pokedex[pokemonName];
  console.log("Stats:");
  console.log(`- Name: ${pokemon.name}`);
  console.log(`- Height: ${pokemon.height}`);
  console.log(`- Weight: ${pokemon.weight}`);
  for (const stat of pokemon.stats) {
    console.log(`\t- ${stat.stat.name}: ${stat.base_stat}`);
  }
  console.log("Types:");
  for (const type of pokemon.types) {
    console.log(`\t- Type: ${type.type.name}`);
  }
}
