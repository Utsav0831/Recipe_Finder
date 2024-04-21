import { Component, EventEmitter, Output } from '@angular/core';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { BackgroundComponent } from '../background/background.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [TopBarComponent, BackgroundComponent, FooterComponent, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent {

  @Output() resetComponents: EventEmitter<void> = new EventEmitter<void>();

  resetToDefault() {
    this.resetComponents.emit();
  }
  
  listItems: string = '';
  selectedFile: File | null = null;
  imageUrl: string | ArrayBuffer | null = null;
  recipeForm: FormGroup;
  submitted = false;

  

  constructor(private fb: FormBuilder) {
    this.recipeForm = this.fb.group({
      recipeTitle: ['', Validators.required],
      recipeIngredients: ['', Validators.required]
    });
  }

  closeForm(){
    const myForm = document.querySelector(".addRcp") as HTMLElement;
    myForm.style.display="none";
  }

  openForm(){
    const myForm = document.querySelector(".addRcp") as HTMLElement;
    myForm.style.display="block";
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files?.[0] || null;
    if (this.selectedFile) {
      // Display image preview
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          this.imageUrl = e.target.result;
        }
      };
      reader.readAsDataURL(this.selectedFile);
    } else {
      this.imageUrl = null;
    }
  }


  onSubmit(): void {
    if (this.recipeForm.valid) {
      this.submitted = true;
      this.closeForm();
      const title = this.recipeForm.value.recipeTitle;
      const ingredients = this.recipeForm.value.recipeIngredients.split('\n').map((line: string) => line.trim());
      
      // You can now use 'title', 'ingredients', and 'this.selectedFile' for further processing
      console.log('Title:', title);
      console.log('Ingredients:', ingredients);
      console.log('Selected File:', this.selectedFile);

      // Reset the form after submission
      this.recipeForm.reset();
      
    }
  }


}
