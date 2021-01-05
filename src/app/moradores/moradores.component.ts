import { Router, Params, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Moradores } from './../moradores/moradores.model';
import { MoradoresService } from './moradores.service';
import { EmitterService } from './../emitter.service';

@Component({
  selector: 'mt-moradores',
  templateUrl: './moradores.component.html'
})

export class MoradoresComponent implements OnInit {

  public morador: Moradores
  public moradores: Moradores[]

  public id: string;

  private codigoEmitter = EmitterService.get("textCodigo");

  pag : Number = 1;
  contador : Number = 15;

  constructor(private moradoresService: MoradoresService, private router: Router, private _route: ActivatedRoute)  { }

  ngOnInit() {

    this.getMoradores(null, null, null, null)

  }

  getMoradores(nome: string, cpf: string, rg: string, email: string){

    this.moradoresService.getMoradores("0", nome, cpf, rg, email)
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
    //this.codigoEmitter.emit({"codigo": codigo });
    this.router.navigate([`/morador-update/`, codigo])

  }

  pageChanged(event){
    this.pag = event;
  }

}
