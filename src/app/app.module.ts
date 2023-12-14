import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BinaryClockComponent } from './binary-clock/binary-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    BinaryClockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
