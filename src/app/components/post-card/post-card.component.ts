import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  @Input({required: true}) date: string = ''
  @Input({required: true}) title: string = ''
  @Input({required: true}) img: string = ''
  @Input({required: true}) desc: string = ''
}
