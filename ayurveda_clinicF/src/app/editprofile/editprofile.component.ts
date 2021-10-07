import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  image: any;

  constructor() { }

  ngOnInit(): void {
  }
  selectFile(event: any){
    if(event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event: any) => {
        this.image = event.target.result;
      }
    }
  }

}
