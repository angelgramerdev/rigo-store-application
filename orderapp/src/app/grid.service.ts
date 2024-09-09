import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
import { config } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor(private http:HttpClient) { }

  getOrders()
  {
    return this.http.get(config.urlBase+"/api/Order/get_orders")
  }

  getProducts()
  {
    return this.http.get(config.urlBase+"/api/Product/get_products")
  }

  erase(id:number)
  {
    return this.http.delete(config.urlBase+"/api/Order/delete_order?id="+id);
  }

  getOrderProducts(orderId:number)
  {
    return this.http.get(config.urlBase+"/api/OrderProduct/get_order_products?orderId="+orderId);
  }

}
