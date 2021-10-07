import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { validate } from 'json-schema';
import { ErrorStateMatcher } from '@angular/material/core';
import { SocialAuthService } from 'angularx-social-login';
import { SocialUser, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;
  user: SocialUser | undefined;
  isLoginError : boolean = false;
  public emailId: any;

 constructor(private signin: AppserviceService, private socialAuthService: SocialAuthService, private router : Router) {}
 ngOnInit() {
   this.initForm();
   this.socialAuthService.authState.subscribe((user: SocialUser | undefined) => {
     this.user = user;
   })
 }
 
 SignInWithGoogle() : any{
   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
 }

 signOutGoogle(): any{
   this.socialAuthService.signOut();
 }

 initForm() {
   this.formGroup = new FormGroup({
     username: new FormControl("",[Validators.required]),
     password: new FormControl("",[Validators.required])
   });
 }
 
  loginProcess() {
    if(this.formGroup.valid){
      this.signin.login(this.formGroup.value).subscribe(result=>{
      if(result) {
        localStorage.setItem("userToken",result.token);
        localStorage.setItem("emailid",result.email);
        console.log("localStorage.getItem(emailid)...",typeof(localStorage.getItem("emailid")))
        this.emailId = localStorage.getItem("emailid");
        console.log("hhhhhkkkk",this.emailId)
        console.log("my ads listing ---------------- ", this.emailId)
        this.router.navigate(['/home'])
        alert("Login successful");
      }
      (err : HttpErrorResponse)=>{
        this.isLoginError = true;
      }
      });
    }
   this.formGroup.reset();
 }


matcher = new MyErrorStateMatcher();

}