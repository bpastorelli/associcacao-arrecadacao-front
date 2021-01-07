import { Router, ActivatedRoute } from '@angular/router';

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
  contador : Number = 15;

  constructor(private residenciasService: ResidenciasService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    const codigo = this.route.snapshot.paramMap.get('codigo');
    console.log(`Vai pesquisar: ${codigo}`);


    if(codigo === "0" || codigo === null){
      this.getResidencias("0", null, null, "0");
    }
    else
    {
      this.getResidenciaById(codigo);
    }

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

  getIdResidencia(codigo: string){

    console.log(`Código enviado: ${codigo}`)
    this.router.navigate([`/residencia/`, codigo])

  }

  pageChanged(event){
    this.pag = event;
  }

}
