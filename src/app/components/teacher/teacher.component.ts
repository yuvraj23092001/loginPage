import { Component, OnInit , ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { TeacherService } from 'src/app/services/teacher.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'secondName' , 'salary' ,'progress', 'fruit'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort; 
  constructor(private _dialog:MatDialog, private _teacherService: TeacherService){}
  
  ngOnInit(): void {
    this.getAllTeachers();
    
  }
  
  addTeacherForm(){
    this._dialog.open(AddTeacherComponent);
  }

  getAllTeachers(){
    this._teacherService.getAllTeachers().subscribe({
       next:(res :any) => {
          console.log(res);
       },
       error: console.log,
    })
  }

}
