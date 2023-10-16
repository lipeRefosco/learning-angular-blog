import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { PostsComponent } from './components/posts/posts.component';
import { ButtonComponent } from './components/button/button.component';
import { Post } from './domain/Post';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    MenuComponent,
    HeaderComponent,
    PostCardComponent,
    PageTitleComponent,
    PostsComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
