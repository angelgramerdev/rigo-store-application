import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
import { config } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderproductService {

  constructor(private http:HttpClient) { }

  create(orderProduct:any)
  {
   return this.http.post(config.urlBase+"/api/OrderProduct/create_order_product", orderProduct); 
  }

}
