import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
import { config } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  constructor(private http:HttpClient) 
  { 
  }

  create(order:any)
  {
    return this.http.post(config.urlBase+"/api/Order/create_order", order)
  }

  edit(order:any)
  {
    return this.http.put(config.urlBase+"/api/Order/update_order", order)
  }

  getOrder(id:number)
  {
    return this.http.get(config.urlBase+"/api/Order/get_order?id="+id)
  }

}
