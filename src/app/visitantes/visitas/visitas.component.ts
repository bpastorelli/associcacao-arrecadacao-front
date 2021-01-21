import { VisitantesService } from './../visitantes.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Visita } from './visita.model';

@Component({
  selector: 'mt-visitas',
  templateUrl: './visitas.component.html'
})
export class VisitasComponent implements OnInit {

  public visita: Visita;
  public visitas: Visita[];
  public situacaoVisita = [
    { id: 2, label: "Todos" },
    { id: 1, label: "Ativas" },
    { id: 0, label: "Baixadas" }]

  pag : Number = 1 ;
  contador : Number = 20;
  posicaoDefault: number = 1;
  errorMessage;


  constructor(private visitantesService: VisitantesService, private router: Router ) { }

  ngOnInit() {

    this.getVisitas(null, null, this.posicaoDefault);

  }

  baixarVisita(id: string){

    this.visitantesService.baixarVisita(id)
      .subscribe(data => {
        this.visita = data;
        this.getVisitas(null,null,this.posicaoDefault);
    },err=>{
        this.errorMessage = err.message;
        throw err;
    });

  }

  getVisitas(rg: string, cpf: string, posicao: number){

    this.visitantesService.getVisitas(rg, cpf, posicao)
        .subscribe(
           data=>{
              console.log(data);
              this.visitas = data;
           }, err=>{
              console.log(err);
         }
      );
  }

  formatId (n, len) {
    var num = parseInt(n, 10);
    len = parseInt(len, 10);
    return (isNaN(num) || isNaN(len)) ? n : ( 1e10 + "" + num ).slice(-len);
  }

  formatCPF(cpf: string){

    if(cpf != ""){

      var p1 = cpf.substring(0,3)
      var p2 = cpf.substring(6,3)
      var p3 = cpf.substring(9,6)
      var p4 = cpf.substring(11,9)

      return p1+"."+p2+"."+p3+"-"+p4

    }

  }

  pageChanged(event){
    this.pag = event;
  }

}
