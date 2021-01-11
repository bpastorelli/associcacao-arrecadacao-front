import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ErrorHandler } from './../../app.error-handler';
import { Injectable } from '@angular/core';
import { Residencia } from './../residencia.model';
import { _API } from './../../app.api';
import { Moradores } from './../../moradores/moradores.model';


@Injectable()
export class ResidenciaService {

  constructor(private http: Http) { }

  postResidencia(residencia: Residencia): Observable<Residencia> {

    const headers = new Headers()
    headers.append('Content-Type','application/json')

    return this.http.post(`${_API}/associados/residencia`
        , JSON.stringify(residencia)
        , new RequestOptions({headers: headers}))
        .map(this.extractData)
        .catch(ErrorHandler.handleError)

  }

  putResidencia(residencia: Residencia, id: string): Observable<Residencia>{

    const headers = new Headers()
    headers.append('Content-Type','application/json')

    console.log("Dados:" + JSON.stringify(residencia))

    return this.http.put(`${_API}/associados/residencia/${id}`
        , JSON.stringify(residencia)
        , new RequestOptions({headers: headers}))
        .map(this.extractData)
        .catch(ErrorHandler.handleError)

  }

  getMoradoresVinculados(residenciaId: string): Observable<Moradores[]>{

    return this.http.get(`${_API}/associados/vinculo-residencia/moradores/residencia/${residenciaId}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)

  }

  private extractData(res: Response) {
    let body = res.json();
    console.log("Body Data = "+body.data);
    return body.data || [];
  }

}
