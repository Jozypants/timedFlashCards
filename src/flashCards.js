export class FlashCardPoints {
  constructor() {
    this.points = 0;
  }

  // determineTrueOrFalse(answer) {
  //   this.answer = answer;
  //   console.log(this.answer);
  // }

  countPoints(answer) {
    this.answer = answer;
    if (this.answer === true) {
      this.points += 5;
      return this.points;
    } else if ( this.answer === false) {
      this.points -= 5;
      return this.points;
    } else { 
      this.points += 0;
    }
  }
}