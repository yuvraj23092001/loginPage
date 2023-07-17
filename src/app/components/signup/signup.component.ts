import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';
  signUpForm!: FormGroup;
  constructor(private fb : FormBuilder,private auth : AuthService){}
  ngOnInit() {
    this.auth.setShowToolbar(false);
    this.signUpForm = this.fb.group({
      email:['', Validators.required],
      Fname:['', Validators.required],
      Lname:['', Validators.required],
      contact:['', Validators.required],
      dob:['', Validators.required],
      password:['', Validators.required]
    })
  }
  
  ngOnDestory():void {
    this.auth.setShowToolbar(true);
 }
  private validateAllFormFields(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(field =>{
      const control = formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true});
      }
      else if(control instanceof FormGroup){
        this.validateAllFormFields(control)

      }
    })
  }
  
  onSignUp(){
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
      this.validateAllFormFields(this.signUpForm);
      alert("Your form valid");
      this.auth.signUp(this.signUpForm.value).subscribe({
        next: (res =>{
           alert(res.message)

        })
        ,error:(err =>{
          alert(err?.error.message)
        })
      })
      // this.auth.signIn(this.loginForm.value).subscribe({
      //   next: (res) => {
      //     console.log(res.message);
      //     this.loginForm.reset();
      //     this.auth.storeToken(res.accessToken);
      //     this.auth.storeRefreshToken(res.refreshToken);
      //     const tokenPayload = this.auth.decodedToken();
      //     this.userStore.setFullNameForStore(tokenPayload.name);
      //     this.userStore.setRoleForStore(tokenPayload.role);
      //     this.toast.success({detail:"SUCCESS", summary:res.message, duration: 5000});
      //     this.router.navigate(['dashboard'])
      //   },
      //   error: (err) => {
      //     this.toast.error({detail:"ERROR", summary:"Something when wrong!", duration: 5000});
      //     console.log(err);
      //   },
      // });
    } else { 
      // throw the error using toaster and with required fields
      //ValidateForm.validateAllFormFields(this.loginForm);
      this.validateAllFormFields(this.signUpForm);
      alert("Your form is invalid")
    }

    

  }


  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }

}
