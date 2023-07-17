import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent {
  empForm: FormGroup;

  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ];

  constructor(
    private _fb: FormBuilder,
    private _empService: AuthService,
    private _dialogRef: MatDialogRef<AddTeacherComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    // private _coreService: CoreService
  ) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: '',
    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      // if (this.data) {
      //   this._empService
      //     .updateEmployee(this.data.id, this.empForm.value)
      //     .subscribe({
      //       next: (val: any) => {
      //         this._coreService.openSnackBar('Employee detail updated!');
      //         this._dialogRef.close(true);
      //       },
      //       error: (err: any) => {
      //         console.error(err);
      //       },
      //     });
      } else {
    //     this._empService.addEmployee(this.empForm.value).subscribe({
    //       next: (val: any) => {
    //         this._coreService.openSnackBar('Employee added successfully');
    //         this._dialogRef.close(true);
    //       },
    //       error: (err: any) => {
    //         console.error(err);
    //       },
    //     });
    //   }
    // }
  }
  }
}
