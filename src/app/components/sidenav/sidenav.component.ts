import { Component, Input, OnInit, HostListener  } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit{
  // https://www.dariocapozzi.it/angular-eventemitter-cosa-e-e-come-si-usa/
  public screenWidth: any;  
  public screenHeight: any;  
  @Input() collapsed = false;
  
  navbarItems = [
    {

      "icon": "lni lni-cloud-refresh-clockwise",
      "label": "Richieste",
      "path": "/requests"
    },
    {

      "icon": "lni lni-hammer-2",
      "label": "Ordini",
      "path": "/orders"
    },
    {

      "icon": "lni lni-user-multiple-4",
      "label": "Utenti",
      "path": "/users"
    },
    {

      "icon": "lni lni-gear-1",
      "label": "Settings",
      "path": "/settings"
    },
    
    
  ];

  ngOnInit(): void {
    if (typeof window !== "undefined") {    
        this.screenWidth = window.innerWidth;  
        this.screenHeight = window.innerHeight;  
        
    }
  }

  @HostListener('window:resize', ['$event'])  
  onResize(event: any) {  
    this.screenWidth = window.innerWidth;  
    this.screenHeight = window.innerHeight;  
  }  
  /*
  @Output() onNavStateChange: EventEmitter<boolean> = new EventEmitter();

  constructor(){}

  ngOnInit() {
    this.onNavStateChange.emit(this.collapsed);
  }

  onLogoClick(): void{
    this.collapsed=!this.collapsed;
    this.onNavStateChange.emit(this.collapsed);
  }
*/
}
