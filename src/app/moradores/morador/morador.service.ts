import { Moradores } from './../moradores.model';
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

  postMoradores(moradores: Morador, residenciaId: string): Observable<string> {

    const headers = new Headers()
    headers.append('Content-Type','application/json')

    console.log(moradores)

    return this.http.post(`${MEAT_API}/associados/morador/incluir/residencia/${residenciaId}`
        , JSON.stringify(moradores)
        , new RequestOptions({headers: headers}))
        .map(response => response.json())
        .catch(ErrorHandler.handleError)

  }

}
