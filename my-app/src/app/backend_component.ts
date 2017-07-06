import { Component } from 'angular2/core';
import {Backe} from './Backe';
import {BackeDetailComponent} from './backe-detail.component'
import {BackeService} from './backe.service';
import {OnInit} from '@angular/core';

export class Backe{
  id: number;
  question: string;
}

@Component({
  selector: 'my-backend',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:`      
      <ul class="backend">
          <li *ngFor="backe of bsckend"                                                                                                                     
              [class.selected]="backe === selectedBacke"
              (click)="onSelect(backe)">
            <span class="badge">{{backe.id}}</span>{{backe.question}}
          </li>
      </ul>
      <my-backe-detail [backe]="selectedBacke"></my-backe-detail>
  `,
  directives: [BackeDetailComponent],
  styles:[` ={
  id:1,
  
  }
      .selected {
          background-color: #CFD8DC !important;
          color: white;
      }
      .backend {
          margin: 0 0 2em 0;
          list-style-type: none;
          padding: 0;
          width: 15em;
      }
      .backend li {
          cursor: pointer;
          position: relative;
          left: 0;
          background-color: #EEE;
          margin: .5em;
          padding: .3em 0;
          height: 1.6em;
          border-radius: 4px;
      }
      .backend li.selected:hover {
          background-color: #BBD8DC !important;
          color: white;
      }
      .basckend li:hover {
          color: #607D8B;
          background-color: #DDD;
          left: .1em;
      }
      .backend .text {
          position: relative;
          top: -3px;
      }
      .backend .badge {
          display: inline-block;
          font-size: small;
          color: white;
          padding: 0.8em 0.7em 0 0.7em;
          background-color: #607D8B;
          line-height: 1em;
          position: relative;
          left: -1px;
          top: -4px;
          height: 1.8em;
          margin-right: .8em;
          border-radius: 4px 0 0 4px;
      }
  `],
  providers: []
})


export class BackendComponent implements OnInit {
  //question ='Ваше имя';
  selectedBacke: Backe;
  backend: Backe[];
  public Backend = BACKEND;
  onSelect( bscke: Backe){this.selectedBacke = backe;}
}
 //selectedBackend: Backend;
 //backend: Backend[];


constructor(private _backeService: BackeService){},

ngOnInit() {
this.getBackend();
}

getBackend() {
 this._backeServise.getBackend().then(backend => this.backend = backend);
}
onSelect(backe: Backe) { this.selectedBacke = backe;}
}
