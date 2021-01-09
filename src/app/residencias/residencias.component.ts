import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { Residencia } from './residencia.model';
import { ResidenciasService } from './residencias.service';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'mt-residencias',
  templateUrl: './residencias.component.html'
})
export class ResidenciasComponent implements OnInit {

  public residencias: Residencia[]


  pag : Number = 1 ;
  contador : Number = 20;

  constructor(private residenciasService: ResidenciasService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

      this.getResidencias("0", null, null, "0");

  }

  getResidencias(codigo: string, matricula: string, endereco: string, numero: string){

    this.residenciasService.residencias(codigo, matricula, endereco, numero)
    .subscribe(
      data=>{
        console.log(data);
        this.residencias = data;
      }, err=>{
        console.log(err);
      }
    );
    return this.residencias;

  }

  getResidenciaById(codigo: string){

    this.residenciasService.residencias(codigo, null, null, "0")
    .subscribe(
        data=>{
          console.log(data);
          this.residencias = data;
        }, err=>{
          console.log(err);
        }
    );
    return this.residencias;

  }

  editResidencia(codigo: string){

    this.router.navigate([`/residencia/`, codigo])

  }

incluirMorador(codigo: string){

  this.router.navigate([`morador/residencia/`, codigo])

}

  pageChanged(event){
    this.pag = event;
  }

  formatId (n, len) {
    var num = parseInt(n, 10);
    len = parseInt(len, 10);
    return (isNaN(num) || isNaN(len)) ? n : ( 1e10 + "" + num ).slice(-len);
  }

}
