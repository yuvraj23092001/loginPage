import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent {
   teacherForm: FormGroup;

  

  constructor(
    private _fb: FormBuilder,
    private _teacherService: TeacherService,
    private _dialogRef: MatDialogRef<AddTeacherComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    // private _coreService: CoreService
  ) {
    this.teacherForm = this._fb.group({
      firstName:'',
      lastName:'',
      email:'',
      dob:'',
      salary:'',
      department:''
    })
  } 

  onFormSubmit(){
    if(this.teacherForm.valid){
       this._teacherService.addTeacher(this.teacherForm.value).subscribe({
        next: (val:any) =>{
          alert("teacher Added");
          this._dialogRef.close(true);
        },
        error: (err:any) =>{
         console.error(err);
        }
       })
    }
  }
}
