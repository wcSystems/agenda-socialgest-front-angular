import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent  implements OnInit {

  url_current: string = "";

  constructor(
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    
    this._route.url.subscribe((event) => {
      if(event[0]){
        this.url_current = event[0].path
      }
    });
  }

}
