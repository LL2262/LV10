import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-first',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.parallax').parallax();
    });
    console.log("Componente");
  }

}
