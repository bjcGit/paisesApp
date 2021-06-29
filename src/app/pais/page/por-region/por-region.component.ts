import { Component } from '@angular/core';
import { Pais } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button {
      margin-right: 5px
    }`
  ]
})
export class PorRegionComponent {

  regiones: string [] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva : string = '';
  paises: Pais [] = [];

  constructor( private paisService : PaisService) { }

  getRegionCss( region: string ) : string{
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }


  activarRegion( region: string){
    if (this.regionActiva == region) {return;}
    this.regionActiva = region;
    this.paisService.buscarRegion(region)
    .subscribe(paises => this.paises = paises);
  }

}
