import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { BodyComponent } from "./body/body.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidenavComponent, HeaderComponent, BodyComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  

  title = 'OrderMS';
  
  isSideNavCollapsed = false;

  onNavStateChange(data: boolean): void{
    this.isSideNavCollapsed = data; 
  }

}
