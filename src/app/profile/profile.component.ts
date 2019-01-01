import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  doctorName = "";
  doctorSpeciality = "";
  doctorAddress = "";
  doctorCity = "";
  doctorPhone = "";

  constructor() {}

  ngOnInit() {
    this.doctorName = localStorage.getItem("doctor_name");
    this.doctorSpeciality = localStorage.getItem("doctor_speciality");
    this.doctorAddress = localStorage.getItem("doctor_address");
    this.doctorCity = localStorage.getItem("doctor_city");
    this.doctorPhone = localStorage.getItem("doctor_phone");
  }
}
