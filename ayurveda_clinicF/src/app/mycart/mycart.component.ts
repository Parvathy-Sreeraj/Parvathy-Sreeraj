import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {


  public posts : any = [];
  public grandTotal!: any;
  public emailid:any;
  public cashTotal:any;

  constructor(private cartservice: CartService) { }

  
  ngOnInit(): void {
    this.emailid = localStorage.getItem("emailid");
    console.log("finding user emailid from local storage on clicking my ads", this.emailid);

    this.cartservice.getProducts()
    .subscribe(res=>{
      this.posts = res;
    })

    this.cashTotal = localStorage.getItem("GrandTotal");
    this.cashTotal = parseInt(this.cashTotal)
    console.log("my cash totallll ---------- ", this.cashTotal)
  }
   
  removeItem(item: any){
    this.cartservice.removeCartItem(item);
  }

  emptycart(){
    this.cartservice.removeAllCart();
  }
}