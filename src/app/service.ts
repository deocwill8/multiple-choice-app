import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {HttpClientModule} from '@angular/common/http';


@Injectable()
export class QuestionsService {
    constructor(public http:Http) {

    }

getData() {
    return this.http.get("./assets/questions.json")
        .map((res:Response) => res.json());
  }
}