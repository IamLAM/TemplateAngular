import { Injectable } from '@angular/core';
import {Http} from "@angular/http";



@Injectable()
export class InfoService {

  info:any={};
  equipo:any={};
  constructor(public _http:Http) {

    this.infoPagina();
    this.infoNosotros();

  }

//desde archivo json
public infoPagina(){
this._http.get("./assets/data/info.pagina.json")
          .subscribe(data=>{

              //console.log(data.json());

              this.info=data.json();

          });


}

public infoNosotros(){
  this._http.get("https://htmlangular.firebaseio.com/equipo.json")
            .subscribe(data=>{

                console.log(data.json());

                this.equipo=data.json();

            });

}


}
