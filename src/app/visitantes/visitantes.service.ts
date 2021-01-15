import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ErrorHandler } from '../app.error-handler';
import { _API } from '../app.api';
import { Http } from '@angular/http';
import { Visitante } from './visitante.model';

@Injectable()
export class VisitantesService {

  constructor(private http: Http) { }

  getVisitantes(id: string, nome: string, rg: string, cpf: string): Observable<Visitante[]> {

    return this.http.get(`${_API}/associados/visitante/filtro?id=${id}&nome=${nome}&rg=${rg}&cpf=${cpf}&pag=0&ord=id&dir=ASC&size=1000000`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)

  }

}
