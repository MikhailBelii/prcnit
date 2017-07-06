import { BrowserModule } from 'angular2/platform-browser';
import { NgModule } from 'angular2/core';

import { AppComponent } from './backend.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
