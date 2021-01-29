import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {

  slideOpts = {
    initialSlide: 3,   
    // autoHeight: true,
    speed: 300,
    loop: true
  };

  constructor() { }

  ngOnInit() {}

}
