import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AceEditorModule } from 'projects/ngx-ace-editor/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AceEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
