import { Component } from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { OrderService } from '../order.service'

@Component({
  selector: 'app-updateorder',
  templateUrl: './updateorder.component.html',
  styleUrls: ['./updateorder.component.css']
})
export class UpdateorderComponent {

  identification:any
  deliveryAddress:any;
  name:any;
  response:any;
  
  constructor(private route: ActivatedRoute, private serviceOrder:OrderService) 
  {
    debugger
   console.log(this.route.snapshot.params["id"]);
   this.getOrder();
  }

  edit()
  {
    let objOrder=
    {
      Id:this.route.snapshot.params["id"],
      Identification:this.identification,
      DeliveryAddress:this.deliveryAddress,
      Name:this.name
    }
    this.serviceOrder.edit(objOrder).subscribe(res => {
      this.response=res
      if(this.response.code==200)
        {
          alert(this.response.message)
          window.location.href="/grid"
        }
          
      
    });
  }

  getOrder()
  {
    this.serviceOrder.getOrder(this.route.snapshot.params["id"]).subscribe(
      res=> {
        this.response=res;
        this.deliveryAddress=this.response.order.deliveryAddress;
        this.identification=this.response.order.identification;
        this.name=this.response.order.name;
        console.log(this.response);
      }
    );
  }

}
