import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ClassroomService } from "app/shared/classroom.service";
import { Response } from "@angular/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  test: Date = new Date();
  emaill = "";
  pass = "";

  constructor(
    public router: Router,
    private classroomService: ClassroomService
  ) {}

  ngOnInit() {}

  login = () => {
    this.onGetUser(this.emaill, this.pass);
  };

  onGetUser(username, password) {
    this.classroomService.getUserAuth(username, password).subscribe(
      res => {
        var objet = JSON.parse(res.text());
        if (objet != null) {
          console.log(objet.id);
          localStorage.setItem("user_token", objet.id);
          localStorage.setItem("is_logged_in", "yes");
          window.location.href = "landing";
        } else {
          console.log("Erreur authentification!");
          window.alert("Erreur authentification");
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
