class Question {
  constructor(){
    this.text='';
    this.answers=[];
    this.correctAnswer='';
    this.userAnswer=null;
  }

  submitAnswer(answer){
    this.userAnswer=answer;
  }
  answerStatus(){
    if (this.userAnswer===null){
      this.answerStatus=-1;
    }
    if (this.userAnswer!==this.correctAnswer){
      this.answerStatus=0;
    }
    else{
      this.answerStatus=1;
    }
    
  }
}


