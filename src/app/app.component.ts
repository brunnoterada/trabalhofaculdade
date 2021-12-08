import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "trabalhofaculdade";
  //array com as informações logo abaixo
  nome: string[] = [
    "Brunno terada Martins",
    "Alexandre Oliveira",
    "Mateus Humberto",
    "Rodrigo alexandre",
    "Fernando rodrigo",
  ];
  ru: string[] = ["2600243", "2834243", "2600123", "2600321", "2600485"];
  curso: string[] = [
    "Analise e desenvolvimento de sistemas",
    "Medicina",
    "Direito",
    "Engenharia civil",
    "Quimica",
  ];
  dtnasc: string[] = [
    "07/03/1999",
    "05/04/1985",
    "28/05/2000",
    "21/09/1999",
    "02/02/2002",
  ];
}
