import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { Category } from '../shared/category.model';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css'],
  providers:[ AppserviceService ]
})
export class EditcategoryComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(public categories: AppserviceService) { }

  cat: Category[] = [];

  ngOnInit(): void {
    this.initForm();
    this.categories.getCategories()
    .then(response => this.createListCategory(response));
  }

  createListCategory(rows: any) {
    const category: Category[] = [];    
    rows.data.forEach((element: Category) => {
      category.push(element);
    });
    this.cat = category
    console.log("category listing",this.cat);
  }

  initForm() {
    this.formGroup = new FormGroup({
      category: new FormControl("",[Validators.required]),
    });
  }

  addCategory() {
    if(this.formGroup.valid){
      this.categories.addCategory(this.formGroup.value).subscribe(result=>{
       if(result) {
         console.log("added category",result);
         alert("Category added successfully");
       }else{
         alert(result);
       }
      });
    }
    this.formGroup.reset();
  }

  matcher = new MyErrorStateMatcher();
}

