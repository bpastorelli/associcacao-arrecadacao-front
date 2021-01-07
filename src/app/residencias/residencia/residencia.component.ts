import { Residencia } from './../residencia.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { ResidenciasService } from './../residencias.service';
import { ResidenciaService } from './../../residencias/residencia/residencia.service';

@Component({
  selector: 'mt-residencia',
  templateUrl: './residencia.component.html'
})
export class ResidenciaComponent implements OnInit {

  public residenciaId: string
  @Input() residencias: Residencia[]

  constructor(private router: Router, private route: ActivatedRoute, private residenciaService: ResidenciaService, private residenciasService: ResidenciasService) { }

  ngOnInit() {

    this.residenciaId = this.route.snapshot.paramMap.get('codigo');
    this.getResidenciaById(this.residenciaId);

  }

  postResidencia(residencia: Residencia){

    this.residenciaService.postResidencia(residencia)
      .subscribe((id: string) => {
      console.log(`Residecia cadastrada: ${id}`);
      this.router.navigate(['/residencia-summary']);
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
