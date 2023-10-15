import { Component } from '@angular/core';
import { LinkMenu } from 'src/app/types/LinkMenu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  links: LinkMenu[] = [
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
