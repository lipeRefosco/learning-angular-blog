import { Component, Input } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() label: string = ''
  @Input() path: [string] | [string, number] = ['']
}
