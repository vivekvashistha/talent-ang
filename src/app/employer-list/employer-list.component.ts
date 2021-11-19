import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

declare var $: any;
@Component({
  selector: 'app-employer-list',
  templateUrl: './employer-list.component.html',
  styleUrls: ['./employer-list.component.css']
})
export class EmployerListComponent implements OnInit {

  users;
  baseapiurl = environment.baseapiurl;
  constructor(private http: HttpClient, private router: Router) {  }


  	ngOnInit() {

  		if(!localStorage.getItem('token'))
  		{
  			this.router.navigate(['/auth/login']);
  		}
  		const headers = new HttpHeaders({
	      Authorization: `Bearer ${localStorage.getItem('token')}`
	    });
	    
	    this.http.get(this.baseapiurl+'api/v1/employers', {headers}).subscribe(
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
	    
	    this.http.delete(this.baseapiurl+'api/v1/employer/'+id, {headers}).subscribe(
	    //console.log(result)
	      //result => this.user = result.data
	      (result: any) => {
	       this.users = result.data;
	       $.notify({
		          icon: "notifications",
		          message: result.message,

		      },{
		          type: result.status,
		          timer: 3000,
		          placement: {
		              from: 'top',
		              align: 'right'
		          },
		          template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
		            '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
		            '<i class="material-icons" data-notify="icon">notifications</i> ' +
		            '<span data-notify="title">{1}</span> ' +
		            '<span data-notify="message">{2}</span>' +
		            '<div class="progress" data-notify="progressbar">' +
		              '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
		            '</div>' +
		            '<a href="{3}" target="{4}" data-notify="url"></a>' +
		          '</div>'
		      });
	      },
	      error => {
	        console.log('error');
	        console.log(error);
	      }
	    );
  }
}
