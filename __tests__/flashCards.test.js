import { FlashCardPoints } from './../src/flashCards.js';

describe ('FlashCardPoints', ()=> {
  let flashCards = new FlashCardPoints();

  test('should correctly create a class to hold points for the user', () => {
    flashCards.points;
    expect(flashCards.points).toEqual(1);
  });
})