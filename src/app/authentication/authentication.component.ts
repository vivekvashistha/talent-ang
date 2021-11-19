import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  form: FormGroup;
  baseapiurl = environment.baseapiurl;
  client_id = environment.client_id;
  client_secret = environment.client_secret 
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {  }




  ngOnInit() {
  	this.form = this.fb.group({
      email: '',
      password: ''
    });

  }
    onSubmit():void {
	    const formData = this.form.getRawValue();
	    const data = {
	      username: formData.email,
	      password: formData.password,
	      grant_type: 'password',
	      client_id: this.client_id,
	      client_secret: this.client_secret,
	      scope: '*'
	    };

	    this.http.post(this.baseapiurl+'api/v1/oauth/token', data).subscribe(
	      (result: any) => {
	        localStorage.setItem('token', result.access_token);
        	this.router.navigate(['/dashboard']);
	      },
	      error => {
	        console.log('error');
	        console.log(error);
	      }
	    );
	  }


}

