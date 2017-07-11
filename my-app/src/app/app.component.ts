import {Component, OnInit} from 'angular2/core';
import {Back} from './back';
import {BackDetailComponent} from './back-detail.component';
import {BackService} from './back.service';

//export class Back {
 // id: number;
 // question: string;
 //}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BackService]
})

export class AppComponent {
  title = 'Backend';
  selectedBack: Back;
  backend: Back[]

  constructor(private _backService: BackService) { }

  ngOnInit () {
    this.getBackend();
  }

  getBackend() {
    this._backService.getBackend().then(backend => this.backend = backend);
  }

  onSelect(back: Back) { this.selectedBack = back; }
}
 // public backend = BACKEND;
  //onSelect(back: Back) { this.selectedBack = back; }
//}
//export class AppComponent {
  //title = 'back';
  //selectedBack: Back;
  //}
 // public backend = BACKEND;
//}
