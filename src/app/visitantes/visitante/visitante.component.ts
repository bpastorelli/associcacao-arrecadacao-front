import { Component, OnInit } from '@angular/core';
import { Visitante } from '../visitante.model';
import { VisitantesService } from './../visitantes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-visitante',
  templateUrl: './visitante.component.html'
})
export class VisitanteComponent implements OnInit {

  id: string
  acao: string;
  codigo: string;
  create: boolean = true;
  pag: Number = 1;
  contador: Number = 5;
  errorMessage;

  public visitante: Visitante;
  public visitantes: Visitante[];
  public situacaoCadastral = [
        { id: 1, label: "Ativo" },
        { id: 0, label: "Inativo" }]


  constructor(
              private router: Router,
              private route: ActivatedRoute,
              private visitantesService: VisitantesService) { }

  ngOnInit() {

      this.codigo = this.route.snapshot.paramMap.get('codigo');

      console.log(this.codigo)

      if(this.codigo != "create" && this.codigo != "novo"){
          this.create = false;
          this.getVisitanteById(this.codigo);
      }

      console.log(this.create)

  }

  postVisitante(visitante: Visitante){

    this.visitantesService.postVisitante(visitante)
      .subscribe(data => {
        this.visitante = data;
        this.id = data.id;
        alert(this.id);
        this.router.navigate(['/morador-summary']);
    },err=>{
        this.errorMessage = err.message;
        throw err;
    });

  }

  putVisitante(visitate: Visitante, id: string){



  }

  getVisitanteById(id: string){

    this.visitantesService.getVisitantes(id, null, null, null)
      .subscribe(
        data=>{
            this.visitantes = data;
        }, err=>{
           this.errorMessage = err.message;
           throw err;
      }
    );
    return this.visitantes;

  }

  pageChanged(event){
    this.pag = event;
  }

}
