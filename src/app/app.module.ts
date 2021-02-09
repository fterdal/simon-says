import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// vvv Deprecated?!
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ColorButtonComponent } from './color-button/color-button.component';
import { SequenceService } from './services/sequence.service';

@NgModule({
  declarations: [
    AppComponent,
    ColorButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    SequenceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
