import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient } from '@angular/common/http';
import {Response} from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // http:Http;
  giphy = [];
  

  constructor(private http:HttpClient) {
    // this.http = http;
   }

  ngOnInit() {
    this.http.get(environment.link1).subscribe((res:any) => {
      this.giphy = res.data;
      // console.log(this.giphy)

    })
  }

}
