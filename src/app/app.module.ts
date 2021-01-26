import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantsService } from './restaurants/restaurant/restaurants.service';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { ShoppingCartService } from './restaurant-detail/shopping-cart/shopping-cart.service';
import { OrderComponent } from './order/order.component';
import { MoradoresComponent } from './moradores/moradores.component';
import { MoradoresService } from './moradores/moradores.service';
import { MoradorService } from './moradores/morador/morador.service';
import { VisitantesService } from './visitantes/visitantes.service';
import { CepService } from './cep/cep.service';
import { ResidenciasService } from './residencias/residencias.service';
import { ResidenciaService } from './residencias/residencia/residencia.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { ResidenciasComponent } from './residencias/residencias.component';
import { MoradorComponent } from './moradores/morador/morador.component';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';
import { MoradorSummaryComponent } from './summary/morador-summary.component';
import { MoradorEditSummaryComponent } from './summary/morador-edit-summary.component';
import { EmitterService } from './emitter.service';
import { ResidenciaComponent } from './residencias/residencia/residencia.component';
import { CepComponent } from './cep/cep.component';
import { VisitantesComponent } from './visitantes/visitantes.component';
import { VisitanteComponent } from './visitantes/visitante/visitante.component';
import { VisitasComponent } from './visitantes/visitas/visitas.component';
import { VisitaRequestComponent } from './visitantes/visita/visita.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    MoradoresComponent,
    ResidenciasComponent,
    MoradorComponent,
    InputComponent,
    RadioComponent,
    MoradorSummaryComponent,
    MoradorEditSummaryComponent,
    ResidenciaComponent,
    CepComponent,
    VisitantesComponent,
    VisitanteComponent,
    VisitasComponent,
    VisitaRequestComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
              CepService,
              EmitterService,
              MoradorService,
              MoradoresService,
              ResidenciasService,
              RestaurantsService,
              ShoppingCartService,
              ResidenciaService,
              VisitantesService,
            {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
