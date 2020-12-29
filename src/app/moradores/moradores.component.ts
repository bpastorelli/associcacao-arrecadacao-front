import { Component, OnInit } from '@angular/core';
import { Moradores } from './../moradores/moradores.model';
import { MoradoresService } from './moradores.service';

@Component({
  selector: 'mt-moradores',
  templateUrl: './moradores.component.html'
})
export class MoradoresComponent implements OnInit {

  public moradores: Moradores[]
  pag : Number = 1;
  contador : Number = 10;

  constructor(private moradoresService: MoradoresService)  { }

  ngOnInit() {

    this.getMoradores(null, null, null, null)

  }

  getMoradores(nome: string, cpf: string, rg: string, email: string){

    this.moradoresService.moradores(nome, cpf, rg, email)
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

  pageChanged(event){
    this.pag = event;
  }

}
