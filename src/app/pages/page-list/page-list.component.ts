import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})

export class PageListComponent implements OnInit {
pages;
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
	    
	    this.http.get(this.baseapiurl+'api/v1/pages', {headers}).subscribe(
	    //console.log(result)
	      //result => this.user = result.data
	      (result: any) => {
	       this.pages = result.data;
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
	    
	    this.http.delete(this.baseapiurl+'api/v1/pages/'+id, {headers}).subscribe(
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
