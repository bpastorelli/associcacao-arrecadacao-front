import { Moradores } from './../../moradores/moradores.model';
import { Residencia } from './../residencia.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { ResidenciasService } from './../residencias.service';
import { ResidenciaService } from './../../residencias/residencia/residencia.service';

@Component({
  selector: 'mt-residencia',
  templateUrl: './residencia.component.html',
})

export class ResidenciaComponent implements OnInit {

  public residenciaId: string
  public IsCreate: boolean = true
  @Input() residencias: Residencia[]
  @Input() moradoresVinculados: Moradores[]

  pag : Number = 1;
  contador : Number = 5;

  constructor(
              private router: Router,
              private route: ActivatedRoute,
              private residenciaService: ResidenciaService,
              private residenciasService: ResidenciasService) { }

  ngOnInit() {

    this.residenciaId = this.route.snapshot.paramMap.get('codigo');

    console.log(this.IsCreate)
    console.log(`Residencia id ${this.residenciaId}`)

    if(this.residenciaId != "create"){
        this.IsCreate = false;
        this.getResidenciaById(this.residenciaId);
        this.getMoradoresVinculados(this.residenciaId);
    }

  }

  postResidencia(residencia: Residencia){

    console.log(residencia)

    this.residenciaService.postResidencia(residencia)
      .subscribe((id: string) => {
      console.log(`Residecia cadastrada: ${id}`);
      this.router.navigate(['/morador-summary']);
    }, err=>{
      console.log(err);
    });

  }

  putResidencia(residencia: Residencia, id: string){

    console.log(`Código de residecia ${id}`)

    this.residenciaService.putResidencia(residencia, id)
      .subscribe((id: string) => {
        this.router.navigate([`/morador-edit-summary`]);
  }, err=>{
    console.log(err);
  });
  console.log(residencia);

  }

  getResidenciaById(codigo: string) {

    this.residenciasService.residencias(codigo, null, null, "0")
    .subscribe(
      data=>{
        console.log(data);
        this.residencias = data;
      }, err=>{
        console.log(err);
      }
    );
    return this.residencias;

  }

  getMoradoresVinculados(codigo: string){

    this.residenciaService.getMoradoresVinculados(codigo)
      .subscribe(
          data=>{
              console.log(data);
              this.moradoresVinculados = data;
          }, err=>{
            console.log(err);
          }
      );
      return this.moradoresVinculados;

  }

  getIdMorador(codigo: string){

    console.log(`Código enviado: ${codigo}`)
    this.router.navigate([`/morador-edit/`, codigo])

  }

  pageChanged(event){
    this.pag = event;
  }

}
