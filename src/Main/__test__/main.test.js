import { inicioPokedex, crearPaginaPokedex } from "../main.js";
import activarPaginador from "../../Eventos/eventos.js";

jest.mock("../Eventos/eventos.js", () => jest.fn());
jest.mock("../Frases/frases.js", () => jest.fn());
jest.mock("../API/api.js", () => jest.fn());
jest.mock("../Servicios/servicios.js", () => jest.fn());

jest.mock("./main.js", () => {
  const originalModule = jest.requireActual("./main.js");
  return { __esModule: true, ...originalModule, crearPaginaPokedex: jest.fn() };
});


test("Llamar inicioPokedex", () => {
  inicioPokedex()
  expect(crearPaginaPokedex).toHaveBeenCalledTimes(1);
  expect(activarPaginador).toHaveBeenCalledTimes(1);
});
