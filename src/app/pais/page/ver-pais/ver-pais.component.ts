import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Pais;
  constructor( private activatedRouter : ActivatedRoute,
               private PaisService : PaisService ) { }

  ngOnInit(): void {

    this.activatedRouter.params
    .pipe(
      switchMap( ({id}) => this.PaisService.getPaisAlpha(id))
    )
    .subscribe( pais => this.pais = pais);

    // this.activatedRouter.params
    // .subscribe( ({id}) => {
      
    //   this.PaisService.getPaisAlpha(id)
    //   .subscribe( pais => {

    //   });
    // });
  }

}
