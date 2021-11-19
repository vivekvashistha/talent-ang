import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})

export class JobListComponent implements OnInit {
users;
baseapiurl = environment.baseapiurl;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {

  		if(!localStorage.getItem('token'))
  		{
  			this.router.navigate(['/auth/login']);
  		}
  		const headers = new HttpHeaders({
	      Authorization: `Bearer ${localStorage.getItem('token')}`
	    });
	    
	    this.http.get(this.baseapiurl+'api/v1/candidates', {headers}).subscribe(
	    //console.log(result)
	      //result => this.user = result.data
	      (result: any) => {
	       this.users = result.data;
	      },
	      error => {
	        console.log('error');
	        console.log(error);
	      }
	    );
  }

  deleteResource(id) {
  	if(!localStorage.getItem('token'))
  		{
  			this.router.navigate(['/auth/login']);
  		}
  		const headers = new HttpHeaders({
	      Authorization: `Bearer ${localStorage.getItem('token')}`
	    });
	    
	    this.http.delete(this.baseapiurl+'api/v1/candidate/'+id, {headers}).subscribe(
	    //console.log(result)
	      //result => this.user = result.data
	      (result: any) => {
	       //this.user = result.data;
	      },
	      error => {
	        console.log('error');
	        console.log(error);
	      }
	    );
  }

}
