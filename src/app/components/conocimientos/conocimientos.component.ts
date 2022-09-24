import { Component, OnInit } from '@angular/core';

import { AppService } from 'src/app/services/app-service';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
SwiperCore.use([Autoplay, Pagination]);



@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.scss']
})
export class ConocimientosComponent implements OnInit {

  public pageTitle= "Conocimientos";

  constructor(
    private appService: AppService
  ){
    
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.appService.setTitle(this.pageTitle);
    });
    document.body.classList.remove("home-page");
    document.body.classList.add("inner-page");
  }


}
