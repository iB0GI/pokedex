import { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error("you must provide a location name");
  }

  const locationName = args[0];
  const locations = await state.apiClient.fetchLocation(locationName);

  console.log(`Exploring ${locations.name}...`);
  console.log("Found Pokemon:");
  for (const encounters of locations.pokemon_encounters) {
    console.log(`- ${encounters.pokemon.name}`);
  }
}
