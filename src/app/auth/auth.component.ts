import { AuthService } from './shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bwm-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  formData: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
