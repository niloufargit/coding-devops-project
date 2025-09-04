import { Component } from '@angular/core';
import {AppService} from "../../app.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-character-history',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './character-history.component.html',
  styleUrl: './character-history.component.css'
})
export class CharacterHistoryComponent {

}
