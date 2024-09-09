import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  name:any;
  reference:any;
  price:any;
  response:any
  
  constructor(private serviceProduct:ProductService)
  {
  }

  create()
  {
    let product=
    {
      name:this.name,
      reference:this.reference,
      price:this.price
    }

    this.serviceProduct.create(product).subscribe((res)=>{
      this.response=res
      console.log(this.response);
      if(this.response.code==200)       
          alert(this.response.message);       
        else
        alert("bad request");
    }  );

  }

}
