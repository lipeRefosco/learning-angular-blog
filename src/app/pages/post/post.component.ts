import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  constructor(
    private route: ActivatedRoute
  ) {

  }
  ngOnInit(): void {
      this.route.paramMap.subscribe(value => {
        console.log(value.get('id'))
      })
  }
}
