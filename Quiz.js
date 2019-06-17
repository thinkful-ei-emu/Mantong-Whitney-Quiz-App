class Quiz {
  constructor(){
    this.unasked=[];
    this.asked=[];
    this.score=0;
    this.scoreHistory=[];
    this.active=false;
  }
  //this.active true and false
  setActive(){
    if (this.active===true){
      this.active=false;
    }
    if (this.active===false){
      this.active=true;
    }
  }

  //scoreHistory add score

  addScoreHistory(score){
    this.scoreHistory.push(score);
  }

  score(num){
    this.score=num;
  }

  start() {
    this.unasked.push(triviaApi.data.results);
  }

  nextQuestion() {
    const askedQuestion = this.unasked.shift();
    this.asked.push(askedQuestion);
  }

}