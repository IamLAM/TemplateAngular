import { Component, OnInit } from '@angular/core';
import {ProductosService} from "../../services/productos.service";
import {ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent  {
producto:any=undefined;
cod:any=undefined;
  constructor(public _router:ActivatedRoute, _ps:ProductosService) {

    this._router.params.subscribe(parametros=>{

      console.log(parametros);

    _ps.cargarProducto(parametros['id'])
      .subscribe(res=>{

        console.log(res.json());
        this.cod=parametros['id'];
        this.producto=res.json();
      })


    });

   }



}
