import { Component, OnInit, AfterContentChecked, ViewEncapsulation, HostListener } from '@angular/core';
import { DatePipe } from '@angular/common';

import { AppService } from './services/app-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], 
  providers: [DatePipe],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterContentChecked{
  
  public pageTitle: String;
  public menuItems= <any>[];
  public selectedItem: string;
  public currentDate= new Date();
  public showingMenu: boolean= false;

  public innerWidth: any;
  
  constructor(
    private appService: AppService
  ){
    this.menuItems= [
      "presentacion",
      "proyectos",
      "conocimientos",
      "experiencia",
      "contacto"
    ];
    this.selectedItem= "";
    this.pageTitle= "";
  }

  ngOnInit(){
    
    setInterval(() => {
      this.currentDate = new Date();
    }, 60000);

    this.appService.getTitle().subscribe(appTitle => this.pageTitle = appTitle);

    this.innerWidth = window.innerWidth;
  
  }

  ngAfterContentChecked(){
    let elements = document.getElementsByClassName("menu-item__link");
    for(let i = 0; i <= this.menuItems.length-1; i++){
       //console.log(elements[i].className);
       let contieneClaseActive= elements[i].className.includes("active");
        if (contieneClaseActive) {
          this.selectedItem= this.menuItems[i];
          return;
        }
     }
  }

  //por ahora no se usa, pero sirve para conocer la anchura interior de la ventana
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.innerWidth = window.innerWidth;
  }
  
  changeMenu(e: any){
    for(let i = 0; i <= this.menuItems.length-1; i++){
      let contieneClase= e.target.className.includes(this.menuItems[i]);
      if (contieneClase) {
        this.selectedItem= this.menuItems[i];
        if(this.showingMenu){
          this.showMenu();
        }
        return;
      }
    }
  }

  showMenu(){
    let menuElement= <HTMLDivElement>document.querySelector(".main-menu");
    let menuIcon= <HTMLDivElement>document.querySelector("#nav-icon2");
    if(this.showingMenu){
      menuElement.style.display= "none";
      this.showingMenu= false;
      menuIcon.classList.remove("open");
    }
    else{
      menuElement.style.display= "block";
      menuIcon.classList.add("open");
      this.showingMenu= true;
    }

  }

  

}
