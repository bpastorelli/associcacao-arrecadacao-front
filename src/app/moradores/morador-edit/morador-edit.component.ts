import { Residencia } from './../../residencias/residencia.model';
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
    public residenciasVinculadas: Residencia[];
    public moradorEdit: MoradorEdit;
    public message: string;
    public situacaoCadastral = [
                { id: 1, label: "Ativo" },
                { id: 0, label: "Inativo" }]

    pag : Number = 1;
    contador : Number = 5;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private moradorEditService: MoradorEditService,
        private moradoresService: MoradoresService
    ) { }

    ngOnInit(){

        const codigo = this.route.snapshot.paramMap.get('codigo');
        this.getMoradorById(codigo);
        this.getMoradoresVinculados(codigo);

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
          alert(err);

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

    getMoradoresVinculados(codigo: string){

      this.moradorEditService.getResidenciasVinculadas(codigo)
        .subscribe(
            data=>{
                console.log(data);
                this.residenciasVinculadas = data;
            }, err=>{
              console.log(err);
            }
        );
        return this.residenciasVinculadas;

    }

    editResidencia(codigo: string){

      this.router.navigate([`/residencia/`, codigo])

    }

    pageChanged(event){
      this.pag = event;
    }

  }
