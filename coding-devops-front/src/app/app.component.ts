import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { NavBarComponent} from './Components/nav-bar/nav-bar.component';
import {MenuComponent} from "./Components/menu/menu.component";
import {MatToolbar} from "@angular/material/toolbar";
import {FormsModule} from "@angular/forms";
import {HttpClientModule, HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavBarComponent,
    MenuComponent,
    MatToolbar,
    FormsModule,
    HttpClientModule,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'coding-devops-front';
}
