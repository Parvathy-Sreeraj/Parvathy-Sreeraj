import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { Advertisement } from '../shared/advertisement.model';
import { validate } from 'json-schema';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export interface Tag {
  name: string;
}


@Component({
  selector: 'app-editadvertisement',
  templateUrl: './editadvertisement.component.html',
  styleUrls: ['./editadvertisement.component.css']
})
export class EditadvertisementComponent implements OnInit {

  formGroup!: FormGroup;
  public emailid!: string | null;
  tags: Tag[] = [];
  adsImage!: string;
  url: string | ArrayBuffer | null | undefined;
  multipleImages = [];  
  public postList : any ;
  adv: Advertisement[] = [];
  selectedAd!: Advertisement;

  //selectable = true;
  //removable = true;
  //addOnBlur = true;
  //readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor(private editAds: AppserviceService, private router : Router) { }

  ngOnInit(): void {
    this.emailid = localStorage.getItem("emailid");
    console.log("eeeeeeeeee",this.emailid)
    this.initForm();
  }

  createList(rows: any){
    const advertisement: Advertisement[] = [];    
    rows.data.forEach((element: Advertisement) => {
      advertisement.push(element);
    });
    this.adv = advertisement;
    console.log("adv of my ads......",this.adv);
  }

  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl("",[Validators.required]),
      title: new FormControl("",[Validators.required]),
      description: new FormControl("",[Validators.required]),
      phone_one: new FormControl("",[Validators.required]),
      phone_two: new FormControl("",[Validators.required]),
      age: new FormControl("",[Validators.required]),
      website: new FormControl("",[Validators.required]),
      maincity: new FormControl("",[Validators.required]),
      localcity: new FormControl("",[Validators.required]),
      street: new FormControl("",[Validators.required]),
      tags: new FormControl("",[Validators.required]),
      category: new FormControl("",[Validators.required]),
      image: new FormControl("",[Validators.required]),
     });
   }

   editPostProcess(){
    //this.adsImage = this.formGroup.value.image.replace('C:\\fakepath\\','');
    //const formData = new FormData();
    //for(let img of this.multipleImages){
    //  formData.append('image', img);
    //}

    console.log("edit ads this.formGroup.valid",this.formGroup.valid)
      if(this.formGroup.valid){
        this.editAds.addPost(this.formGroup.value).subscribe(result=>{
          if(result) {
            console.log("Post updated",result);
            alert("Post updated successfully");
            this.router.navigate(['/myads'])
          }else{
            alert(result.message);
          }
        });
      }
      this.formGroup.reset();
    }

    onSelectFiles(event: any){
      this.adsImage = event.target.files[0].name;
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (event: ProgressEvent) => {
          this.url = (<FileReader>event.target).result;
        }
        reader.readAsDataURL(event.target.files[0]);
      }
      if(event.target.files.length > 0) {
        this.multipleImages = event.target.files[0];
      }
    }

  matcher = new MyErrorStateMatcher();
}