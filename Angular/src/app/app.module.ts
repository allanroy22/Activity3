import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import {RouterModule, Routes} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from '@angular/material/grid-list';


const routes: Routes  = [
  {path: "index", component: IndexComponent,
  children:[
  {path: "profile", component: ProfileComponent},
  {path: "gallery", component: GalleryComponent},
  {path: "contact", component: ContactComponent}
  ]},
  {path:"**", redirectTo:"index"}
]
  




@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProfileComponent,
    ContactComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
