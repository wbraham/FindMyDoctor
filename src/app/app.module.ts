import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { LandingComponent } from "./landing/landing.component";
import { ProfileComponent } from "./profile/profile.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";

import { SignupComponent } from "./signup/signup.component";
import { TeacherDashboardComponent } from "./teacher-dashboard/teacher-dashboard.component";
import { ForgottenPasswordComponent } from "./forgotten-password/forgotten-password.component";
import { SettingsComponent } from "./settings/settings.component";
import { MatRadioModule } from "@angular/material/radio";
import { ClassroomService } from "./shared/classroom.service";
import { HttpModule } from "@angular/http";
import { LoggedinNavbarComponent } from "./shared/loggedin-navbar/loggedin-navbar.component";
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    ProfileComponent,
    FooterComponent,
    SignupComponent,
    LoggedinNavbarComponent,
    NavbarComponent,
    TeacherDashboardComponent,
    ForgottenPasswordComponent,
    SettingsComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    MatRadioModule,
    HttpModule
  ],
  providers: [ClassroomService],
  bootstrap: [AppComponent]
})
export class AppModule {}
