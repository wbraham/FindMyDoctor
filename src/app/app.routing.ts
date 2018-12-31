import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { ProfileComponent } from "./profile/profile.component";
import { TeacherDashboardComponent } from "./teacher-dashboard/teacher-dashboard.component";
import { LoginComponent } from "./login/login.component";
import { LandingComponent } from "./landing/landing.component";
import { SignupComponent } from "./signup/signup.component";
import { ForgottenPasswordComponent } from "./forgotten-password/forgotten-password.component";
import { SettingsComponent } from "./settings/settings.component";
import { SearchResultComponent } from "./search-result/search-result.component";

const routes: Routes = [
  { path: "profile", component: ProfileComponent },
  { path: "login", component: LoginComponent },
  { path: "landing", component: LandingComponent },
  { path: "signup", component: SignupComponent },
  { path: "teacher-dashboard", component: TeacherDashboardComponent },
  { path: "forgot-password", component: ForgottenPasswordComponent },
  { path: "settings", component: SettingsComponent },
  { path: "search", component: SearchResultComponent },
  { path: "", redirectTo: "landing", pathMatch: "full" }
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule {}
