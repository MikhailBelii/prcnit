import {Component, Input} from '@angular/core';
import {Backe} from './Backe'
@Component({
    selector: 'my-backe-detail',
    template: `
        <div *ngIf="hero">
            <h2>{{backe.question}} details!</h2>
            <div><label>id: </label>{{backe.id}}</div>
            <div>
                <label>question: </label>
                <input [(ngModel)]="backe.question" placeholder="question"/>
            </div>
        </div>
    `
})
    @Input(){}
    backe: Backe;

export class BackeDetailComponent {
    backe: Backe;
}