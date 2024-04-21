import { ExploreComponent } from './explore/explore.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BackgroundComponent } from './background/background.component';
import { ApiService } from './background/background.service';
import { IconsComponent } from './icons/icons.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { FormServiceService } from './form-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    RouterModule,
    TopBarComponent,
    BackgroundComponent, 
    ExploreComponent, 
    IconsComponent, 
    FooterComponent, 
    CategoryComponent,
    CommonModule,
    FormsModule,
    HttpClientModule,
  ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ApiService]
})


export class AppComponent {
  title = 'RecipeFinder';
  profileDisplay: string = 'none';
  backgroundDisplay: string = 'block';
  exploreDisplay:String = 'block';
  categoryDisplay: String = 'block';

  handleToggle(showProfile: boolean) {
    if (showProfile) {
      this.profileDisplay = 'block';
      this.backgroundDisplay = 'none';
      this.categoryDisplay = 'none';
      this.exploreDisplay = 'none';
    } else {
      this.profileDisplay = 'none';
      this.backgroundDisplay = 'block';
      this.categoryDisplay = 'block';
      this.exploreDisplay = 'block';
    }
  }

  handleReset() {
    this.profileDisplay = 'none';
    this.backgroundDisplay = 'block';
    this.categoryDisplay = 'block';
      this.exploreDisplay = 'block';
  }

  constructor(private formService: FormServiceService) {}

  closeLform():void{
    const close = document.querySelector("#close") as HTMLElement;
    const l_form = document.querySelector(".login") as HTMLElement
    if(close){
      l_form.style.display="none";
    }
  }

  openLform():void{
    const btn = document.querySelector("app-top-bar #login_btn") as HTMLElement;
    const l_form = document.querySelector(".login") as HTMLElement
    if(btn){
      l_form.style.display="block";
    }
  }

 

}