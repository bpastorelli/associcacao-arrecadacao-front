import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ErrorHandler } from '../app.error-handler';
import { _API } from '../app.api';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Visita } from './visitas/visita.model';
import { Visitante } from './visitante.model';
import { ExtractData } from './../app.extract-data';

@Injectable()
export class VisitantesService {

  constructor(private http: Http) { }

  getVisitantes(id: string, nome: string, rg: string, cpf: string): Observable<Visitante[]> {

    return this.http.get(`${_API}/associados/visitante/filtro?id=${id}&nome=${nome}&rg=${rg}&cpf=${cpf}&pag=0&ord=nome&dir=ASC&size=1000000`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)

  }

  getVisitas(rg: string, cpf: string, posicao: number, ord: string): Observable<Visita[]> {

    console.log(ord);

    return this.http.get(`${_API}/associados/visita/filtro?rg=${rg}&cpf=${cpf}&posicao=${posicao}&pag=0&ord=${ord}&dir=ASC&size=1000000`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)

  }

  postVisitante(visitante: Visitante): Observable<Visitante>{

    const headers = new Headers()
    headers.append('Content-Type','application/json')

    return this.http.post(`${_API}/associados/visitante/incluir`
        , JSON.stringify(visitante)
        , new RequestOptions({headers: headers}))
        .map(ExtractData.extract)
        .catch(ErrorHandler.extracErrorMessage)

  }

  putVisitante(visitante: Visitante, id: string): Observable<Visitante>{

    const headers = new Headers()
    headers.append('Content-Type','application/json')

    console.log(visitante)

    return this.http.put(`${_API}/associados/visitante/${id}`
        , JSON.stringify(visitante)
        , new RequestOptions({headers: headers}))
        .map(ExtractData.extract)
        .catch(ErrorHandler.extracErrorMessage)

  }

  baixarVisita(id: string): Observable<Visita>{

    const headers = new Headers()
    headers.append('Content-Type','application/json')

    return this.http.put(`${_API}/associados/visita/encerrar`
        , `{ "id": "${id}" }`
        , new RequestOptions({headers: headers}))
        .map(ExtractData.extract)
        .catch(ErrorHandler.extracErrorMessage)

  }

}
