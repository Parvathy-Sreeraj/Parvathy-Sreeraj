import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  constructor(private signup: AppserviceService, private router : Router){ }

  ngOnInit(): void {
  }

  userObj = {
    name:'',
    email:'',
    phone_one:'',
    password:''
  }
  tempObj:any;

  register(){
    this.signup.register(this.userObj).subscribe(data=>{
      this.tempObj=data;
      alert("Registration successful");
      this.router.navigate(['/home'])
      if(!data){
        alert("Registration failed");
      }
    })
    this.emailFormControl.reset();
    this.nameFormControl.reset();
    this.phoneFormControl.reset();
    this.passwordFormControl.reset();
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  nameFormControl = new FormControl('', [
    Validators.required,
  ]);
  phoneFormControl = new FormControl('', [
    Validators.required,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();
}




/*import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signup: AppserviceService) { }

  ngOnInit(): void {
  }
  userObj={
    name:'',
    email:'',
    phone_one:'',
    password:''
  }
  tempObj:any;
  register(){
    this.signup.register(this.userObj).subscribe(data=>{
      this.tempObj=data;
      if(!data){

      }
    })
  }

} */