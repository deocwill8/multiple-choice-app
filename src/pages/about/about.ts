import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionsService } from '../../app/service'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
 
questionList: any
answerList: any

  constructor(public navCtrl: NavController, public questionService: QuestionsService) {

    this.questionService.getData()
    .subscribe(questionData => {
      this.questionList = questionData.results[0].questions
      console.log(this.questionList)
      for(let answer in this.questionList){
        this.answerList = answer
        console.log(answer) //prints out a number
      }
      //console.log(this.answerList)
    })
  }


}
