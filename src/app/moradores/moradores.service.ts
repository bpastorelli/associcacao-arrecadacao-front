import { ErrorHandler } from './../app.error-handler';
import { MEAT_API } from './../app.api';
import { Moradores } from "./moradores.model";
import { Http } from '@angular/http'
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MoradoresService {

  constructor(private http: Http){}

  getMoradores(id: string, nome: string, cpf: string, rg: string, email: string): Observable<Moradores[]> {

    return this.http.get(`${MEAT_API}/associados/morador/filtro?id=${id}&cpf=${cpf}&rg=${rg}&email=${email}&nome=${nome}&pag=0&ord=nome&dir=ASC&size=1000000`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)

  }

  getMorador(id: string): Observable<Moradores> {

    return this.http.get(`${MEAT_API}/associados/morador/id/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)

  }

}
