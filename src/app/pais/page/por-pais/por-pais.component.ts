import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais, Currency } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  termino : string = "";
  hayError: boolean = false;
  paises : Pais [] = [];
  simbolo : Currency [] = [];
  constructor( private paisService: PaisService ) { }

  buscar( termino : string ){
    this.hayError= false;
    this.termino = termino
    this.paisService.buscarPais( termino )
    .subscribe( (paises) =>{
      this.hayError= false;
      this.paises = paises;
      console.log(paises);
    }, (err) =>{
      this.hayError = true;
      this.paises = [];
    })
  }

  sugerencias(termino:string){
    this.hayError = false;
  }

}
