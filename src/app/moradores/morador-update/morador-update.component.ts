import { ActivatedRoute, Router } from '@angular/router';
import { Moradores } from './../moradores.model';
import { MoradorUpdateService } from './morador-update.service';
import { Component, OnInit } from '@angular/core';
import { EmitterService } from './../../emitter.service';


@Component({
  selector: 'mt-morador-update',
  templateUrl: './morador-update.component.html'
})

export class MoradorUpdateComponent implements OnInit {

  public codigo: string;
  public moradorUpdt: Moradores;

  constructor(private moradorUpdateService: MoradorUpdateService, private router: Router, private _route: ActivatedRoute) { }

  ngOnInit(){

    this.codigo = this._route.snapshot.paramMap.get('codigo');
    this.getMoradorById(this.codigo);

  }

  putMorador(morador: Moradores, id: string){

    this.moradorUpdateService.putMorador(morador, id)
    .subscribe((id: string) => {
      this.router.navigate([`/moradorUpdate-summary`]);
      console.log(`Morador cadastrado: ${id}`);
    });
    console.log(morador);

  }

  getMoradorById(id: string){

    this.moradorUpdateService.getMorador(id)
      .subscribe(
        data=>{
          this.moradorUpdt = data;
        }, err=>{
          console.log(err);
        }
    );

  }

}
