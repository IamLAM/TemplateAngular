import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class ProductosService {

productos:any[]=[];

  constructor(public _http:Http) {
    this.cargarProductos();
   }


  cargarProductos(){

      if(this.productos.length===0){

        this._http.get("https://htmlangular.firebaseio.com/productos_idx.json")
                  .subscribe(data=>{

                    console.log(data);
                    this.productos=data.json();

                  });

      }

  }

}
