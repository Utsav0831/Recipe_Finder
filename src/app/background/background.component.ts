import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './background.service';
import { FormsModule } from '@angular/forms';
import { ExploreComponent } from '../explore/explore.component';
import { CategoryComponent } from '../category/category.component';
@Component({
  selector: 'app-background',
  standalone: true,
  imports: [CommonModule, FormsModule, ExploreComponent, CategoryComponent],
  templateUrl: './background.component.html',
  styleUrl: './background.component.css'
})
export class BackgroundComponent {
  searchItem: string = '';
  searchResults: any[] = [];
  selectedRecipeLabel: string = '';
  selectedRecipeSrc: string = '';
  selectedRecipeIngredients: string[] = [];
  showLoading: boolean = false;
  noResults: boolean = false;
  

  constructor(private apiService: ApiService) {}

  searchRecipes() {
    
    if (this.searchItem.trim()) {
      this.noResults = false;
      this.showLoading = true;
      this.apiService.searchRecipes(this.searchItem.trim()).subscribe({
        next: (data) => {
          this.searchResults = data.hits || [];
          this.showLoading = false;
          this.noResults=false;
        },
        error: (error) => {
          console.log("Error fetch 123",error);
          this.noResults=true;
        }
      });
    } else {
      this.noResults=true;
    }

    window.scroll({
      top: 500,
      left: 0,
      behavior: 'smooth'
    });
  }

  handleFigureClick(recipe: any) {
    // Update selected recipe label and source based on the clicked recipe
    this.selectedRecipeLabel = recipe.recipe.label;
    this.selectedRecipeSrc = recipe.recipe.image;
    this.selectedRecipeIngredients = recipe.recipe.ingredientLines || [];

    const lists = document.querySelector("#results") as HTMLElement;
    const details = document.querySelector(".recipeDetails") as HTMLElement;
    const explore = document.querySelector("app-explore") as HTMLElement;
    const category = document.querySelector("app-category") as HTMLElement;
    const hash = document.querySelector("#hash") as HTMLElement;
    lists.style.display = "none";
    explore.style.display = "none";
    category.style.display = "none";

    window.scroll({
      top: 800,
      left: 0,
      behavior: 'smooth'
    });

    details.scrollIntoView({ behavior: 'smooth'});
  }

  goBack(event:Event){
    event.preventDefault();
    const lists = document.querySelector("#results") as HTMLElement;
    const explore = document.querySelector("app-explore") as HTMLElement;
    const category = document.querySelector("app-category") as HTMLElement;
    lists.style.display = "flex";
    lists.style.display = "";
    explore.style.display = "";
    category.style.display = "";
  }
}






