import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-body',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

  @Input() collapsed = false;

  getBodyClass() : string {

    if(this.collapsed)
      return 'body-nav-collapsed';
    
    return '';
  }

}
