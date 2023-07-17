import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth:AuthService
  ) {}
  
  ngOnInit() {
    this.auth.setShowToolbar(false);
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnDestory():void {
     this.auth.setShowToolbar(true);
  }
  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.auth.login(this.loginForm.value).subscribe({
        next: (res) => {
              alert(res.message);
      },
      error: (err) => {
      
           alert(err);
        },});
      // this.validateAllFormFields(this.loginForm);
      // alert("Your form valid");
      // this.auth.login(this.loginForm.value).subscribe({
      //   next: (res) => {
      //         console.log(res.message);
      // },
      // error: (err) => {
      
      //      console.log(err);
      //   },});
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
      
      this.validateAllFormFields(this.loginForm);
      alert("Your form is invalid")
    }
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
  

}
