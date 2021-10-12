import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { Advertisement } from '../shared/advertisement.model';

@Component({
  selector: 'app-post-display',
  templateUrl: './post-display.component.html',
  styleUrls: ['./post-display.component.css'],
  providers:[ AppserviceService ]
})
export class PostDisplayComponent implements OnInit {

  longText = `Treatment Descriptions.`;
  location!: string;
  category!: string;


  constructor(public listingPosts: AppserviceService) { }
  adv: Advertisement[] = []; 

  ngOnInit(): void { 
    this.listingPosts.getAdsList()
    .then(response => this.createList(response))
  }

  createList(rows: any){
    const advertisement: Advertisement[] = [];    
    rows.data.forEach((element: Advertisement) => {
      advertisement.push(element);      
    });
    this.adv= advertisement;
    console.log("post display",this.adv);
  }

  onSearch(){
    this.category = (<HTMLInputElement>document.getElementById("categorySearch")).value;
    this.location = (<HTMLInputElement>document.getElementById("citySearch")).value;
    console.log("this.category", this.category)
    console.log("this.location", this.location)
    if(this.category && this.location){
      this.listingPosts.getSearchList(this.category, this.location)
      .then(response => this.createList(response))
    } else if(this.location){
      this.listingPosts.getLocAdsList(this.location)
      .then(response => this.createList(response))
    } else if(this.category){
      this.listingPosts.getCatAdsList(this.category)
      .then(response => this.createList(response))
    }
  }
}