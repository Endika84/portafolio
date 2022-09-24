import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {
  windowWidth: string = "";
  showSplash = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.windowWidth = "-" + window.innerHeight + "px";
      let splashScreen= document.querySelectorAll<HTMLElement>('.app-splash-screen')[0];
      console.log(splashScreen);
      splashScreen.style.opacity= "0";
      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, 500);
    }, 4400);
  }

}
