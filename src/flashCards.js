export class FlashCardPoints {
  constructor() {
    this.points = 0;
  }

  questions() {
    this.q1 = {question: "What does .slice() do?", answer: "copies an array"};
    this.q2 = {
      question: "What does .indexof() do?",
      answer: "Finds the index of an item in an array.",};
    this.q3 = {
      question: "What does .unshift() do?",
      answer: "adds to the front of an array",
    };
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
    } else if (this.answer === false) {
      this.points -= 5;
      return this.points;
    } else {
      this.points += 0;
      return this.points;
    }
  }

  switchCards(answer) {
    setInterval(() => {
      this.countPoints(answer);
    }, 20000);
  }
}
// switchCards() {
//   setInterval( () =>{
//     // $(".flashcard").toggleClass("flipped");
//   }, 20000);

// }


