import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { AppService } from 'src/app/services/app-service';

import { proyectosList } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-proyecto-detail',
  templateUrl: './proyecto-detail.component.html',
  styleUrls: ['./proyecto-detail.component.scss']
})
export class ProyectoDetailComponent implements OnInit {
  
  public pageTitle= "Detalle del proyecto";
  public proyectos: Array<any>;
  public proyectoSeleccionado: Proyecto;

  constructor(
    private appService: AppService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.proyectos= proyectosList;
    this.proyectoSeleccionado= new Proyecto("","","","", [], [], [],"", "");
  }

  ngOnInit(): void {

    this._route.params.subscribe(params => {
      let titulo= params['proyecto'];

      this.getProject(titulo);
    });
    setTimeout(() => {
      this.appService.setTitle(this.pageTitle);
    });
    document.body.classList.remove("home-page");
    document.body.classList.add("inner-page");
  }

  getProject(titulo: string){
    this.proyectoSeleccionado= this.proyectos.filter(x => x.titulo == titulo)[0];
  }

}
