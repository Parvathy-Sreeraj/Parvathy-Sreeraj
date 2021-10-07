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
      console.log("elementtt",element);
    });
    this.adv= advertisement;
    console.log("his.advhis.advhis.advhis.adv ",this.adv);
  }
}