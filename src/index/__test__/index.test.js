import { startPokedex } from "../../main/main.js";
import "../index.js";

jest.mock("../main/main.js", () => {
  return { __esModule: true, startPokedex: jest.fn() };
});

test("Start pokedex", () => {
  expect(startPokedex).toHaveBeenCalledTimes(1);
});
