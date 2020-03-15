import { Router } from '@angular/router';
import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bwm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formData: any = {};
  errors: any[] = [];

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  register(){
    console.log(this.formData);
    this.authService.register(this.formData).subscribe(
      ()=>{
        this.router.navigate(['/login', {registered: 'success'}])
      },
      (errorResponse)=>{
        this.errors = errorResponse.error.errors;
      }
    )
  }

}
