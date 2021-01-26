import { Visitante } from './../visitante.model';
import { Component, OnInit } from '@angular/core';
import { Residencia } from './../../residencias/residencia.model';
import { Visita } from './../visitas/visita.model';
import { VisitaRequest } from './visitaRequest.model';
import { ResidenciasService } from './../../residencias/residencias.service';
import { VisitantesService } from './../visitantes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-visita',
  templateUrl: './visita.component.html'
})
export class VisitaRequestComponent implements OnInit {

  codigo: string;
  nomeResp: string;
  enderecoResp: string;
  numeroResp: string;
  errorMessage;

  public visita: Visita;
  public visitantes: Visitante[];
  public residencias: Residencia[];

  constructor(private residenciasService: ResidenciasService,
              private visitantesService: VisitantesService,
              private router: Router,
              private route: ActivatedRoute
              ) { }

  ngOnInit() {

    this.codigo = this.route.snapshot.paramMap.get('codigo');
    this.getResidenciaById(this.codigo);

  }

  getVisitante(rg: string){

    if(rg.length > 0){
      this.visitantesService.getVisitante(rg, null)
        .subscribe(
          data=>{
            this.nomeResp = data.nome;
            this.enderecoResp = data.endereco;
            this.numeroResp = data.numero;
        },err =>{
            this.errorMessage = err.message;
            throw err;
        });
    }
  }

  postVisita(visitaRequest: VisitaRequest){

    visitaRequest.residenciaId = this.codigo;

    this.visitantesService.postVisita(visitaRequest)
      .subscribe(data => {
          this.visita = data;
          this.router.navigate(['/morador-summary']);
      },err=>{
        this.errorMessage = err.message;
        throw err;
      });
  }

  getResidenciaById(codigo: string){

    this.residenciasService.residencias(codigo, null, null, "0")
      .subscribe(
        data=>{
          this.residencias = data;
        }, err=>{
          this.errorMessage = err.message;
          throw err;
        }
    );
    return this.residencias;

  }

}
