class Question {
    constructor(){
    this.text='';
    this.answers=[];
    this.correctAnswer='';
    this.userAnswer=null;
    }

    submitAnswer(answer){
        this.userAnswer=answer;
    };
    answerStatus(answer){
    if (userAnswer=null){
        answerStatus=-1;
    }
    if (userAnswer!==correctAnswer){
        answerStatus=0;
    }
    else{
        answerStatus=1;
    }
    
   };
}


