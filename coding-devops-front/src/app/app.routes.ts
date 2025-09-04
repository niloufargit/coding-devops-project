import { Routes } from '@angular/router';
import {ImageListComponent} from "./Components/image-list/image-list.component";
import {CharacterHistoryComponent} from "./Components/character-history/character-history.component";
import {NavBarComponent} from "./Components/nav-bar/nav-bar.component";
import {CharacterSavedComponent} from "./Components/character-saved/character-saved.component";

export const routes: Routes = [
  { path: '', component: NavBarComponent },
  { path: 'all', component: CharacterSavedComponent },
];
