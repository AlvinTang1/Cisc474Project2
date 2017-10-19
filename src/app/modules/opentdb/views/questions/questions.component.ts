import { DialogService } from 'ng2-bootstrap-modal';
import { LastFmService } from '../../questions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: any[] = [ ];
  attributes: any[] = [ ];
  selectedQuestion = -1;
  constructor(private _apiSvc: OpenTDBService, private _dialogService: DialogService) {
    _apiSvc.getQuestions(1).subscribe(x => {
      this.questions = x.questions.question;
      this.attributes = x.questions['@attr'];
     });
  }

  showDetail(index, track) {
    console.log(index);
    console.log(track.name);
    if (this.selectedQuestion === index){
      this.selectedQuestion = -1;
    } else {
      this.selectedQuestion = index;
    }
  }
    ngOnInit() {
  }

}
