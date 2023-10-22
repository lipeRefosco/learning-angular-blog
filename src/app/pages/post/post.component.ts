import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { fakePosts } from 'src/app/datas/dataFake';
import { IPost } from 'src/app/interfaces/IPost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements IPost, OnInit {
  @Input() id: number = 0;
  @Input() date: string = '';
  @Input() img: string = '';
  @Input() title: string = '';
  @Input() desc: string = '';
  @Input() content?: string | undefined;

  constructor(
    private route: ActivatedRoute
  ) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      const [post] = fakePosts.filter(post => post.id == parseInt(value.get('id') || '0'));

      this.id = post.id;
      this.date = post.date;
      this.img = post.img;
      this.title = post.title;
      this.desc = post.desc;
      this.content = post.content;
    })
  }
}
