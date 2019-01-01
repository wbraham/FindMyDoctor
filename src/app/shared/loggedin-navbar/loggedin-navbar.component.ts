import { Component, OnInit } from "@angular/core";
import { ClassroomService } from "../classroom.service";

@Component({
  selector: "app-navigation-teacher",
  templateUrl: "./loggedin-navbar.component.html",
  styleUrls: ["./loggedin-navbar.component.scss"]
})
export class LoggedinNavbarComponent implements OnInit {
  constructor(private classroomService: ClassroomService) {}

  token = localStorage.getItem("user_token");

  ngOnInit() {}

  disconnectMe() {
    this.classroomService.logOutUser().subscribe(
      res => {
        console.log(res);
        this.token = "0";
        localStorage.setItem("is_logged_in", "no");
        window.location.href = "landing";
      },
      error => {
        console.log(error);
        window.alert("Erreur de déconnexion");
      }
    );
  }
}
