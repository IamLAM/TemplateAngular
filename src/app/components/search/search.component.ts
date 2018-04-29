import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from "@angular/router";
import {ProductosService} from "../../services/productos.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

termino:string=undefined;

  constructor(public _router:ActivatedRoute, public _ps:ProductosService) {
    this._router.params.subscribe(parametros=>{

      console.log(parametros);
      this.termino=parametros['termino'];
      console.log(this.termino);

      this._ps.buscarProducto(this.termino);


   });
 }


  ngOnInit() {
  }

}
