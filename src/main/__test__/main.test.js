import { startPokedex, createPokedexPage } from "../main.js";
import activatePager from "../../events/events.js";

jest.mock("../events/events.js", () => jest.fn());
jest.mock("../quote/quote.js", () => jest.fn());
jest.mock("../api/api.js", () => jest.fn());
jest.mock("../service/service.js", () => jest.fn());

jest.mock("./main.js", () => {
  const originalModule = jest.requireActual("./main.js");
  return { __esModule: true, ...originalModule, createPokedexPage: jest.fn() };
});

test("Call startPokemon", () => {
  startPokedex();
  expect(createPokedexPage).toHaveBeenCalledTimes(1);
  expect(activatePager).toHaveBeenCalledTimes(1);
});
