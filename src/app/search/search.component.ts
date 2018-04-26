import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient } from '@angular/common/http';
import {Response} from '@angular/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  giphy = [];

  constructor(private http:HttpClient) {
    // this.http = http;
   }

   searchTerm(): void {
    //  console.log(searchTerm.value);
   }
  ngOnInit() {
    this.http.get(environment.link2).subscribe((res:any) => {
      this.giphy = res.data;
      // console.log(this.giphy)

    })
  }

}
