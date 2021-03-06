import {Injectable} from '@angular/core';

export interface ICustomWindow extends Window {
  Razorpay: any;
  __custom_global_stuff: string;
}

function getWindow(): any {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class WindowRefService {
  [x: string]: any;
 
  
  get nativeWindow(): ICustomWindow {
    return getWindow();
  }


}