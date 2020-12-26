import { Component, OnInit } from '@angular/core';
import { Residencia } from './residencia.model';
import { ResidenciasService } from './residencias.service';

@Component({
  selector: 'mt-residencias',
  templateUrl: './residencias.component.html'
})
export class ResidenciasComponent implements OnInit {

  public residencias: Residencia[]
  pag : Number = 1 ;
  contador : Number = 10;

  constructor(private residenciasService: ResidenciasService) { }

  ngOnInit() {

    this.getResidencias(this.pag, this.contador);

  }

  getResidencias(pag, qtde){

    this.residenciasService.residencias(pag, qtde)
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

  pageChanged(event){
    this.pag = event;
  }

}
