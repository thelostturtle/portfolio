import { Component, OnInit } from '@angular/core';
declare var AnimateOnScrollModule:any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
 
  
})
export class HeaderComponent implements OnInit {
  state = 'shown';
  constructor() { }

  ngOnInit(): void {
  }
  toanm(){
    document.getElementById("anim")?.scrollIntoView({behavior:"smooth"});
  }
  toHome()
  {
    document.getElementById("home")?.scrollIntoView({behavior:"smooth"});
  }
  toabout()
  {
    document.getElementById("about")?.scrollIntoView({behavior:"smooth"}); 
  }
 

}
