import { State } from "./state.js";

export async function commandMapForward(state: State): Promise<void> {
  const locations = await state.apiClient.fetchLocations(state.nextLocationUrl);

  state.nextLocationUrl = locations.next;
  state.prevLocationUrl = locations.previous;

  for (const loc of locations.results) {
    console.log(loc.name);
  }
}
export async function commandMapBack(state: State): Promise<void> {
  if (!state.prevLocationUrl) {
    console.log("\nYou are already on the first page.\n");
    return;
  }

  const locations = await state.apiClient.fetchLocations(state.prevLocationUrl);

  state.nextLocationUrl = locations.next;
  state.prevLocationUrl = locations.previous;

  for (const loc of locations.results) {
    console.log(loc.name);
  }
}
