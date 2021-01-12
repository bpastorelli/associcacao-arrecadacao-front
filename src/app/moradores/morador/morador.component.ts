import { MoradorService } from './morador.service';
import { Component, OnInit } from '@angular/core';
import { Morador } from './../morador/morador.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-morador',
  templateUrl: './morador.component.html'
})
export class MoradorComponent implements OnInit {

  public id: string
  public residenciaId: number
  public morador: Morador
  public create: boolean = true

  errorMessage;

  constructor(private moradorService: MoradorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

      this.residenciaId = +this.route.snapshot.paramMap.get('codigo');
      console.log(`residencia id ${this.residenciaId}`)

      if(this.residenciaId){
        this.create = false;
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

}
