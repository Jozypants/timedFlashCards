export class FlashCardPoints {
  constructor() {
    this.points = 0;
  }

  determineTrueOrFalse(answer) {
    this.answer = answer;
  }

  addPoints() {
    
    if (answer === true) {
      this.points += 5;
    }
    return this.points;
  }


}