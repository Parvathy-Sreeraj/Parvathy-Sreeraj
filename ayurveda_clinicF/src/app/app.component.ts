import { Component } from '@angular/core';
//import { AppServService } from './services/app-serv.service';
//import { Category } from './classes/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ayurveda-clinic';

  /*
  constructor(private _AppServService: AppServService) {
  }

  listcategory!: Category[];

   ngOnInit() {
     this._AppServService.getCategory()
     .subscribe
     (
       data=>
       {
          this.listcategory =  data;
       }
     )
   }
   */
}
