import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {HttpClientModule} from '@angular/common/http';


@Injectable()
export class QuestionsService {
    constructor(public http:Http) {}

// getData() {
//     return this.http.get("YOUR_PATH_TO_THE_JSON_FILE")
//         .map((res:Response) => res.json().YOUR_JSON_HEADER); //records in this case
//   }
}