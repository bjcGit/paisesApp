import { Component } from '@angular/core';
import { Pais } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  
  termino : string = "";
  hayError: boolean = false;
  paises : Pais [] = [];
  
  constructor( private paisService: PaisService ) { }

  buscar( termino : string ){
    this.hayError= false;
    this.termino = termino
    this.paisService.buscarCapital( termino )
    .subscribe( (paises) =>{
      this.hayError= false;
      this.paises = paises;
      console.log(paises);
    }, (err) =>{
      this.hayError = true;
      this.paises = [];
    })
  }

}
