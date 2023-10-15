import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/types/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = []

  ngOnInit(): void {
    this.posts = Array.from({length: 5}, (_,i) => ({
      date: '2023-10-15',
      title: `Post ${i}`,
      img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3R8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      desc: `Small text for post ${i} card...`
    }));
    console.log(this.posts)
  }
}
