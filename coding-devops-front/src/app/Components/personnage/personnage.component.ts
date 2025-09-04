import {Component, OnInit} from '@angular/core';
import {AppService} from "../../app.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-personnage',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './personnage.component.html',
  styleUrl: './personnage.component.css'
})
export class PersonnageComponent {
  constructor( ) { }





}
