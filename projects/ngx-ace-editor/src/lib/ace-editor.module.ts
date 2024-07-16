import { NgModule } from '@angular/core';
import { AceEditorComponent } from './ace-editor.component';
import { AceEditorDirective } from './ace-editor.directive';



@NgModule({
  declarations: [
    AceEditorComponent,
    AceEditorDirective
  ],
  imports: [
  ],
  exports: [
    AceEditorComponent,
    AceEditorDirective
  ]
})
export class AceEditorModule { }
