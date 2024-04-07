import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ComposerListComponent } from "./composer-list/composer-list.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ComposerListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
