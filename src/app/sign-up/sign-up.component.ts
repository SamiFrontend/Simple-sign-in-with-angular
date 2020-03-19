import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

 countries : string[] = ['egypt' , 'Saudi Arabia' , 'France' , 'UAE'];

 active_ : boolean = true ;

 setActive(){
   return this.active_ = !this.active_ ;
 }
}
