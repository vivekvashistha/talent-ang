import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {  Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-employer-detail',
  templateUrl: './employer-detail.component.html',
  styleUrls: ['./employer-detail.component.css']
})

export class EmployerDetailComponent implements OnInit {
user;
currenturl;
form_emp: FormGroup;
baseapiurl = environment.baseapiurl;
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

  
		const id = this.route.snapshot.paramMap.get('id')!;

  		if(!localStorage.getItem('token'))
  		{
  			this.router.navigate(['/auth/login']);
  		}
  		const headers = new HttpHeaders({
	      Authorization: `Bearer ${localStorage.getItem('token')}`
	    });
	    
	    this.http.get(this.baseapiurl+'api/v1/employer/profile/'+id, {headers}).subscribe(
	    //console.log(result)
	      //result => this.user = result.data
	      (result: any) => {
	       this.user = result.data;
	      	this.currenturl = 'update';

	      	if(this.router.url == '/employer/view/'+this.user.id)
	       {
	       	this.currenturl = 'view';
	       }
	       if(this.currenturl == 'update')
	       {
       		 this.form_emp = this.fb.group({
		      first_name: this.user.first_name,
		      last_name: this.user.last_name
		    });
	       } 
	      },
	      error => {
	        console.log('error');
	        console.log(error);
	      }
	    );
  }

  updateResource(id) {

	    const formData = this.form_emp.getRawValue();
	    const data = {
	      first_name: formData.first_name,
	      last_name: formData.last_name,
	    };

	    this.http.put(this.baseapiurl+'api/v1/candidate/'+id, data).subscribe(
	      (result: any) => {
	        this.router.navigate(['/employers']);
	      },
	      error => {
	        console.log('error');
	        console.log(error);
	      }
	    );
	  }

}
