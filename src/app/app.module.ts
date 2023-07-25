import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DOCSComponent } from './docs/docs.component';
import { AngularComponent } from './angular/angular.component';
import { COMMUNITYComponent } from './community/community.component';
import { BLOGComponent } from './blog/blog.component';
import { DropdownlistComponent } from './dropdownlist/dropdownlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChapterOneComponent } from './chapter-one/chapter-one.component';
import { ChapterTwoComponent } from './chapter-two/chapter-two.component';
import { FooterComponent } from './footer/footer.component';

import { ForcheckboxService } from './forcheckbox.service';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DOCSComponent,
    AngularComponent,
    COMMUNITYComponent,
    BLOGComponent,
    DropdownlistComponent,
    ChapterOneComponent,
    ChapterTwoComponent,
    FooterComponent,
    LoginComponent,
    LayoutComponent,
    LoginLayoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
    
  ],
  providers: [ForcheckboxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
