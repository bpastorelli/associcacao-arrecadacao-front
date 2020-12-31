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
import { ResidenciasService } from './residencias/residencias.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { ResidenciasComponent } from './residencias/residencias.component';
import { MoradorComponent } from './moradores/morador/morador.component';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';
import { MoradorSummaryComponent } from './morador-summary/morador-summary.component';
import { MoradoresGridComponent } from './moradores/moradores-grid/moradores-grid.component';
import { MoradorUpdateComponent } from './moradores/morador-update/morador-update.component';
import { MoradorUpdateService } from './moradores/morador-update/morador-update.service';
import { EmitterService } from './emitter.service';


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
    MoradoresGridComponent,
    MoradorUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [EmitterService, MoradorService, MoradorUpdateService, MoradoresService, ResidenciasService, RestaurantsService, ShoppingCartService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
