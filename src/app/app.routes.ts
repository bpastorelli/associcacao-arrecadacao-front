import { Component } from '@angular/core';

import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoradoresComponent } from './moradores/moradores.component';
import { MoradorComponent } from './moradores/morador/morador.component';
import { ResidenciasComponent } from './residencias/residencias.component'
import { OrderComponent } from './order/order.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'moradores', component: MoradoresComponent},
  {path: 'morador', component: MoradorComponent },
  {path: 'residencias', component: ResidenciasComponent},
  {path: 'about', component: AboutComponent},
  {path: 'order', component: OrderComponent}

]
