import { Component } from '@angular/core';
import { MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatFormField} from "@angular/material/form-field";
import {MatSelectModule} from '@angular/material/select';
import { MatLabel} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {AppService} from "../../app.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatToolbar, MatButton, RouterLink, MatFormField, MatSelectModule, MatLabel, FormsModule, NgIf, NgForOf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  selectedSpeciesOption: string = '';
  selectedClassOption: string = '';
  selectedJobOption: string = '';
  speciesOptions: string[] = ['Humain', 'Elfe', 'Nain', 'Orque'];
  classOptions: string[] = ['Guerrier', 'Mage', 'Voleur', 'Prêtre'];
  jobOptions: string[] = ['Forgeron', 'Marchand', 'Chasseur', 'Alchimiste'];

  constructor(private appService: AppService, private router:Router) { }

  saveCharacter() {
    const character = {
      species: this.selectedSpeciesOption,
      class: this.selectedClassOption,
      job: this.selectedJobOption
    };

    this.appService.savePersonage(character).subscribe(response => {
      console.log('Character was successfully saved:', response);
    }, error => {
      console.error('Error: Character was not saved:', error);
    });
  }

  navigateToImages() {
    this.router.navigate(['/all']);
  }
  navigateToOther() {
    this.router.navigate(['/character']);
  }

}
