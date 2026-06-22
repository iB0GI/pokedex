import { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error("you must provide a pokemon name");
  }

  const pokemonName = args[0];
  const pokemon = await state.apiClient.fetchPokemon(pokemonName);

  console.log(`Throwing a Pokeball at ${pokemon.name}...`);

  const chance = Math.floor(Math.random() * pokemon.base_experience);
  if (chance > 40) {
    console.log(`${pokemon.name} escaped!`);
    return;
  }
  console.log(`${pokemon.name} was caught!`);
  state.pokedex[pokemon.name] = pokemon;
}
