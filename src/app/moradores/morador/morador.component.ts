import { Moradores } from './../moradores.model';
import { MoradorService } from './morador.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Morador, MoradoresRequest } from './../morador/morador.model';

@Component({
  selector: 'mt-morador',
  templateUrl: './morador.component.html'
})
export class MoradorComponent implements OnInit {

  public moradorResponse: string
  public morador: Morador[] = []
  public moradoresRequest: MoradoresRequest

  constructor(private moradorService: MoradorService) { }

  ngOnInit() {
  }

  checkMorador(morador: Morador){

    console.log(morador)

  }

  postMoradores(morador: Morador) {

    this.moradorService.postMoradores(morador, morador.residenciaId)
    .subscribe(
      data=>{
        console.log(data);
        this.moradorResponse = data;

      }, err=>{
        console.log(err);
      }
    );
    return this.moradorResponse;

  }

}
