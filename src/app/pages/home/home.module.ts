import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PostCardComponent } from 'src/app/components/post-card/post-card.component';
import { PostsComponent } from 'src/app/components/posts/posts.component';
import { ButtonComponent } from 'src/app/components/button/button.component';



@NgModule({
  declarations: [
    HomeComponent,
    PostCardComponent,
    PostsComponent,
    ButtonComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
