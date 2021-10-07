import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EditorModule } from '@tinymce/tinymce-angular';

import { SocialAuthServiceConfig, SocialAuthService } from 'angularx-social-login';
import { SocialLoginModule, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//import { AppServService } from './services/app-serv.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';





//import {MatGridListModule} from '@angular/material/grid';
//import {MatTreeModule} from '@angular/tree';
//import {MatOptionModule} from '@angular/option';

import { from } from 'rxjs';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PostDisplayComponent } from './post-display/post-display.component';
import { AddPostComponent } from './add-post/add-post.component';
import { appRoutes } from './routes';
import { ProfileComponent } from './profile/profile.component';
import { SingleProfileComponent } from './single-profile/single-profile.component';
import { HomeComponent } from './home/home.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { EditcategoryComponent } from './editcategory/editcategory.component';
import { EditadvertisementComponent } from './editadvertisement/editadvertisement.component';
import { ChatComponent } from './chat/chat.component';
import { UsernameComponent } from './username/username.component';
import { StartComponent } from './start/start.component';
import { HeaderComponent } from './header/header.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { MyadsComponent } from './myads/myads.component';
import { SingleprofileComponent } from './singleprofile/singleprofile.component';
import { MycartComponent } from './mycart/mycart.component';

//import { MyAdsComponent } from './my-ads/my-ads.component';



@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    SignupComponent,
    LoginComponent,
    PostDisplayComponent,
    ProfileComponent,
    SingleProfileComponent,
    HomeComponent,
    AdminhomeComponent,
    EditprofileComponent,
    EditcategoryComponent,
    EditadvertisementComponent,
    ChatComponent,
    UsernameComponent,
    StartComponent,
    HeaderComponent,
    AdminheaderComponent,
    MyadsComponent,
    SingleprofileComponent,
    MycartComponent
  ],
  imports: [
    BrowserModule,
    EditorModule,
    RouterModule.forRoot(appRoutes),
    SocialLoginModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatMenuModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatNativeDateModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatChipsModule,
    MatCheckboxModule,
    MatGridListModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '180824807976-4u330f7pvvqrfqub05iiu49dgtq4ot50.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }