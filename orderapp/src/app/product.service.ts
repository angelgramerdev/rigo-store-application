import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
import { config } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) 
  { 

  }

  create(product:any)
  {
    return this.http.post(config.urlBase+"/api/Product/create_product", product)
  }

}
