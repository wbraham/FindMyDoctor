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
      specialite: string;
      adresse: string;
      telephone: string;
    }
  ];

  constructor(private classroomService: ClassroomService) {}

  ngOnInit() {
    //this.classroomService.getAllDoctors();
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
              this.getData[x].specialite +
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
    for (let i = 0; i < this.getData.length; i++) {
      console.log(this.getData[i].nom);
    }
  }
}
