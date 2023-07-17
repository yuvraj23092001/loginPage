import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent {
  constructor(private _dialog:MatDialog){}

  addTeacherForm(){
    this._dialog.open(AddTeacherComponent);
  }

}
