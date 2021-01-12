import { Component, OnInit } from '@angular/core';
import { MoradorService } from './morador.service';
import { Morador } from './../morador/morador.model';
import { Moradores } from './../../moradores/moradores.model';
import { Residencia } from './../../residencias/residencia.model';
import { MoradoresService } from './../moradores.service';
import { Router, ActivatedRoute } from '@angular/router';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'mt-morador',
  templateUrl: './morador.component.html'
})
export class MoradorComponent implements OnInit {

  id: string
  acao: string;
  codigo: string
  create: boolean = true
  pag: Number = 1;
  contador: Number = 5;
  errorMessage;

  public morador: Morador
  public moradores: Moradores[];
  public residenciasVinculadas: Residencia[];
  public situacaoCadastral = [
        { id: 1, label: "Ativo" },
        { id: 0, label: "Inativo" }]

  constructor(
              private moradorService: MoradorService,
              private moradoresService: MoradoresService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

      this.codigo = this.route.snapshot.paramMap.get('codigo');
      this.acao = this.route.snapshot.paramMap.get('acao');

      console.log(this.codigo)
      console.log(this.acao)

      if(this.codigo != "create" && this.codigo != "novo"  && this.acao === null){
          this.create = false;
          this.getMoradorById(this.codigo.toString());
          this.getResidenciasVinculados(this.codigo.toString());
      }

      console.log(this.create)

  }

  postMoradores(morador: Morador) {

    this.moradorService.postMoradores(morador)
      .subscribe(data => {
        this.morador = data;
        this.id = data.id;
        alert(this.id);
        this.router.navigate(['/morador-summary']);
    },err=>{
        this.errorMessage = err.message;
        throw err;
    });

  }

  postMorador(morador: Morador){

    this.moradorService.postMorador(morador)
      .subscribe(data => {
        this.morador = data;
        this.id = data.id;
        alert(this.id);
        this.router.navigate(['/morador-summary']);
    },err=>{
        this.errorMessage = err.message;
        throw err;
    });

  }

  putMorador(moradorEdit: Morador, id: string){

    this.moradorService.putMorador(moradorEdit, id)
      .subscribe(data => {
        this.morador = data;
        this.id = data.id;
        this.router.navigate([`/morador-edit-summary`]);
    },
    (err) =>{
        this.errorMessage = err.message;
        throw err;
    });

  }

  getMoradorById(codigo: string) {

    this.moradoresService.getMoradores(codigo, null, null, null, null)
    .subscribe(
      data=>{
        this.moradores = data;
      }, err=>{
        this.errorMessage = err.message;
        throw err;
      }
    );
    return this.moradores;

  }

  getResidenciasVinculados(codigo: string){

    this.moradorService.getResidenciasVinculadas(codigo)
      .subscribe(
          data=>{
              console.log(data);
              this.residenciasVinculadas = data;
          }, err=>{
            this.errorMessage = err.message;
            throw err;
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
