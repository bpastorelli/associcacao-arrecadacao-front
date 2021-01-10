import { Residencia } from './../../residencias/residencia.model';
import { ErrorHandler } from './../../app.error-handler';
import { Http, Headers, RequestOptions } from '@angular/http';
import { MEAT_API } from './../../app.api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Morador } from './../morador/morador.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class MoradorService {

  constructor(private http: Http) { }

  postMoradores(morador: Morador): Observable<string> {

    const headers = new Headers()
    headers.append('Content-Type','application/json')

    console.log("Dados:" + JSON.stringify(morador))

    return this.http.post(`${MEAT_API}/associados/morador/incluir`
        , JSON.stringify(morador)
        , new RequestOptions({headers: headers}))
        .map(response => response.json())
        .map(morador => morador.id)
        .catch(ErrorHandler.handleError)

  }

  getResidenciasVinculadas(moradorId: string): Observable<Residencia[]>{

    return this.http.get(`${MEAT_API}/associados/vinculo-residencia/residencias/morador/${moradorId}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)

  }

}
