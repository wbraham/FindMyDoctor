import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"]
})
export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;

  ville = "defaultville";
  speciality = "defaultspeciality";

  constructor() {}

  ngOnInit() {}

  search() {
    if (
      this.ville === "defaultville" &&
      this.speciality === "defaultspeciality"
    ) {
      window.alert("veuillez choisir au moins une ville ou une spécialité");
    } else {
      localStorage.setItem("chosen_city", this.ville);
      localStorage.setItem("chosen_speciality", this.speciality);
      window.location.href = "search";
    }
  }
}
