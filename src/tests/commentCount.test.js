/**
 * @jest-environment jsdom
 */

import commentsCounter from '../modules/commentsCounter.js';

describe('Test Comments Counter', () => {
  const p = document.createElement('p');
  const data = [
    {
      comment: 'Hello friend',
      creation_date: '2023-04-19',
      username: 'Atif',
    },
    {
      comment: 'Nice',
      creation_date: '2023-04-19',
      username: 'Joy',
    },
    {
      comment: 'Awesome',
      creation_date: '2023-04-20',
      username: 'Nabeel',
    },
  ];

  const counter = commentsCounter(data.length, p);

  test('Total number of comments = 3', () => {
    expect(counter).toBe(3);
  });
});