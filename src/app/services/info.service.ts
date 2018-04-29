import { Injectable } from '@angular/core';
import {Http} from "@angular/http";



@Injectable()
export class InfoService {

  info:any={};

  constructor(public _http:Http) {

    this._http.get("./assets/data/info.pagina.json")
              .subscribe(data=>{

                  console.log(data.json());

                  this.info=data.json();

              });

  }

}
