import { Component, Inject, Injectable, Input } from '@angular/core';
import { Post } from 'src/app/domain/Post';
import { IPost } from 'src/app/interfaces/IPost';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements IPost{
  @Input({required: true}) id: number = 0;
  @Input({required: true}) date: string = '';
  @Input({required: true}) title: string = '';
  @Input({required: true}) img: string = '';
  @Input({required: true}) desc: string = '';
  // @Input({required: true}) data: Post;

  // constructor(data: Post) {
  //   this.data = data;
  // }
}
