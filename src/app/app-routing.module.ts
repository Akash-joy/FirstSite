import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { DOCSComponent } from './docs/docs.component';
import { AngularComponent } from './angular/angular.component';
import { COMMUNITYComponent } from './community/community.component';
import { BLOGComponent } from './blog/blog.component';
import { ChapterOneComponent } from './chapter-one/chapter-one.component';
import { ChapterTwoComponent } from './chapter-two/chapter-two.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  
  {path:'',component:NavBarComponent ,children:[
    {path:'app-angular',component:AngularComponent},
    {path:'app-docs',component: DOCSComponent  },
      {path:'app-chapter-one',component:ChapterOneComponent },
      {path:'app-chapter-two',component:ChapterTwoComponent, canActivate:[AuthGuard]},
    {path:'app-community',component:COMMUNITYComponent},
    {path:'app-blog',component:BLOGComponent},
   { path: '', redirectTo: '/app-angular', pathMatch: 'full'}
  ]},
  { path: 'app-login', component: LoginComponent },

  { path: '**', redirectTo: '/app-angular' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
