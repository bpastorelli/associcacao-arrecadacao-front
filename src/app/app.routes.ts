import { Component } from '@angular/core';

import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoradoresComponent } from './moradores/moradores.component';
import { MoradorComponent } from './moradores/morador/morador.component';
import { MoradorSummaryComponent } from './morador-summary/morador-summary.component';
import { ResidenciasComponent } from './residencias/residencias.component'
import { OrderComponent } from './order/order.component';
import { MoradorUpdateComponent } from './moradores/morador-update/morador-update.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'moradores', component: MoradoresComponent},
  {path: 'morador', component: MoradorComponent },
  {path: 'morador-summary', component: MoradorSummaryComponent},
  {path: 'morador-update/:codigo', component: MoradorUpdateComponent },
  {path: 'residencias', component: ResidenciasComponent},
  {path: 'about', component: AboutComponent},
  {path: 'order', component: OrderComponent}

]
