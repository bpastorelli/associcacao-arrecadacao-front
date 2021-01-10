import { Residencia } from './../../residencias/residencia.model';
import { Moradores } from './../moradores.model';
import { MoradorService } from './morador.service';
import { Component, Input, OnInit } from '@angular/core';
import { Morador } from './../morador/morador.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-morador',
  templateUrl: './morador.component.html'
})
export class MoradorComponent implements OnInit {


  public residenciaId: string
  public morador: Morador
  @Input() moradores: Moradores
  @Input() residenciasVinculadas: Residencia[]

  constructor(private moradorService: MoradorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.residenciaId = this.route.snapshot.paramMap.get('codigo');
    console.log(`residencia id ${this.residenciaId}`)

  }

  checkMorador(morador: Morador){

    console.log(morador)

  }

  postMoradores(morador: Morador) {

    this.moradorService.postMoradores(morador)
    .subscribe((id: string) => {
      this.router.navigate(['/morador-summary']);
      console.log(`Morador cadastrado: ${id}`);
    });
    console.log(morador);
  }

}
