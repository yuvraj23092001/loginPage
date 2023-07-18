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
  displayedColumns: string[] = ['id', 'firstName', 'lastName' , 'email','salary' , 'dob', 'department', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort; 
  constructor(private _dialog:MatDialog, private _teacherService: TeacherService){}
  
  ngOnInit(): void {
    this.getAllTeachers();
    
  }
  
  addTeacherForm(){
    const dialogRef = 
    this._dialog.open(AddTeacherComponent);
    dialogRef.afterClosed().subscribe({next: (val) =>{
       if(val){ // if we are recieving a value then we are returning true 
          this.getAllTeachers();
       }
    }})
  }

  getAllTeachers(){
    this._teacherService.getAllTeachers().subscribe({
       next:(res :any) => {
          this.dataSource = new MatTableDataSource(res);
       },
       error: console.log,
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteTeacher(id:number){
     this._teacherService.deleteTeacher(id).subscribe({
      next:(res) =>{
         alert("delete teacher");
         this.getAllTeachers();
      },
      error:(err) =>{

      }
     })
  }

}
