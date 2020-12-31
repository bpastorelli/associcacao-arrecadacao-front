import { Router } from '@angular/router';
import { Moradores } from './../moradores.model';
import { MoradorUpdateService } from './morador-update.service';
import { Component, OnInit } from '@angular/core';
import { EmitterService } from './../../emitter.service';



@Component({
  selector: 'mt-morador-update',
  templateUrl: './morador-update.component.html'
})
export class MoradorUpdateComponent implements OnInit {

  public morador: Moradores;
  public codigo: string;

  codigoEmitter = EmitterService.get("textCodigo");

  constructor(private moradorUpdateService: MoradorUpdateService, private router: Router) { }

  ngOnInit(){

    this.codigoEmitter.map((res: any) => res).subscribe(val => {
      if(val.codigo==undefined || val.codigo==""){
        console.log("Código de morador não encontrado!");
      }
      else{
        this.codigo=val.codigo;
        this.getMorador(this.codigo);
      }
      console.log("display "+this.codigo);
    });

  }

  putMorador(morador: Moradores, id: string){

    this.moradorUpdateService.putMorador(morador, id)
    .subscribe((id: string) => {
      this.router.navigate(['/moradorUpdate-summary']);
      console.log(`Morador cadastrado: ${id}`);
    });
    console.log(morador);

  }

  getMorador(id: string){

    this.moradorUpdateService.getMorador(id)
    .subscribe(
      data=>{
        console.log(data);
        this.morador = data;
      }, err=>{
        console.log(err);
      }
    );
    return this.morador;

  }

}
