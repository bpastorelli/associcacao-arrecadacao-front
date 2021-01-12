import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoradoresComponent } from './moradores/moradores.component';
import { MoradorComponent } from './moradores/morador/morador.component';
import { MoradorSummaryComponent } from './summary/morador-summary.component';
import { ResidenciaComponent } from './residencias/residencia/residencia.component';
import { ResidenciasComponent } from './residencias/residencias.component'
import { OrderComponent } from './order/order.component';
import { MoradorEditSummaryComponent } from './summary/morador-edit-summary.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'moradores', component: MoradoresComponent},
  {path: 'morador', component: MoradorComponent },
  {path: 'morador-summary', component: MoradorSummaryComponent},
  {path: 'morador-edit-summary', component: MoradorEditSummaryComponent },
  {path: 'morador/:codigo', component: MoradorComponent },
  {path: 'morador/residencia/:codigo', component: MoradorComponent },
  {path: 'morador/:acao/residencia/:codigo', component: MoradorComponent },
  {path: 'residencias', component: ResidenciasComponent},
  {path: 'residencia/:codigo', component: ResidenciaComponent},
  {path: 'residencia/:codigo', component: ResidenciaComponent},
  {path: 'residencia/create/morador/:codigo', component: ResidenciaComponent},
  {path: 'about', component: AboutComponent},
  {path: 'order', component: OrderComponent}

]
