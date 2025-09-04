import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInput} from "@angular/material/input";
import {MenuComponent} from "../menu/menu.component";


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatButtonModule, MatInput, MenuComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent  {

}
