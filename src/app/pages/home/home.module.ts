import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { PostCardComponent } from 'src/app/components/post-card/post-card.component';
import { PostsComponent } from 'src/app/components/posts/posts.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    PostCardComponent,
    PostsComponent,
    ButtonComponent
  ],
  exports: [
    HomeComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
