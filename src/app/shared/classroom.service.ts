import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { map } from "rxjs/operators";

const httpOptions = {
  headers: new Headers({
    Accept: "application/json",
    "Content-Type": "application/json"
  })
};

@Injectable()
export class ClassroomService {
  constructor(private http: Http) {}

  token = localStorage.getItem("user_token");

  addUser(nomComplet, email, password) {
    return this.http
      .post(
        "http://localhost:3000/api/Users",
        {
          name: nomComplet,
          email: email,
          password: password
        },
        httpOptions
      )
      .pipe(map(res => res));
  }

  getUserAuth(email, password) {
    return this.http
      .post(
        "http://localhost:3000/api/Users/login",
        {
          email: email,
          password: password
        },
        httpOptions
      )
      .pipe(map(res => res));
  }

  logOutUser() {
    return this.http
      .post(
        "http://localhost:3000/api/Users/logout?access_token=" + this.token,
        null
      )
      .pipe(map(res => res));
  }

  addComment(
    nomgroupe,
    filiale,
    niveau,
    anneeuniversitaire,
    numerogroupe,
    owner_id
  ) {
    return this.http
      .post(
        "http://localhost:3000/api/groupes",
        {
          nomgroupe: nomgroupe,
          filiale: filiale,
          niveau: niveau,
          anneeuniversitaire: anneeuniversitaire,
          numerogroupe: numerogroupe,
          owner_id: owner_id
        },
        httpOptions
      )
      .pipe(map(res => res));
  }

  getAllDoctors() {
    return this.http
      .get("http://localhost:4200/assets/data/beja.json")
      .pipe(map(res => res));
  }
}
