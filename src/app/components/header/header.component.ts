import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    collapsed = false;

    @Output() onNavStateChange: EventEmitter<boolean> = new EventEmitter();
  
    constructor(){}
  
    ngOnInit() {
      this.onNavStateChange.emit(this.collapsed);
    }
  
    onLogoClick(): void{
      this.collapsed=!this.collapsed;
      this.onNavStateChange.emit(this.collapsed);
    }
  
    
}
