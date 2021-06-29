import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  
  constructor( private http: HttpClient ) { }

  get httpParams(){
    return new HttpParams().set('fields', 'name;capital;alpha2Code;population;flag');
  }
  
  buscarPais(termino: string): Observable<Pais[]>{
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Pais[]>(url, {params: this.httpParams});
  }

  buscarCapital( termino: string): Observable<Pais []>{
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Pais[]>(url, {params: this.httpParams});
  }

  getPaisAlpha( id: string): Observable<Pais>{
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Pais>(url);
  }

  buscarRegion( termino: string) :Observable<Pais []>{
    const url = `${this.apiUrl}/region/${termino}`
    return this.http.get<Pais[]>(url, {params : this.httpParams});
  }

}
