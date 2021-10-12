import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { Advertisement } from '../shared/advertisement.model';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, AbstractControl } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { identifierModuleUrl } from '@angular/compiler';

interface Duration {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-myads',
  templateUrl: './myads.component.html',
  styleUrls: ['./myads.component.css'],
  providers:[ AppserviceService ]
})

export class MyadsComponent implements OnInit {

  selected = 'days';
  public postList : any ;
  public fixedAmount : any;
  public amount = 0;
  public total = 0 ;
  public cashTotal : any;
  public amt: any;
  public productList: any;

  constructor(public myAdService: AppserviceService, private cartservice: CartService, private fb: FormBuilder, private route: ActivatedRoute) { }
  
  adv: Advertisement[] = [];
  selectedAd!: Advertisement;
  public emailid: any;
  public plan!: string;

  duration: Duration [] = [
    {value: '7', viewValue: '1 week'},
    {value: '14', viewValue: '2 week'},
    {value: '30', viewValue: '1 month'}
  ];

  ngOnInit(): void {  
    this.emailid = localStorage.getItem("emailid");
    console.log("my ads listing ---------------- ", this.emailid)
    this.myAdService.getMyAdsList(this.emailid)
    .then((response: any) => this.createList(response));
  }

  createList(rows: any){
    const advertisement: Advertisement[] = [];    
    rows.data.forEach((element: Advertisement) => {
      advertisement.push(element);
      console.log("element",element)
    });
    this.adv = advertisement;
    console.log("adv of my ads......",this.adv);
  }

  addtocart1(ads: any){
    var x = (<HTMLInputElement>document.getElementById("amt")).value;
    this.cartservice.addtoCart(ads);
    this.amount = 1 + +x;
  }
  addtocart2(ads: any){
    var x = (<HTMLInputElement>document.getElementById("amt")).value;
    this.cartservice.addtoCart(ads);
    this.amount = 2 + +x;
  }
  addtocart3(ads: any){
    var x = (<HTMLInputElement>document.getElementById("amt")).value;
    this.cartservice.addtoCart(ads);
    this.amount = 3 + +x;
  }
  totalAmount(){
    var x = (<HTMLInputElement>document.getElementById("days")).value;
    var y = (<HTMLInputElement>document.getElementById("amt")).value;
    this.amount = +x * +y;
    localStorage.setItem("GrandTotal", JSON.stringify(this.amount));
  }

  deletePost(post: any){
    this.myAdService.deletePostById(post);
  }

}