import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ErrorHandler } from './../app.error-handler';
import { Cep } from './cep.model';
import { _API_CEP } from './../app.api';
import { empty } from 'rxjs/Observer';

@Injectable()
export class CepService {

  constructor(private http: Http) { }

  getCep(cep: string): Observable<Cep> {

    return this.http.get(`${_API_CEP}/${cep}/json`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)

  }

}
