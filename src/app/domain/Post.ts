import { Inject, Injectable, InjectionToken } from "@angular/core";
import { IPost } from "../interfaces/IPost";

export class Post implements IPost {
  id: number;
  date: string;
  title: string;
  img: string;
  desc: string;

  constructor(data: IPost) {
    this.id = data.id;
    this.date = data.date;
    this.title = data.title;
    this.img = data.img;
    this.desc = data.desc;
  }
}
