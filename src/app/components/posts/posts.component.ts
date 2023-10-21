import { Component, OnInit } from '@angular/core';
import { fakePosts } from 'src/app/datas/dataFake';
import { Post } from 'src/app/domain/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = []

  ngOnInit(): void {
    this.posts = fakePosts
  }
}
