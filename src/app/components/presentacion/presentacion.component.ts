import { Component, OnInit } from '@angular/core';

import { AppService } from 'src/app/services/app-service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.scss']
})
export class PresentacionComponent implements OnInit {

  public pageTitle= "Me presento";

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.appService.setTitle(this.pageTitle);
    });
    document.body.classList.remove("inner-page");
    document.body.classList.add("home-page");
  }

}
