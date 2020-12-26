import { MenuItem } from './../menu-item/menu-item.model';
import { RestaurantsService } from './../../restaurants/restaurant/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(private restaurantsService: RestaurantsService,
      private route : ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantsService
        .menuOfRestaurant(this.route.parent.snapshot.params['id'])
  }

  addMenuItem(item: MenuItem){

    console.log(item)

  }

}
