import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionsService } from '../../app/service'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
questionData: any
  constructor(public navCtrl: NavController, public questionService: QuestionsService) {
    this.questionService.getData()
    .subscribe(questionData => {
      this.questionData = questionData
      console.log(this.questionData)
    })
  }
}
