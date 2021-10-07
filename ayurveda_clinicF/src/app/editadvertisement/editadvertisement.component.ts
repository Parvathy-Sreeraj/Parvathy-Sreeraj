import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editadvertisement',
  templateUrl: './editadvertisement.component.html',
  styleUrls: ['./editadvertisement.component.css']
})
export class EditadvertisementComponent implements OnInit {

  formGroup!: FormGroup;
  public emailid!: string | null;

  constructor(private editAds: AppserviceService) { }

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
      image: new FormControl("",[Validators.required]),
      category: new FormControl("",[Validators.required]),
     });
   }
}
