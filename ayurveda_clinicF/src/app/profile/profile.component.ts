import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { Profile } from '../shared/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[ AppserviceService ]
})
export class ProfileComponent implements OnInit {

  constructor(public profiles: AppserviceService) { }
  prof: Profile[] = [];

  ngOnInit(): void {
    this.profiles.getProfiles()
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