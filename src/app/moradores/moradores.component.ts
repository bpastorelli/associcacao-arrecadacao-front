import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Moradores } from './../moradores/moradores.model';
import { MoradoresService } from './moradores.service';

@Component({
  selector: 'mt-moradores',
  templateUrl: './moradores.component.html'
})

export class MoradoresComponent implements OnInit {

  @Input() moradores: Moradores[]

  public id: string;

  pag : Number = 1;
  contador : Number = 20;

  constructor(private moradoresService: MoradoresService, private router: Router, private _route: ActivatedRoute)  { }

  ngOnInit() {

    this.getMoradores("0", null, null, null, null)

  }

  getMoradores(codigo: string, nome: string, cpf: string, rg: string, email: string){

    this.moradoresService.getMoradores(codigo, nome, cpf, rg, email)
    .subscribe(
      data=>{
        console.log(data);
        this.moradores = data;
      }, err=>{
        console.log(err);
      }
    );
    return this.moradores;

  }

  getIdMorador(codigo: string){

    console.log(`Código enviado: ${codigo}`)
    this.router.navigate([`/morador-edit/`, codigo])

  }

  pageChanged(event){
    this.pag = event;
  }

  formatId (n, len) {
    var num = parseInt(n, 10);
    len = parseInt(len, 10);
    return (isNaN(num) || isNaN(len)) ? n : ( 1e10 + "" + num ).slice(-len);
  }

  formatCPF(cpf: string){

    var p1 = cpf.substring(0,3)
    var p2 = cpf.substring(6,3)
    var p3 = cpf.substring(9,6)
    var p4 = cpf.substring(11,9)

    return p1+"."+p2+"."+p3+"-"+p4

  }

}
