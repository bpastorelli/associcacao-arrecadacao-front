import { ErrorHandler } from './../../app.error-handler';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { _API } from './../../app.api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Morador } from './../morador/morador.model';

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
        .map(this.extractData)
        .catch(ErrorHandler.handleError)

  }

  private extractData(res: Response) {

      let body = res.json();
      console.log("Body Data = "+body.data);
      return body.data || [];

  }

}
