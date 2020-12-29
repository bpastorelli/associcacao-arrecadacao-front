import { ErrorHandler } from './../app.error-handler';
import { MEAT_API } from './../app.api';
import { Residencia } from "./residencia.model";
import { Http } from '@angular/http'
import {Injectable} from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ResidenciasService {

  constructor(private http: Http){}

  residencias(pag:number, qtde: number): Observable<Residencia[]> {

    return this.http.get(`${MEAT_API}/associados/residencia?id=0&matricula=&endereco=&numero=&pag=0&ord=id&dir=ASC&size=1000000`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)

  }

  residenciasById(id: string): Observable<Residencia[]>{

    return this.http.get(`${MEAT_API}/associados/residencia?id=${id}&matricula=&endereco=&numero=&pag=0&ord=id&dir=ASC&size=1000000`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)

  }

}
