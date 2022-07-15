import { inicioPokedex } from '../Main/main.js';
import './index.js';

jest.mock('../Main/main.js', () => jest.fn());

test('inicializa pokedex', () => {

  expect(inicioPokedex)
    .toHaveBeenCalledTimes(1);
});