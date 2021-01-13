import { Component, OnInit } from '@angular/core';
import { CepService } from './cep.service';
import { Cep } from './cep.model';

@Component({
  selector: 'mt-cep',
  templateUrl: './cep.component.html'
})

export class CepComponent implements OnInit {

  errorMessage
  public cep: Cep

  constructor(private cepService: CepService) { }

  ngOnInit() {


  }

  getCep(cep: string){

    return this.cepService.getCep(cep)
      .subscribe(
        data=>{
          this.cep = data;
      },err =>{
          this.errorMessage = err.message;
          throw err;
      });
  }

}
