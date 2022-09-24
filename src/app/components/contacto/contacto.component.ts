import { Component, OnInit } from '@angular/core';

import { AppService } from 'src/app/services/app-service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  public pageTitle= "Contacto";

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
