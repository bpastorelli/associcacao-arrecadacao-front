import { MEAT_API } from './../../app.api';
import { MoradorEdit } from './morador-edit.model';
import { Moradores } from './../moradores.model';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class MoradorEditService {

  constructor(private http: Http){}

  putMorador(morador: MoradorEdit, id: string) : Observable<string> {

    const headers = new Headers()
    headers.append('Content-Type','application/json')

    return this.http.put(`${MEAT_API}/associados/morador/morador/${id}`
        , JSON.stringify(morador)
        , new RequestOptions({headers: headers}))
        .map(response => response.json())
        .catch(erro => Observable.throw(erro))
  }

  getMorador(id: string) : Observable<MoradorEdit>{

    return this.http.get(`${MEAT_API}/associados/morador/id/${id}`)
        .map(response => response.json())
        .catch( (e: any) => Observable.throw(e))

  }

}
