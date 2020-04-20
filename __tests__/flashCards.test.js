import { FlashCardPoints } from './../src/flashCards.js';

describe ('FlashCardPoints', ()=> {
  let flashCards = new FlashCardPoints();

  test('should correctly create a class to hold points for the user', () => {
    flashCards.points;
    expect(flashCards.points).toEqual(0);
  });

  test('should add 5 points to score for answering correctly', () => {
    flashCards.addPoints();
    expect(flashCards.addPoints()).toEqual(5);
  });

  test('should determine if an "answer" is "true" or "false"', ()=>{
    flashCards.determineTrueOrFalse("true");
    expect(flashCards.answer).toEqual("true");
  });
})