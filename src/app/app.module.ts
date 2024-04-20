import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopicsBarComponent } from './topics-bar/topics-bar.component';
import { SearchAreaComponent } from './search-area/search-area.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TopicsBarComponent,
    SearchAreaComponent,
    CalendarComponent,
    DiscussionComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
