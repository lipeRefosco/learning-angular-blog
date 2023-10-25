import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from '../components/page-title/page-title.component';
import { DateComponent } from '../components/date/date.component';



@NgModule({
  declarations: [
    PageTitleComponent,
    DateComponent
  ],
  exports: [
    PageTitleComponent,
    DateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
