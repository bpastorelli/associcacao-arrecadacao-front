import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ErrorHandler } from './../../app.error-handler';
import { Injectable } from '@angular/core';
import { Residencia } from './../residencia.model';
import { MEAT_API } from './../../app.api';
import { Moradores } from './../../moradores/moradores.model';


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
        .map(residencia => residencia.id)
        .catch(ErrorHandler.handleError)

  }

  putResidencia(residencia: Residencia, id: string): Observable<string>{

    const headers = new Headers()
    headers.append('Content-Type','application/json')

    console.log("Dados:" + JSON.stringify(residencia))

    return this.http.put(`${MEAT_API}/associados/residencia/${id}`
        , JSON.stringify(residencia)
        , new RequestOptions({headers: headers}))
        .map(response => response.json())
        .map(residencia => residencia.id)
        .catch(ErrorHandler.handleError)

  }

  getMoradoresVinculados(residenciaId: string): Observable<Moradores[]>{

    return this.http.get(`${MEAT_API}/associados/vinculo-residencia/moradores/residencia/${residenciaId}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)

  }

}
