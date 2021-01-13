import { ExtractData } from './../../app.extract-data';
import { ErrorHandler } from './../../app.error-handler';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { _API } from './../../app.api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Morador } from './../morador/morador.model';
import { Residencia } from './../../residencias/residencia.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class MoradorService {

  constructor(private http: Http) { }

  postMoradores(morador: Morador): Observable<Morador> {

    const headers = new Headers()
    headers.append('Content-Type','application/json')

    return this.http.post(`${_API}/associados/morador/incluir`
        , JSON.stringify(morador)
        , new RequestOptions({headers: headers}))
        .map(ExtractData.extract)
        .catch(ErrorHandler.extracErrorMessage)

  }

  postMorador(morador: Morador): Observable<Morador> {

    const headers = new Headers()
    headers.append('Content-Type','application/json')

    return this.http.post(`${_API}/associados/morador/novo`
        , JSON.stringify(morador)
        , new RequestOptions({headers: headers}))
        .map(ExtractData.extract)
        .catch(ErrorHandler.extracErrorMessage)

  }

  putMorador(morador: Morador, id: string): Observable<Morador> {

    const headers = new Headers()
    headers.append('Content-Type','application/json')

    return this.http.put(`${_API}/associados/morador/morador/${id}`
        , JSON.stringify(morador)
        , new RequestOptions({headers: headers}))
        .map(ExtractData.extract)
        .catch(ErrorHandler.extracErrorMessage)
  }

  getMorador(id: string) : Observable<Morador>{

    return this.http.get(`${_API}/associados/morador/id/${id}`)
        .map(response => response.json())
        .catch( (e: any) => Observable.throw(e))

  }

  getResidenciasVinculadas(moradorId: string): Observable<Residencia[]>{

    return this.http.get(`${_API}/associados/vinculo-residencia/residencias/morador/${moradorId}`)
        .map(response => response.json())
        .catch(ErrorHandler.extracErrorMessage)

  }

}
