import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PostComponent
  ],
  exports: [
    PostComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
  ]
})
export class PostModule { }
