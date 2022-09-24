import { Component, OnInit } from '@angular/core';

import { AppService } from 'src/app/services/app-service';

import { empresasList } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {

  public pageTitle= "Experiencia";
  public empresas= empresasList;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.appService.setTitle(this.pageTitle);
    });
    document.body.classList.remove("home-page");
    document.body.classList.add("inner-page");
  }

}