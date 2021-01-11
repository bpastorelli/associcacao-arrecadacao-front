import { _API } from './../../app.api';
import { MoradorEdit } from './morador-edit.model';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Residencia } from './../../residencias/residencia.model';
import { ErrorHandler } from './../../app.error-handler';
import 'rxjs/add/operator/catch';

@Injectable()
export class MoradorEditService {

  constructor(private http: Http){}

  putMorador(morador: MoradorEdit, id: string) : Observable<string> {

    const headers = new Headers()
    headers.append('Content-Type','application/json')

    return this.http.put(`${_API}/associados/morador/morador/${id}`
        , JSON.stringify(morador)
        , new RequestOptions({headers: headers}))
        .map(this.extractData)
        .catch(erro => Observable.throw(erro))
  }

  getMorador(id: string) : Observable<MoradorEdit>{

    return this.http.get(`${_API}/associados/morador/id/${id}`)
        .map(this.extractData)
        .catch( (e: any) => Observable.throw(e))

  }

  getResidenciasVinculadas(moradorId: string): Observable<Residencia[]>{

    return this.http.get(`${_API}/associados/vinculo-residencia/residencias/morador/${moradorId}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)

  }

  private extractData(res: Response) {
    let body = res.json();
    console.log("Body Data = "+body.data);
    return body.data || [];
  }

}
