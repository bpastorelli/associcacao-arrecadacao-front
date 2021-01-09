import { Residencia } from './../residencia.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { ResidenciasService } from './../residencias.service';
import { ResidenciaService } from './../../residencias/residencia/residencia.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mt-residencia',
  templateUrl: './residencia.component.html'
})
export class ResidenciaComponent implements OnInit {

  form: FormGroup;
  public residenciaId: string
  public IsCreate: boolean = true
  @Input() residencias: Residencia[]

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
    }

  }

  postResidencia(residencia: Residencia){

    console.log(residencia)

    this.residenciaService.postResidencia(residencia)
      .subscribe((id: string) => {
      console.log(`Residecia cadastrada: ${id}`);
      this.router.navigate(['/residencia-summary']);
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

}
