import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PostDisplayComponent } from './post-display/post-display.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ProfileComponent } from './profile/profile.component';
import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';
import { MyadsComponent } from './myads/myads.component';
import { SingleprofileComponent } from './singleprofile/singleprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { EditadvertisementComponent } from './editadvertisement/editadvertisement.component';
import { MycartComponent } from './mycart/mycart.component';


export const appRoutes : Routes = [
    { path : '', component : StartComponent },
    { path : 'start', component : StartComponent },
    { path : 'login', component : LoginComponent },
    { path : 'signup', component : SignupComponent },
    { path : 'home', component : HomeComponent },
    { path : 'addpost', component : AddPostComponent },
    { path : 'profile', component : ProfileComponent },
    { path : 'postdisplay', component : PostDisplayComponent },
    { path : 'myads/:emailid', component : MyadsComponent},
    { path : 'editpost/:emailid/:id', component : EditadvertisementComponent},
    { path : 'view-profile/:emailid', component : SingleprofileComponent},
    { path : 'edit-profile/:emailid', component : EditprofileComponent},
    { path : 'shoppingcart/:email', component : MycartComponent},
];