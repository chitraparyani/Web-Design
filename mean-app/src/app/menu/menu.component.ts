import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  data: Array<any>;

  constructor(private httpClient: HttpClient) {
    console.log("hello fellow users");
  }

  getAll(): Observable<any> {
    return this.httpClient.get('http://api.eatstreet.com/publicapi/v1/restaurant/2d2dbb0627fd709ff15b4f2e73e76180e6a1c20b08aa17b4/menu?access-token=6fedd5ed1cda53b1');
  }

  ngOnInit() {
    this.getAll().subscribe(data => {
      this.data = data;
    });
  }

}
