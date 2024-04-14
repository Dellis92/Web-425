import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ComposerListComponent } from "./composer-list/composer-list.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
