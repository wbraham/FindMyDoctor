import { Component, OnInit } from "@angular/core";
import { ClassroomService } from "../shared/classroom.service";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  nomEcole = "";
  phone = "";
  email = "";
  password = "";
  password2 = "";

  constructor(private classroomService: ClassroomService) {}

  ngOnInit() {}

  signUpAdmin() {
    if (this.password.length >= 8 && this.password === this.password2) {
      this.classroomService
        .addUserToUserTable(this.email, this.password)
        .subscribe(
          res => {
            console.log(res);
            this.classroomService
              .addAdmin(this.nomEcole, this.phone, this.email, this.password)
              .subscribe(
                res => {
                  console.log(res);
                  window.alert(
                    "Vous pouvez vous connecter avec votre compte maintenant"
                  );
                  window.location.href = "login";
                },
                error => {
                  console.log(error);
                  window.alert("Ce compte existe déjaaa");
                }
              );
          },
          error => {
            console.log(error);
            window.alert("Ce compte existe déja");
          }
        );
    } else {
      window.alert(
        "Mot de passe très court ou simple à deviner, \n ajoutez des caractères spéciaux"
      );
    }
  }
}
