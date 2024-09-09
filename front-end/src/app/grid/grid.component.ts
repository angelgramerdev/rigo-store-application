import { Component } from '@angular/core';
import { GridService } from '../grid.service'
import { OrderproductService } from '../orderproduct.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  response:any;
  orders:any;
  products:any;
  orderProducts:any;
  productId:any
  orderId:any
  productOrderRes:any;
  getOrderProductsRes:any;
  getProductsRes:any
  eraseRes:any;
  isOpen:boolean=false;
  

  constructor(private serviceGrid:GridService, 
    private serviceOrderProduct:OrderproductService
  )
  {
    this.getOrders();
  }

  getProducts():any
  {
    this.serviceGrid.getProducts().subscribe(res => {
      this.getProductsRes=res;
      this.products=this.getProductsRes.products
    });

  }

  getOrders():any
  {
    this.serviceGrid.getOrders().subscribe(res => {
      this.response=res;
      this.orders=this.response.orders;
      console.log(this.response.orders)
      this.getProducts();
    });
  }

  productSelected(e:any):void
  {
    this.productId=e;
  }

  addProductToOrder():any
  {
    if(this.orderId==undefined || this.orderId <= 0)
      {
        alert("the order number can not be null or 0 or less than 0")
      }

      if(this.productId==undefined)
        {
          alert("you to have select a product from the list")
          return;
        }
        const regex = /^[0-9]*$/;
        let onlyNumbers = regex.test(this.orderId);
        if(!onlyNumbers)
          {
            alert("the order number field can just have numbers")
            return;
          }
    
    let orderProduct=
    {
      ProductId:this.productId,
      OrderId:parseInt(this.orderId)
    }

    this.serviceOrderProduct.create(orderProduct).subscribe(res => { 
      this.productOrderRes=res;    
      if(this.productOrderRes.code==200)
        {
          alert(this.productOrderRes.message)
          this.getOrders();
        }
      else
      {
        alert("we had an error")
      }
      
    });

  }

  goToEdit(order:number)
  {
    window.location.href="/update_order/"+order
  }

  erase(id:number)
  {
    this.serviceGrid.erase(id).subscribe(res=> {
      this.eraseRes=res;
      this.getOrders();
    });
  }

  getOrderProducts(orderId:number)
  {
    this.isOpen=true;  
    this.serviceGrid.getOrderProducts(orderId).subscribe(res => {
        this.getOrderProductsRes=res;
        this.orderProducts=this.getOrderProductsRes.orderProducts;
      });
  }

  closePopUp()
  {
    debugger
    this.isOpen=false;
  }

}
