import { FlashCardPoints } from "./../src/flashCards.js";

describe("FlashCardPoints", () => {
  jest.useFakeTimers();
  let flashCards;

  beforeEach(function () {
    flashCards = new FlashCardPoints();
  });

  afterEach(function () {
    jest.clearAllTimers();
  });

  test("should correctly create a class to hold points for the user", () => {
    flashCards.points;
    expect(flashCards.points).toEqual(0);
  });

  // test('should determine if an "answer" is "true" or "false"', ()=>{
  //   flashCards.determineTrueOrFalse(true);
  //   expect(flashCards.answer).toEqual(true);
  // });

  test("should add 5 points to score for answering correctly", () => {
    flashCards.countPoints(true);
    expect(flashCards.points).toEqual(5);
  });

  // test("should give user a set amount of time to answer a question", () =>{
  //   flashCards.
  //   expect()
  // });

  test("should test for points after 20 seconds", () => {
    flashCards.switchCards(true);
    jest.advanceTimersByTime(20001);
    expect(flashCards.points).toEqual(5);
  });
});
