import {Component, Input} from 'angular2/core';
import {Back} from './back';

@Component({
    selector: 'my-back-detail',
    //template: `
       // <div *ngIf="back">
          //  <h2>{{back.question}} details!</h2>
          //  <div><label>id: </label>{{back.id}}</div>
          //  <div>
             //   <label>question: </label>
             //   <input [(ngModel)]="back.question" placeholder="question"/>
          //  </div>
        //</div>
   // `
})

export class BackDetailComponent {
    @Input()
    back: Back;
}
