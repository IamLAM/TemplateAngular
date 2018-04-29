import { Component, OnInit } from '@angular/core';
import {InfoService} from "../../services/info.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _is:InfoService, private _router:Router) { }

  ngOnInit() {
  }


  buscarProducto(termino:string){
console.log(termino);
//realizo esto para cambiar de pantalla hacia el SearchComponent
this._router.navigate(['/search',termino]);

  }

}
