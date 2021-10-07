import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { Profile } from '../shared/profile.model';

@Component({
  selector: 'app-single-profile',
  templateUrl: './single-profile.component.html',
  styleUrls: ['./single-profile.component.css'],
  providers:[ AppserviceService ]
})
export class SingleProfileComponent implements OnInit {

  public emailid: any;
  prof: Profile[] = [];

  constructor(public profiles: AppserviceService) { }

  ngOnInit(): void {
    this.emailid = localStorage.getItem("emailid")
    this.profiles.getSingleProfile(this.emailid)
    .then(response => this.createProfile(response));
  }

  createProfile(rows: any) {
    const profile: Profile[] = [];    
    rows.data.forEach((element: Profile) => {
      profile.push(element);
      console.log("profffff",element)
    });
    this.prof = profile
    console.log("profile",this.prof);
  }
}
