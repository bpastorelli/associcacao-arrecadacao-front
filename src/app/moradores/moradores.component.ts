import { Component, OnInit } from '@angular/core';
import { Morador } from './morador.model';
import { MoradoresService } from './moradores.service';

@Component({
  selector: 'mt-moradores',
  templateUrl: './moradores.component.html'
})
export class MoradoresComponent implements OnInit {

  pag : Number = 1;
  contador : Number = 10;
  public moradores: Morador[]

  constructor(private moradoresService: MoradoresService)  { }

  ngOnInit() {

      this.getMoradores();

  }

  getMoradores(){

    this.moradoresService.moradores()
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

  pageChanged(event){
    this.pag = event;
  }

}
