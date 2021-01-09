import { ActivatedRoute, Router } from '@angular/router';
import { MoradorEdit } from './../morador-edit/morador-edit.model';
import { Component, OnInit } from '@angular/core';
import { MoradorEditService } from './morador.edit.service';
import { MoradoresService } from './../moradores.service';
import { Moradores } from './../../moradores/moradores.model';

@Component({
  selector: 'mt-morador-edit',
  templateUrl: './morador-edit.component.html'
})

export class MoradorEditComponent implements OnInit {

    public moradores: Moradores[];
    public moradorEdit: MoradorEdit;
    public message: string;
    public situacaoCadastral = [
                { id: 1, label: "Ativo" },
                { id: 0, label: "Inativo" }]

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private moradorEditService: MoradorEditService,
        private moradoresService: MoradoresService
    ) { }

    ngOnInit(){

        const codigo = this.route.snapshot.paramMap.get('codigo');
        this.getMoradorById(codigo);

    }

    putMorador(morador: MoradorEdit, id: string){

      console.log(morador)

      this.moradorEditService.putMorador(morador, id)
        .subscribe(
            resp => {
          this.message = resp;
          this.router.navigate([`/morador-edit-summary`]);
      },
      (err) =>{
        if(err.status == 400) {
          this.message ='Produto não localizado.';
        }
      });

    }

    getMoradorById(codigo: string) {

      this.moradoresService.getMoradores(codigo, null, null, null, null)
      .subscribe(
        data=>{
          this.moradores = data;
        }, err=>{
          this.message = err;
        }
      );
      return this.moradores;

    }

  }
