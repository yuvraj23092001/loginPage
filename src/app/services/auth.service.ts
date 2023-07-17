import { BootstrapOptions, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl:string ="https://localhost:7022/api/User/"
  private showToolbar: boolean = true ;

  setShowToolbar(show : boolean): void {
    this.showToolbar =show;
  }
    
  getShowToolbar(): boolean{
    return this.showToolbar;
  }
  constructor(private http : HttpClient, private router:Router) { }

  signUp(userObj:any){
    return this.http.post<any>("https://localhost:7022/api/User/Register",userObj)
  }

  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj)

  }
}
