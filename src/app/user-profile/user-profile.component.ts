import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
	
	user;
  	form: FormGroup;
  	baseapiurl = environment.baseapiurl;
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {  }


  	ngOnInit() {
this.form = this.fb.group({
      first_name: '',
      last_name: ''
    });

  		if(!localStorage.getItem('token'))
  		{
  			this.router.navigate(['/auth/login']);
  		}
  		const headers = new HttpHeaders({
	      Authorization: `Bearer ${localStorage.getItem('token')}`
	    });
	    //console.log(localStorage.getItem('token'));
	    this.http.get(this.baseapiurl+'/api/v1/getProfile', {headers}).subscribe(
	    //console.log(result)
	      //result => this.user = result.data
	      (result: any) => {
	       this.user = result.data;
	      },
	      error => {
	        console.log('error');
	        console.log(error);
	      }
	    );
  	}

  	logout(){
  		localStorage.removeItem('token');
  		this.router.navigate(['/auth/login']);
  	}

}