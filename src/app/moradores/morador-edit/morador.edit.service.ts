import { ErrorHandler } from './../../app.error-handler';
import { MEAT_API } from './../../app.api';
import { Observable } from 'rxjs/Observable';
import { MoradorEdit } from './morador-edit.model';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MoradorEditService {

  constructor(private http: Http){}

  putMorador(morador: MoradorEdit, id: string) : Observable<string> {

    const headers = new Headers()
    headers.append('Content-Type','application/json')

    console.log("Dados:" + JSON.stringify(morador))

    return this.http.put(`${MEAT_API}/associados/morador/morador/${id}`
        , JSON.stringify(morador)
        , new RequestOptions({headers: headers}))
        .map(response => response.json())
        .map(morador => morador.id)
        .catch(ErrorHandler.handleError)

  }

  getMorador(id: string) : Observable<MoradorEdit>{

    return this.http.get(`${MEAT_API}/associados/morador/id/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)

  }

}
