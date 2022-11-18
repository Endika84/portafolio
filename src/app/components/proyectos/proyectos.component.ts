import { Component, OnInit } from '@angular/core';

import { AppService } from 'src/app/services/app-service';


//import { Proyecto } from 'src/app/models/proyecto'; (esta en el servicio)
import { proyectosList } from 'src/app/services/proyecto.service';
import { Categorias } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  public pageTitle= "Proyectos";
  public proyectos: Array<any>;
  public categorias: Array<string>= Categorias;

  constructor(
    private appService: AppService
  ) {
    this.proyectos= proyectosList.sort((first, second) => 0 - (first.titulo > second.titulo ? -1 : 1));
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.appService.setTitle(this.pageTitle);
    });
    document.body.classList.remove("home-page");
    document.body.classList.add("inner-page");
  }

  filterByCategory(event: any, categoria: string){
    this.proyectos= [];
    let listaFiltrada: Array<any>= [];
    proyectosList.forEach(function (value){
      value.categorias.forEach(function(valueInner){
        if(valueInner == categoria){
          listaFiltrada.push(value);
        }
      });
    });
    this.proyectos= listaFiltrada;
    this.addActive(event);

  }

  addActive(event: any){
    let classComun= event.target.classList[0];
    let classTodos= event.target.classList[1];
    let listaElementos= document.getElementsByClassName(classComun);

    if(classTodos == "all"){
      this.proyectos= proyectosList;
    }
    
    Array.from(listaElementos).forEach((element) => element.classList.remove('active'));
    event.target.classList.add("active");
  }

  changeViewList(ele: any){
    let element= <HTMLElement> ele.target;
    let element2= <HTMLElement> document.querySelector(".img-grid");
    let element3= <HTMLElement> document.querySelector(".txt-grid");
    let element4= <HTMLElement> document.querySelector(".txt-list");
    let grid= document.getElementsByClassName("card-list-grid")[0];
    grid.classList.toggle("second-layout");
    element.style.display="none";
    element2.style.display="block";
    element3.style.display="block";
    element4.style.display="none";
  }

  changeViewGrid(ele: any){
    let element= <HTMLElement> ele.target;
    let element2= <HTMLElement> document.querySelector(".img-list");
    let element3= <HTMLElement> document.querySelector(".txt-grid");
    let element4= <HTMLElement> document.querySelector(".txt-list");
    let grid= document.getElementsByClassName("card-list-grid")[0];
    grid.classList.toggle("second-layout");
    element.style.display="none";
    element2.style.display="block";
    element3.style.display="none";
    element4.style.display="block";
  }

}
