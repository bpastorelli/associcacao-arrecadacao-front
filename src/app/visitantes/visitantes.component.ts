import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { VisitantesService } from './../visitantes/visitantes.service';
import { Visitante } from './visitante.model';

@Component({
  selector: 'mt-visitantes',
  templateUrl: './visitantes.component.html'
})
export class VisitantesComponent implements OnInit {

  public visitantes: Visitante[];

  pag : Number = 1 ;
  contador : Number = 20;

  constructor(private visitantesService: VisitantesService, private router: Router) { }

  ngOnInit() {

      this.getVisitantes("0", null, null, null);

  }

  getVisitantes(id: string, nome: string, rg: string, cpf: string){

    this.visitantesService.getVisitantes(id, nome, rg, cpf)
        .subscribe(
           data=>{
              console.log(data);
              this.visitantes = data;
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

  formatTelefone(telefone: string){

    if(telefone != null){

      if(telefone.length === 10){

        var p1 = telefone.substring(0,2);
        var p2 = telefone.substring(2,6);
        var p3 = telefone.substring(6,11);

        return `(${p1}) ${p2}-${p3}`;
      }else{
        return telefone;
      }

    }

  }

  formatCelular(celular: string){

    if(celular != null){

      if(celular.length === 11){

        var p1 = celular.substring(0,2);
        var p2 = celular.substring(2,7);
        var p3 = celular.substring(7,12);

        return `(${p1}) ${p2}-${p3}`;
      }else if(celular.length === 10){

        var p1 = celular.substring(0,2);
        var p2 = celular.substring(2,6);
        var p3 = celular.substring(6,11);

        return `(${p1}) ${p2}-${p3}`;
      }else{
        return celular;
      }

    }

  }

  editVisitante(codigo: string){

    this.router.navigate([`/visitante/`, codigo])

  }

  pageChanged(event){
    this.pag = event;
  }

}
