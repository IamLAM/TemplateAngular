import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductosService {

  productos: any[] = [];
  productos_filtro: any[] = [];

  constructor(public _http: Http) {
    this.cargarProductos();

  }

  //recorro el arreglo de productos para encontrar coincidencia
  buscarProducto(termino: string) {
    if (this.productos.length === 0) {

      this.cargarProductos().then(() => {
        //termina la carga de datos
        this.filtrarProductos(termino);
      });
    } else {

      this.filtrarProductos(termino);
    }



  }

  private filtrarProductos(termino: string) {

    this.productos_filtro = [];
    termino = termino.toLowerCase();
    this.productos.forEach(res => {
      if (res.categoria.indexOf(termino) >= 0 || res.titulo.toLowerCase().indexOf(termino)>=0) {
        this.productos_filtro.push(res); //meto en el arreglo la coincidencia
      }
      console.log(res);
    });

  }

  cargarProducto(cod: string) {


    return this._http.get(`https://htmlangular.firebaseio.com/productos/${cod}.json`);





  }



  cargarProductos() {

    let promesa = new Promise((resolve, reject) => {

      this._http.get("https://htmlangular.firebaseio.com/productos_idx.json")
        .subscribe(data => {

          console.log(data);
          this.productos = data.json();
          resolve();

        });

    });


    return promesa;


  }



}
