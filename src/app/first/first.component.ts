import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html'
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.parallax').parallax();
    });
    console.log("Componente");
  }

}
