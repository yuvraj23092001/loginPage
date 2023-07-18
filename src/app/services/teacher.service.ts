import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private _http: HttpClient) { }

  addTeacher(data:any): Observable<any>{
     return this._http.post('http://localhost:3000/teacher',data);
  }

  getAllTeachers() : Observable<any> { 
      return this._http.get('http://localhost:3000/teacher');
  }

  deleteTeacher(id : number) : Observable<any> {
     return this._http.delete(`http://localhost:3000/teacher/${id}`);
  }
}
