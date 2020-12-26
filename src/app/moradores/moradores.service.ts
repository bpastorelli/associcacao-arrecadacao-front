import { ErrorHandler } from './../app.error-handler';
import { MEAT_API } from './../app.api';
import { Morador } from "./morador.model";
import { Http } from '@angular/http'
import {Injectable} from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MoradoresService {

  constructor(private http: Http){}

  moradores(): Observable<Morador[]> {

    return this.http.get(`${MEAT_API}/associados/morador?id=&cpf=&rg=&email=&nome=&pag=0&ord=nome&dir=ASC&qtdPorPagina=1000000`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)

  }

  moradoresById(id: string): Observable<Morador>{

    return this.http.get(`${MEAT_API}/associados/morador?id=${id}&cpf=&rg=&email=&nome=&pag=0&ord=nome&dir=ASC&qtdPorPagina=1000000`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)

  }

}
