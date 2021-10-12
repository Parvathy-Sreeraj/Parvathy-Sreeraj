import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Advertisement } from './shared/advertisement.model';


@Injectable({
  providedIn: 'root'
})

export class AppserviceService {

  selectedAds: Advertisement | undefined;
  advertisements: Advertisement[] = [];
  baseUrl = "http://localhost:3000/api/ads";

  public cartItemList : any = []
  public postList = new BehaviorSubject<any>([]);

  constructor(private httpClient: HttpClient) { }

  register(userObj: any){
    let httpHeaders = new HttpHeaders({
      'content-Type': 'application/json'
    });
    return this.httpClient.post('http://localhost:3000/api/users/signup',userObj,{headers: httpHeaders});
  }

  login(data: { username: string; password: string; }):Observable<any>{
    return this.httpClient.post('http://localhost:3000/api/users/login',data);
  }

  addPost(data: { email: string; title: string; description: string; image: string; phone_one: string; phone_two: string;
   age: Number; website: string; street: string; localcity: string; maincity: string; tags: string; category: string; }):Observable<any>{
    return this.httpClient.post('http://localhost:3000/api/ads',data);
  }

  //All Post Listing
  getAdsList = (): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      this.httpClient.get('http://localhost:3000/api/ads/posts').subscribe(result => {
        resolve(result);
        console.log("ads list resulttt",result)
      });
    })
  }
  //Category and location based Post Listing
  getSearchList = (category: String, location: String): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      this.httpClient.get(`http://localhost:3000/api/ads/search/?location=${location}&category=${category}`).subscribe(result => {
        resolve(result);
        console.log("Location based ads list resulttt",result)
      });
    })
  }
  //Location based Post Listing
  getLocAdsList = (location: String): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      this.httpClient.get(`http://localhost:3000/api/ads/location/?location=${location}`).subscribe(result => {
        resolve(result);
        console.log("Location based ads list resulttt",result)
      });
    })
  }
  //category based search
  getCatAdsList = (category: String): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      this.httpClient.get(`http://localhost:3000/api/ads/category/?category=${category}`).subscribe(result => {
        resolve(result);
        console.log("Location based ads list resulttt",result)
      });
    })
  }

  //Post Listing by email
  getMyAdsList = (emailid: String): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      this.httpClient.get(`http://localhost:3000/api/ads/userpost/?email=${emailid}`).subscribe(result => {
        resolve(result);
        console.log("my ads list resulttt",result)
      });
    })
  }

  //get post by id
  getMyAdById = (pid: String): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      this.httpClient.get(`http://localhost:3000/api/ads/postid/?id=${pid}`).subscribe(result => {
        resolve(result);
        console.log("my ads list resulttt",result)
      });
    })
  }

  //Delete post by email and id
  deletePostById = (post: String) : Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      this.httpClient.delete(`http://localhost:3000/api/ads/delete/?id=${post}`).subscribe(result => {
        resolve(result);
        console.log("ads delete resulttt",result)
      });
    })
  }

  //Single Profile by email
  getSingleProfile = (emailid: string): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      this.httpClient.get(`http://localhost:3000/api/profile/useremail/?email=${emailid}`).subscribe(result => {
        resolve(result);
        console.log("profile single resulttt",result)
      });
    })
  }

  //Single Profile by userid
  getUserProfile = (id: string): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      this.httpClient.get(`http://localhost:3000/api/profile/user/?id=${id}`).subscribe(result => {
        resolve(result);
        console.log("profile single resulttt",result)
      });
    })
  }

  getProfiles = (): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      this.httpClient.get('http://localhost:3000/api/profile/users').subscribe(result => {
        resolve(result);
        console.log("profile resulttt",result)
      });
    })
  }

  addCategory(userObj: any){
    let httpHeaders = new HttpHeaders({
      'content-Type': 'application/json'
    });
    return this.httpClient.post('http://localhost:3000/api/category',userObj,{headers: httpHeaders});
  }

  getCategories = (): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      this.httpClient.get('http://localhost:3000/api/category').subscribe(result => {
        resolve(result);
        console.log("category resulttt",result)
      });
    })
  }
}