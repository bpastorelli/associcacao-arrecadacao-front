import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoradoresComponent } from './moradores/moradores.component';
import { MoradorComponent } from './moradores/morador/morador.component';
import { MoradorSummaryComponent } from './morador-summary/morador-summary.component';
import { ResidenciasComponent } from './residencias/residencias.component'
import { OrderComponent } from './order/order.component';
import { MoradorEditComponent } from './moradores/morador-edit/morador-edit.component';
import { MoradorEditSummaryComponent } from './morador-summary/morador-edit-summary.component copy';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'moradores', component: MoradoresComponent},
  {path: 'morador', component: MoradorComponent },
  {path: 'morador-summary', component: MoradorSummaryComponent},
  {path: 'morador-edit-summary', component: MoradorEditSummaryComponent},
  {path: 'morador-edit/:codigo', component: MoradorEditComponent },
  {path: 'residencias', component: ResidenciasComponent},
  {path: 'about', component: AboutComponent},
  {path: 'order', component: OrderComponent}

]
