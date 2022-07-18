import { inicioPokedex } from "../../Main/main.js";
import "../index.js";

jest.mock("../Main/main.js", () => {
  return { __esModule: true, inicioPokedex: jest.fn() };
});

test("inicializa pokedex", () => {
  expect(inicioPokedex).toHaveBeenCalledTimes(1);
});
