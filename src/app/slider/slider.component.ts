import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html'
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.carousel').carousel({
        indicators: true,
        dist: -50
      });

      $('.materialboxed').materialbox();
    });
  }

}
