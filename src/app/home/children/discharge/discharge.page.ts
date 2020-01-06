import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discharge',
  templateUrl: './discharge.page.html',
  styleUrls: ['./discharge.page.scss'],
})
export class DischargePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  search_child(){
    alert(12);
  }
}
