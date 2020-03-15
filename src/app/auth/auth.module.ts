import { AuthComponent } from './auth.component';
import { TokenInterceptor } from './shared/token.interceptor';
import { AuthGuard } from './shared/auth.guard';
import { AuthService } from './shared/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
    {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
    {path: ':register', component: RegisterComponent, canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
   
  ],
  providers: [
    AuthService,
    AuthGuard, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class AuthModule { }
