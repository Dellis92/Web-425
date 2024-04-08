import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from '@angular/core';

import { AppComponent } from "./app.component";
import { MyDetailsComponent } from "../assets/my-details/my-details.component";
import { MyImageComponent } from "../assets/my-image/my-image.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutes } from "./app.routing";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    MyDetailsComponent,
    MyImageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
