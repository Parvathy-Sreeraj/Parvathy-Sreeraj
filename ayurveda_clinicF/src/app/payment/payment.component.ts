import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatRadioChange } from '@angular/material/radio';
import { Location } from '@angular/common';
//import {CommonURL} from '../../utils/common'
import { AppserviceService } from '../appservice.service';
declare var Razorpay: any; 

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public emailid:any;
  public cashTotal:any;
  id: any;
  customCard = '';
  outletDetail: any;
  payment_creation_id=null;

  obj = {
    reciepient_name: '',
    reciepient_email: '',
    your_name: '',
    your_email: ''
  };

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
/*
  static API_SERVICE:AppserviceService ;
  
  razorPayOptions = {
    "key": '', // Enter the Key ID generated from the Dashboard
    "amount": '', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise or INR 500.
    "currency": "INR",
    "name": "ABCD",
    "description": "ABCD bill payment",
    "order_id":"ORDERID_FROM_BACKEND",
    //"image": "https://example.com/your_logo",
    "handler": function (response: any) {
      console.log("this is the response ",response);
    },
    "notes": {
        "address": "ABCDE"
    },
    "theme": {
        "color": "#8bf7a8"
    },
    http_post:this.apiService
};

  @ViewChild('success') success: TemplateRef<any> | undefined;

  constructor(private route: ActivatedRoute,
    private apiService: ApiService,
    private util: UtilService,
    private router: Router,
    private location: Location,
    private dialog: MatDialog) {
    this.id = this.route.snapshot.paramMap.get('id');
    PaymentComponent.API_SERVICE = this.apiService ;
   }


  ngOnInit(): void {
    this.getOutletDetail();

    this.emailid = localStorage.getItem("emailid");
    this.cashTotal = localStorage.getItem("GrandTotal");
    this.cashTotal = parseInt(this.cashTotal)
  }

  getOutletDetail() {
    this.apiService.http_get('business/get/single/' + this.id)
    .subscribe((response: { payload: any; }) => {
      this.outletDetail = response.payload;
      console.log("response", response);
      console.log("response", this.outletDetail);
    }, (error: any) => {
      console.log("error", error);
    });
  }


  Procedure(event: any) {
    // this.obj.radioValue = ( this.obj.radioValue - ((this.obj.radioValue/100)*10) )
    // if(this.obj.radioValueCustom != ''){
    //  let radioCustom =  +this.obj.radioValueCustom;
    //  this.obj.radioValue = ( radioCustom- ((radioCustom/100)*10) )
    // }
    // console.log("this.obj", this.obj);
    // console.log("outlet detail",this.outletDetail);

    let finalObject = {
      "user_id":"5e7a6fcd3cd6e61c5059ca62",
      "business_id":this.outletDetail._id,
      "amount": Number(this.obj.radioValue),
      "recipient_name":this.obj.reciepient_name,
      "recipient_email":this.obj.reciepient_email,
      "user_email":this.obj.your_email,
      "user_name":this.obj.your_name
    }
    console.log("this is the final object ",finalObject);


    this.apiService.http_post(CommonURL.URL_PAY_CARD,finalObject)
    .subscribe((response: { payload: any; }) => {
      console.log("response for purchase ",response);
      let payload = response.payload;
      if (payload["key"] && payload["dbRes"]["order"]["id"] && payload["dbRes"]["order"]["amount"]) {
        this.razorPayOptions.key = payload["key"];
        this.razorPayOptions.order_id = payload["dbRes"]["order"]["id"];
        this.razorPayOptions.amount =  payload["dbRes"]["order"]["amount"];
        this.razorPayOptions.handler =  this.razorPayResponseHandler;
        this.payment_creation_id = payload["dbRes"]["_id"];
        finalObject["_id"] =payload["dbRes"]["_id"]
        sessionStorage.setItem("temp",JSON.stringify(finalObject))

        console.log("op",this.razorPayOptions)
  
      var rzp1 = new Razorpay(this.razorPayOptions);
      rzp1.open();
      console.log("opened")
      } else {
        // bro show error here
      }
    }, (error: any) => {
      console.log("error", error);
    });

  
  }


 razorPayResponseHandler(response: any){
  //  console.log("final response",response);
  let storage_data =sessionStorage.getItem('temp') 
  let sess =  JSON.parse(storage_data);
  console.log("storage ",sess)
  let paymentObject= {
    _id:sess._id,
    payment:response,
    user_name:sess.user_email,
    amount: sess.amount,
    recipient_email:sess.recipient_email,
    user_email:sess.user_name,
  }
  console.log("payment object ",paymentObject)
  PaymentComponent.API_SERVICE.http_put(CommonURL.URL_PAY_CARD_SUCCESS,paymentObject).subscribe((success: any)=>{
    console.log("success");
    alert("payment success send to success page");
    sessionStorage.removeItem('temp');
   },(error: any)=>{
    PaymentComponent.API_SERVICE.http_delete(CommonURL.URL_PAY_CARD_ERROR,{_id:paymentObject._id}).subscribe((success_delete: any)=>{
      console.log("error in payment payment suucessfull deleted from db");
      
    },(error: any)=>{
      console.log("error",error)
    })
    console.log("error",error)
   })
 }

 */

}

