import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
   constructor(private auth: AuthService){

   }

   get showToolbar():boolean {
    return this.auth.getShowToolbar();
   }
}
