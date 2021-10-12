import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { validate } from 'json-schema';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

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
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  formGroup!: FormGroup;
  editorContent!: string;
  adsImage!: string;
  //imagepaths: string [] = [];
  //status = new FormControl();
  //statusList: string[] = ['Free', 'Top-ads', 'Premium', 'Gallery-ads'];
  url: string | ArrayBuffer | null | undefined;
  multipleImages = [];  
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: Tag[] = [];
  public emailid!: string | null;

  constructor(private postAds: AppserviceService, private router : Router) { }

  ngOnInit(): void {
    this.emailid = localStorage.getItem("emailid");
    console.log("eeeeeeeeee",this.emailid)
    this.initForm();
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
   
    addPostProcess(){
      this.adsImage = this.formGroup.value.image.replace('C:\\fakepath\\','');
      console.log("4444444444444444444444444444444444444", this.adsImage);

      //const formData = new FormData();
      //for(let img of this.multipleImages){
      //  formData.append('image', img);
      //}

      console.log("Isss this.formGroup.valid",this.formGroup.valid)
      if(this.formGroup.valid){
        this.postAds.addPost(this.formGroup.value).subscribe(result=>{
        if(result) {
          console.log("newly added post",result);
          alert("New post added successfully");
          this.router.navigate(['/myads'])
        }else{
          alert(result.message);
        }
        });
      }
      this.formGroup.reset();
    }

  onSelectFiles(event: any){
  //readUrl(event:any) {
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
/*
    if(event.target.files){
      for(let i=0; i<(event.target.files.length); i++) {
        this.imagepaths = event.target.files[i]
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[i])
        reader.onload = (events: any) => {
          this.images.push(events.target.result);
        }
      }
    }
  }
*/

 /*
  // FOR CHIP INPUT IN FORM
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.tags.push({name: value});
    }
    event.chipInput!.clear();
  }
  
  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
  */
 
matcher = new MyErrorStateMatcher();
}




/*

import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {


  constructor(private postAds: AppserviceService) { }

  ngOnInit(): void {
  }
  userObj={
    email:'',
    title:'',
    description:'',
    phone_one:'',
    phone_two:'',
    age:'',
    website:'',
    comment:'',
    maincity:'',
    localcity:'',
    street:'',
    image:'',
    imagesPath:'',
    tags:'',
    status:''
  }
  tempObj:any;
  addpost(){
    this.postAds.addpost(this.userObj).subscribe(data=>{
      this.tempObj=data;
    })
  }
}



/////////

import { Component, OnInit } from '@angular/core';
declare var tinymce: any;

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  title = 'angulartinymc';

  ngOnInit() {
    
    tinymce.init(
      {
          selector: "#mymce1"
      });
  }
}
*/
