/**
 * @jest-environment jsdom
 */

import itemsCounter from '../modules/counter.js';

describe('Testing item counter', () => {
  const line = document.createElement('p');
  const data = [
    {
      name: 'bulbasaur',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      id: '0',
    },
    {
      name: 'ivysaur',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
      id: '1',
    },
    {
      name: 'venusaur',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
      id: '2',
    },
  ];

  const counter = itemsCounter(data.length, line);

  test('Total number of items = 3', () => { expect(counter).toBe(3); });
});