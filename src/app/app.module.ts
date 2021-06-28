import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PublishComponent } from './publish/publish.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { CountryComponent } from './country/country.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AuthorProfileComponent } from './author-profile/author-profile.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { MoreAuthorComponent } from './more-author/more-author.component';
import { RouterModule } from '@angular/router';
import { Home1Component } from './home1/home1.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PublishComponent,
    CreateBlogComponent,
    CountryComponent,
    ProfileComponent,
    EditProfileComponent,
    UserlistComponent,
    AuthorProfileComponent,
    MoreAuthorComponent,
    Home1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
