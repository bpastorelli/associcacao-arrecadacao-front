import { ErrorHandler } from './../app.error-handler';
import { _API } from './../app.api';
import { Residencia } from "./residencia.model";
import { Http, Response } from '@angular/http'
import {Injectable} from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ResidenciasService {

  constructor(private http: Http){}

  residencias(id: string, matricula: string, endereco: string, numero: string): Observable<Residencia[]> {

    return this.http.get(`${_API}/associados/residencia/filtro?id=${id}&matricula=${matricula}&endereco=${endereco}&numero=${numero}&pag=0&ord=id&dir=ASC&size=1000000`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)

  }

}
