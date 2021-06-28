import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { PublishComponent } from './publish/publish.component';
import { HomeComponent } from './home/home.component';
import { CountryComponent } from './country/country.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AuthorProfileComponent } from './author-profile/author-profile.component';
import {MoreAuthorComponent} from './more-author/more-author.component';
import { Home1Component } from './home1/home1.component';

const routes: Routes = [
  { path: 'create_blog', component: CreateBlogComponent },
  { path: 'publish', component: PublishComponent },
  { path: 'country', component: CountryComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'edit_profile', component: EditProfileComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: 'author-profile', component:AuthorProfileComponent },
  { path: 'more-author', component:MoreAuthorComponent},
  {
    path:'home1', component:Home1Component
  },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
