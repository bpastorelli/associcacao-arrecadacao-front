import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ErrorHandler } from './../../app.error-handler';
import { Injectable } from '@angular/core';
import { Residencia } from './../residencia.model';
import { MEAT_API } from './../../app.api';

@Injectable()
export class ResidenciaService {

  constructor(private http: Http) { }

  postResidencia(residencia: Residencia): Observable<string> {

    const headers = new Headers()
    headers.append('Content-Type','application/json')

    console.log("Dados:" + JSON.stringify(residencia))

    return this.http.post(`${MEAT_API}/associados/residencia`
        , JSON.stringify(residencia)
        , new RequestOptions({headers: headers}))
        .map(response => response.json())
        .map(morador => morador.id)
        .catch(ErrorHandler.handleError)

  }

}
