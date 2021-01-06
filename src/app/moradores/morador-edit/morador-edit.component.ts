import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MoradorEdit } from './../morador-edit/morador-edit.model';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MoradorEditService } from './morador.edit.service';
import { MoradoresService } from './../moradores.service';
import { Moradores } from './../../moradores/moradores.model';

@Component({
  selector: 'mt-morador-edit',
  templateUrl: './morador-edit.component.html'
})

export class MoradorEditComponent implements OnInit {

    public moradores: Moradores[]
    public moradorEdit: MoradorEdit;

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

      this.moradorEditService.putMorador(morador, id)
        .subscribe((id: string) => {
          this.router.navigate([`/morador-edit-summary`]);
      }, err=>{
        console.log(err);
      });
      console.log(morador);

    }

    getMoradorById(codigo: string) {

      this.moradoresService.getMoradores(codigo, null, null, null, null)
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

  }
