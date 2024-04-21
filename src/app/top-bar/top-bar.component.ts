import { Component, EventEmitter, Output } from '@angular/core';
import { FormServiceService } from '.././form-service.service';
import { Router, RouterModule } from '@angular/router';
import { BackgroundComponent } from '../background/background.component';
import { routes } from '../app.routes';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [BackgroundComponent, RouterModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  @Output() toggleProfileBackground: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleComponents() {
    this.toggleProfileBackground.emit(true);
  }

  constructor(private formService: FormServiceService, private router: Router) {}

  reload(){
    window.location.reload();
  }

  closeform():void{
    const close = document.querySelector("#close") as HTMLElement;
    const l_form = document.querySelector(".login") as HTMLElement;
    const r_form = document.querySelector(".register") as HTMLElement
    if(close){
      l_form.style.display="none";
      r_form.style.display='none';
    }
  }

  openLform():void{
    const btn = document.querySelector("#login_btn") as HTMLElement;
    const l_form = document.querySelector(".login") as HTMLElement;
    const r_form = document.querySelector(".register") as HTMLElement;
    if(btn){
      l_form.style.display="block";
      r_form.style.display='none';
    }
  }

  openRform():void{
    const btn2 = document.querySelector("#register_btn") as HTMLElement;
    const l_form = document.querySelector(".login") as HTMLElement;
    const r_form = document.querySelector(".register") as HTMLElement;
    if(btn2){
      l_form.style.display="none";
      r_form.style.display="block";
    }
  }


  enterLogin(event:Event):void{
    event.preventDefault();
    const bar1 = document.querySelector(".container") as HTMLElement;
    const bar2 = document.querySelector(".user_container") as HTMLElement;
    const enter = document.querySelector("form button") as HTMLElement;

    if(enter){
      this.closeform();
      bar1.style.display="none";
      bar2.style.display="flex";
    }
  }

  exitLogin(event:Event):void{
    event.preventDefault();
    const bar1 = document.querySelector(".container") as HTMLElement;
    const bar2 = document.querySelector(".user_container") as HTMLElement;
    const exit = document.querySelector("#logout") as HTMLElement;
    const drop = document.querySelector(".profile") as HTMLElement;

    if(exit){
      bar1.style.display="flex";
      bar2.style.display="none";
      drop.style.display="none";
    }
  }

  show_profile(event:Event):void{
    event.preventDefault();
    const drop = document.querySelector(".profile") as HTMLElement;
    const prfle = document.querySelector("#pp") as HTMLElement;

    if(prfle){
      if(drop.style.display==="flex"){
        drop.style.display="none";
      }

      else{
        drop.style.display="flex";
      }
      
    }
  }

  myprofile(){
    this.router.navigateByUrl("/profile");
  }

}
