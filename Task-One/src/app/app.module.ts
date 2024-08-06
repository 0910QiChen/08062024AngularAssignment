import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from '../button/button.component';
import { ButtonChildComponent } from './button-child/button-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
