import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {AppService} from "../../app.service";

@Component({
  selector: 'app-character-saved',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './character-saved.component.html',
  styleUrl: './character-saved.component.css'
})
export class CharacterSavedComponent implements OnInit{
  images: any[] = [];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getGeneratedImages();
  }


  getGeneratedImages() {
    this.appService.getAllPersonages().subscribe(
      (response: any) => {
        this.images = response;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des images :', error);
      }
    );
  }
}
