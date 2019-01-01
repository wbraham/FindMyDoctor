import { Component, OnInit } from "@angular/core";
import { ClassroomService } from "app/shared/classroom.service";
import { Http } from "@angular/http";

@Component({
  selector: "app-search-result",
  templateUrl: "./search-result.component.html",
  styleUrls: ["./search-result.component.scss"]
})
export class SearchResultComponent implements OnInit {
  myGroups: string[] = [];
  getData: [
    {
      nom: string;
      ville: string;
      specialité: string;
      adresse: string;
      telephone: string;
    }
  ];

  chosenCity = "defaultville";
  chosenSpeciality = "defaultspeciality";

  constructor(private classroomService: ClassroomService) {}

  ngOnInit() {
    this.chosenCity = localStorage.getItem("chosen_city");
    this.chosenSpeciality = localStorage.getItem("chosen_speciality");
    if (
      this.chosenCity === "defaultville" &&
      this.chosenSpeciality === "defaultspeciality"
    ) {
      this.getAllDoctors();
    } else if (
      this.chosenCity === "defaultville" &&
      this.chosenSpeciality != "defaultspeciality"
    ) {
      // render by speciality
      this.getDoctorsBySpeciality();
    } else if (
      this.chosenCity != "defaultville" &&
      this.chosenSpeciality === "defaultspeciality"
    ) {
      // render by city
      this.getDoctorsByCity();
    } else if (
      this.chosenCity != "defaultville" &&
      this.chosenSpeciality != "defaultspeciality"
    ) {
      // render by city and by speciality
      this.getDoctorsByCityAndBySpeciality();
    }

    for (let i = 0; i < this.getData.length; i++) {
      console.log(this.getData[i].nom);
    }
  }

  getAllDoctors() {
    this.classroomService.getAllDoctors().subscribe(
      res => {
        this.getData = JSON.parse(res.text());
        console.log(res);
        for (var x = 0; x < this.getData.length; x++) {
          this.myGroups.push(
            this.getData[x].nom +
              "$#" +
              this.getData[x].ville +
              "$#" +
              this.getData[x].specialité +
              "$#" +
              this.getData[x].adresse +
              "$#" +
              this.getData[x].telephone
          );
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getDoctorsBySpeciality() {
    this.classroomService.doctorsBySpeciality().subscribe(
      res => {
        this.getData = JSON.parse(res.text());
        console.log(res);
        for (var x = 0; x < this.getData.length; x++) {
          if (this.getData[x].specialité === this.chosenSpeciality) {
            this.myGroups.push(
              this.getData[x].nom +
                "$#" +
                this.getData[x].ville +
                "$#" +
                this.getData[x].specialité +
                "$#" +
                this.getData[x].adresse +
                "$#" +
                this.getData[x].telephone
            );
          }
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getDoctorsByCity() {
    this.classroomService.doctorsByCity().subscribe(
      res => {
        this.getData = JSON.parse(res.text());
        console.log(res);
        for (var x = 0; x < this.getData.length; x++) {
          this.myGroups.push(
            this.getData[x].nom +
              "$#" +
              this.getData[x].ville +
              "$#" +
              this.getData[x].specialité +
              "$#" +
              this.getData[x].adresse +
              "$#" +
              this.getData[x].telephone
          );
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getDoctorsByCityAndBySpeciality() {
    this.classroomService.doctorsByCityAndBySpeciality().subscribe(
      res => {
        this.getData = JSON.parse(res.text());
        console.log(res);
        for (var x = 0; x < this.getData.length; x++) {
          if (this.getData[x].specialité === this.chosenSpeciality) {
            this.myGroups.push(
              this.getData[x].nom +
                "$#" +
                this.getData[x].ville +
                "$#" +
                this.getData[x].specialité +
                "$#" +
                this.getData[x].adresse +
                "$#" +
                this.getData[x].telephone
            );
          }
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
