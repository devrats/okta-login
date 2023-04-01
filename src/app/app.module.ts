import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import { oktaAuth } from './auth.service';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule.forRoot({ oktaAuth })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
