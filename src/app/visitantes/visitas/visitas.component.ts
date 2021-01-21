import { VisitantesService } from './../visitantes.service';
import { Component, OnInit } from '@angular/core';
import { Visita } from './visita.model';

@Component({
  selector: 'mt-visitas',
  templateUrl: './visitas.component.html'
})
export class VisitasComponent implements OnInit {

  public visitas: Visita[];

  pag : Number = 1 ;
  contador : Number = 20;


  constructor(private visitantesService: VisitantesService ) { }

  ngOnInit() {

    this.getVisitas(null,null);

  }

  getVisitas(rg: string, cpf: string){

    this.visitantesService.getVisitas(rg, cpf)
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
