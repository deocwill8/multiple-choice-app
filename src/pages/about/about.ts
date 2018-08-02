import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { QuestionsService } from '../../app/service'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

@ViewChild(Slides) slides: Slides; 
questionList: any
correctAnswers = [];
wrongAnsers = [];

  constructor(public navCtrl: NavController, public questionService: QuestionsService) {

    this.questionService.getData()
    .subscribe(questionData => {
      this.questionList = questionData.results[0].questions
      console.log(this.questionList)
    })
  }

  checkAnswer(answer) {
    console.log(answer)
    console.log(answer.isAnswer);
    if (answer.isAnswer === true){
      this.correctAnswers.push(answer);
      this.slides.slideNext();
      console.log("thats true");
    } else {
      console.log("try again");
      this.wrongAnsers.push(answer)
    }
  }
  // countCorrectAnswers() {
  //   if(this.questionList)
  // }
}
