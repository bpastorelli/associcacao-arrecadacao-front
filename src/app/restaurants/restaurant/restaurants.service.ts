import { MenuItem } from './../../restaurant-detail/menu-item/menu-item.model';
import { ErrorHandler } from './../../app.error-handler';
import { _API } from './../../app.api';
import { Restaurant } from "./restaurant.model";
import { Http } from '@angular/http'
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RestaurantsService {


  constructor(private http: Http){}

  restaurants(): Observable<Restaurant[]> {

    return this.http.get(`${_API}/restaurants`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)

  }

  restaurantById(id: string): Observable<Restaurant>{

    return this.http.get(`${_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)

  }

  reviewsOfRestaurant(id: string): Observable<any>{

    return this.http.get(`${_API}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)

  }

  menuOfRestaurant(id: string): Observable<MenuItem[]>{

    return this.http.get(`${_API}/restaurants/${id}/menu`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)

  }

}
