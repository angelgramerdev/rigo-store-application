import { Component } from '@angular/core';
import { OrderService } from '../order.service'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

identification:any;
deliveryAddress:any;
name:any;
response:any;


  constructor(private orderService:OrderService)
  {

  }

  create()
  {
    if(this.identification ==undefined || this.identification.length < 5)
      {
        alert("identification can not be null or to have less than 5 numbers")
        return;
      }

      if(this.deliveryAddress==undefined || this.deliveryAddress.length < 8)
        {
          alert("Delivery address can not be null or to have less than 8 characters")
          return;
        }

        if(this.name==undefined || this.name.length < 8)
          {
            alert("nombre can not be null or to have less than letters")
            return;
          }
    
    let order=
    {
      Identification:this.identification,
      DeliveryAddress:this.deliveryAddress,
      Name:this.name
    }

    this.orderService.create(order).subscribe(res => {
      this.response=res;
      if(this.response.code==200)
        {
          alert(this.response.message)
          window.location.href="/grid"
        }
        else
        {
          alert(this.response.message)
        }         
    });

  }

}
