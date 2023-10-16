import { Component } from '@angular/core';
import { ILinkMenu } from 'src/app/interfaces/ILinkMenu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  links: ILinkMenu[] = [
    {
      name: "home",
      value: "#home"
    },
    {
      name: "contact",
      value: "#contact"
    },
    {
      name: "projects",
      value: "#projects"
    },
    {
      name: "category",
      value: "#category"
    }
  ]
}
